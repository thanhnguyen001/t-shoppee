/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { addToCart } from '../../../actions/actions';
import axiosClient from '../../../api/callApi';
import userApi from '../../../api/usersApi';
import Province from '../Province';
// import productApi from '../../../api/productApi';
import DetailProduct from './DetailProduct';
import './Product.css';

function Product({ match }) {

    const userToken = useSelector(state => state.user)?.user;
    // const [user, setUser] = useState({});
    // console.log(userToken);
    // console.log(match);

    const dispatch = useDispatch();

    // const initialImg = "https://cf.shopee.vn/file/f51a30f371746b198c3862bd68a1c87a";
    const initialQuantity = 1;
    const maxQuantity = 50;
    const [product, setProduct] = useState({
        "type": "",
        "name": "",
        "new_price": '',
        "old_price": '',
        "sold": "27,3k",
        "location": "Hà Nội",
        "img": [],
        "product_available": '',
        "info": ""

    });

    const [temp, setTemp] = useState(1);

    const [slideWidth, setSlideWidth] = useState(null);
    const [imageMain, setImgMain] = useState(null);
    const [slideImg, setSlideImg] = useState([]);
    const [isLiked, setIsLiked] = useState(false);
    const [quantity, setQuantity] = useState(initialQuantity);

    const slideWrap = useRef(null);


    // Fetch Product Type
    useEffect(() => {
        const fetchProduct = async () => {
            let type = 'ThoiTrangNam';
            if (match.params.type === 'Thời-Trang-Nam') match.params.type = 'ThoiTrangNam';
            if (match.params.type) {
                switch (match.params.type) {
                    case 'Thời-Trang-Nữ':
                        type = 'ThoiTrangNu';
                        break;
                    default:
                        type = 'ThoiTrangNam';
                }
            }
            const url = `/${type}/${match.params.id}`;
            const response = await axiosClient.get(url);
            // console.log(response);
            setProduct(response);
            setImgMain(response.img[0])
        };

        fetchProduct();
    }, [match.params])

    //Set time to load image child and set carousel
    useEffect(() => {
        const setTimeToRead = () => {
            const slideWidthElement = document.querySelector('.product-img--child');
            const slideImage = document.querySelectorAll('.product-img--child-ntn');
            setSlideImg(slideImage);
            setSlideWidth(Math.ceil(slideWidthElement?.clientWidth / slideImage[0]?.clientWidth));
            const slideWrapElement = document.querySelector('.product-img--child-wrap');
            if (slideWrapElement) {
                slideWrapElement.style.transition = 'all linear 0.4s';
            }
        }
        setTimeout(() => {
            setTimeToRead();
        }, 500)
        window.onbeforeunload = () => {
            window.scrollTo(0, 0);
        }
    }, [])

    const handleMouseOver = (e) => {
        // console.log(e.target.src)
        const sliderItems = document.querySelectorAll('.product-img--child-ntn');
        Array.from(sliderItems).forEach(item => {
            item.classList.remove('active');
        })
        if (e.target.src) {
            const item = e.target.closest('.product-img--child-ntn');
            item.classList.add('active');
            setImgMain(e.target.src);
        }

    }

    let count = 0;

    const handleSlide = (num) => {
        count += num;
        // console.log(slideWrap.current);
        // console.log(count);
        if (count < 0) {
            count = 0;
            return;
        }
        if (count > slideImg.length - slideWidth) {
            count = slideImg.length - slideWidth
            return
        };
        if (slideWrap.current) {
            slideWrap.current.style.transition = 'all linear 0.4s';
            slideWrap.current.style.transform = `translateX(${-slideImg[0].clientWidth * count}px)`
        }
        // console.log(count)
    }

    const handleActiveModal = () => {
        const modalElement = document.querySelector('.express--location-list-province');
        const arrowUp = document.querySelector('.modal-express--location .fa-chevron-up');
        const arrowDown = document.querySelector('.modal-express--location .fa-chevron-down');
        if (modalElement) {
            modalElement.classList.toggle('active');
            arrowUp.classList.toggle('hide');
            arrowDown.classList.toggle('hide');
        }
    }

    const handleQuantity = (num) => {
        let temp = quantity + num;
        if (temp > maxQuantity) {
            temp = maxQuantity;
        }
        if (temp < 0) temp = 0;
        setQuantity(temp);
    }

    const handleEnterQuantity = (e) => {
        let value = Number.parseInt(e.target.value);
        if (!Number.isNaN(value) && value > 0) {
            if (value > maxQuantity) value = maxQuantity;
            setQuantity(value);
            if (value < 10) setTemp(value);
        }
        if (e.target.value === '') setQuantity('');
    }

    const handleBlurQuantity = (e) => {
        if (quantity === '') {
            setQuantity(temp);
        }
    }

    const handleMoveToAssessment = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 2030,
            left: 0,
            behavior: 'smooth'
        });
    }

    const handleAddProductToCart = async (status) => {
        const cart = await JSON.parse(localStorage.getItem('CART'));
        if (cart) {
            let isExist = false;
            for (let item of cart) {
                if (product.id === item.id && product.type === item.type) {
                    isExist = true;
                    item.quantity = item.quantity + quantity;
                    break;
                }
            }
            if (!isExist) {
                const newProduct = {
                    ...product,
                    shop: product.shop.name,
                    quantity: quantity,
                    img: product.img[0],
                    isChecked: status
                }
                cart.push(newProduct);
                dispatch(addToCart(cart))
                // console.log(cart);
            }
            else {
                dispatch(addToCart(cart));
                // console.log(cart)
            }

            cart.pop();

            cart.push({
                ...product,
                shop: product.shop.name,
                quantity: quantity,
                img: product.img[0],
                isChecked: false
            })

            const data = JSON.stringify({
                cart: cart
            })

            userApi.patchUser(userToken.id, data)
        }

        if (!status) {
            const modalAddToCartE = document.querySelector('.product-buyer--modal');
            if (modalAddToCartE) {
                modalAddToCartE.classList.add('show');
            }
        }

    }

    const handleHideModal = () => {
        const modalAddToCartE = document.querySelector('.product-buyer--modal');
        if (modalAddToCartE) {
            modalAddToCartE.classList.remove('show');
        }
    }

    const handleUpdateAddress = (address) => {
        const span = document.querySelector(".modal-express--location span");
        if (span) {
            span.textContent = address;
            handleActiveModal();
        }
    }


    const showImgChild = (imgs) => {
        return imgs.map((img, index) => {
            return <div className={`product-img--child-ntn ${index === 0 && 'active'}`} key={index}>
                <img
                    onMouseOver={(e) => handleMouseOver(e)}
                    alt="img"
                    src={img}
                />
            </div>
        })
    }


    return (
        <div className="product-buyer">
            <div className="product-path">
                <a href="#" className="home-page">Shopee</a>
                <i className="fas fa-chevron-right"></i>
                <span className="path-to-product">{product.type}</span>
                <i className="fas fa-chevron-right"></i>
                {/* <span className="path-to-product">Laptop</span>
                <i className="fas fa-chevron-right"></i> */}
                <span className="path-to-product">{product.name}</span>
            </div>
            <div className="product-brief">
                <div className="product-brief--wrap">
                    <div className="product-img">
                        <div className="product-img--main">
                            <div className="product-img--main-inner" style={{ backgroundImage: `url(${imageMain})` }}></div>
                        </div>
                        <div className="product-img--child">
                            <div className="product-img--child-wrap" ref={slideWrap}>

                                {showImgChild(product.img)}

                            </div>

                            <button className="product-img--child-right" onClick={() => handleSlide(1)}>
                                <i className="fas fa-chevron-right"></i>
                            </button>
                            <button className="product-img--child-left" onClick={() => handleSlide(-1)}>
                                <i className="fas fa-chevron-left"></i>
                            </button>
                        </div>

                        <div className="product-img--share">
                            <div className="product-img--share-wrap">
                                <div className="product-share">
                                    <span className="product-share--text">Chia sẻ:</span>
                                    <div className="product-share--social">
                                        <i className="fab fa-facebook-messenger" style={{ color: '#0384ff' }}></i>
                                        <i className="fab fa-facebook-square" style={{ color: '#3b5999' }}></i>
                                        <i className="fab fa-pinterest-square" style={{ color: '#de0217' }}></i>
                                        <i className="fab fa-twitter-square" style={{ color: '#de0217' }}></i>
                                    </div>
                                </div>

                                <div className="product-like">
                                    <div className="product-like--wrap">
                                        <i className={`far fa-heart ${isLiked ? '' : 'active'}`} style={{ color: 'red' }} onClick={() => setIsLiked(true)}></i>
                                        <i className={`fas fa-heart ${isLiked ? 'active' : ''}`} style={{ color: 'red' }} onClick={() => setIsLiked(false)}></i>
                                        <span className="product-like--text">Đã thích</span>
                                        <span className="product-like--text-num">(33)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-option">
                        <div className="product-option--wrap">
                            <div className="product-name">
                                <div className="product-name--wrap">
                                    <span className="product-name--inner">
                                        <span className="product-name--trademark">Mall</span>
                                        {product.name}
                                    </span>
                                </div>
                            </div>

                            <div className="product-rating">
                                <div className="product-rating--wrap">
                                    <div className="product-rating--star">
                                        <div className="rating-star--total">
                                            <a href="" className="rating-star--star-link" onClick={(e) => handleMoveToAssessment(e)}>
                                                <span>5.0</span>
                                            </a>
                                        </div>
                                        <div className="rating-star--star">
                                            <a href="" className="rating-star--star-link" onClick={(e) => handleMoveToAssessment(e)}>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="product-rating--comment">
                                        <div className="product-rating--comment-wrap">
                                            <a href="" className="rating-star--star-link" onClick={(e) => handleMoveToAssessment(e)}>
                                                <span className="rating-comment--total">19</span>
                                                <span className="rating-comment--comment">Đánh giá</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="product-rating--sold">
                                        <div className="product-rating--sold-wrap">
                                            <span className="rating-sold--total">{product.sold}</span>
                                            <span className="rating-sold--sold">Đã bán</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="product-price">
                                <div className="product-price--wrap">
                                    <span className="product-price--old-price">₫{product.old_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</span>
                                    <div className="product-price--new-price">
                                        <div className="new-price-inner">₫{product.new_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</div>
                                        <div className="sale--percent">11% GIẢM</div>
                                    </div>
                                </div>
                            </div>

                            <div className="product-express">
                                <div className="product-express--wrap">
                                    <div className="product-express--express">
                                        <div className="product-express--title">
                                            <span>Vận Chuyển</span>
                                        </div>
                                        <div className="product-express--unit">
                                            <div className="product-express--free">
                                                <span className="product-express--free-line1">
                                                    <i className="fas fa-truck-moving"></i>
                                                    Miễn Phí Vận Chuyển
                                                </span>
                                                <div className="product-express--free-line2">Miễn Phí Vận Chuyển Khi Đơn Hàng Đạt Giá Trị Tối Thiểu</div>
                                            </div>
                                            <div className="product-express--location">
                                                <div className="product-express--location-wrap">
                                                    <div className="express--location-location">
                                                        <i className="fas fa-truck"></i>
                                                        <span className="express--location-line1">
                                                            Vận Chuyển Tới
                                                        </span>
                                                        <span className="express--location-line2 modal-express--location" onClick={handleActiveModal}>
                                                            <span>Huyện Ba Vì</span>
                                                            <i className="fas fa-chevron-down"></i>
                                                            <i className="fas fa-chevron-up hide"></i>
                                                        </span>
                                                    </div>
                                                    <div className="express--location-fee">
                                                        <span className="express--location-line1">
                                                            Phí Vận Chuyển
                                                        </span>
                                                        <span className="express--location-line2">
                                                            <span><span className="fee-mobile">Phí vận chuyển: </span> ₫21.000</span>
                                                            <i className="fas fa-chevron-down"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="product-quantity">
                                <div className="product-quantity--wrap">
                                    <div className="product-quantity--quantity">
                                        <div className="product-quantity--text">
                                            <span className="product-quantity--text-inner">Số Lượng</span>
                                        </div>
                                        <div className="product-quantity--adjust">
                                            <div className="product-quantity--adjust-increase" onClick={() => handleQuantity(-1)}>-</div>
                                            <div className="product-quantity--adjust-total">
                                                <input type="text" value={quantity} className="input-quantity" onChange={handleEnterQuantity} onBlur={handleBlurQuantity} />
                                            </div>
                                            <div className="product-quantity--adjust-decrease" onClick={() => handleQuantity(1)}>+</div>
                                        </div>
                                        <div className="product-quantity--available">
                                            <span className="product-quantity--available-text">
                                                {maxQuantity} {`${quantity === maxQuantity ? 'số lượng đã đạt tối đa' : 'sản phẩm có sẵn'}`}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="product-quantity--cart">
                                        <div className="product-quantity--add-to-cart" onClick={() => handleAddProductToCart(false)}>
                                            <i className="fas fa-cart-plus"></i>
                                            <span className="product-quantity--text-add">Thêm Vào Giỏ Hàng</span>
                                        </div>
                                        <div className="product-quantity--buy-now" >
                                            <Link to={!!userToken ? '/cart' : '/sign-in'} onClick={() => handleAddProductToCart(true)}>
                                                <span className="product-quantity--text-buy">Mua Ngay</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="product-standard">
                                <div className="product-standard--wrap">
                                    <div className="product-standard--seven-days c-4 ">
                                        <div className="seven-days--icon"></div>
                                        <div className="seven-days--text">7 ngày miễn phí trả hàng</div>
                                    </div>
                                    <div className="product-standard--100-real c-4">
                                        <div className="real--icon"></div>
                                        <div className="real--text">Hàng chính hãng 100%</div>
                                    </div>
                                    <div className="product-standard--free-ship c-4">
                                        <div className="free-ship--icon"></div>
                                        <div className="free-ship--text">Miễn phí vận chuyển</div>
                                    </div>
                                </div>
                            </div>

                            <div className="express--location-list-province modal">
                                <div className="express--location-list-province-wrap">
                                    <Province onUpdateAddress={handleUpdateAddress} />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="product-shop">
                <div className="product-shop--wrap">
                    <div className="product-shop--avatar">
                        <div className="product-shop--avatar-wrap">
                            <div className="product-shop--avatar-avatar">
                                <div className="product-shop--avatar-img">
                                    <img src="https://cf.shopee.vn/file/3581ce5bba80e2106f6981fafc05f3b8_tn" alt=''></img>
                                </div>
                            </div>
                            <div className="product-shop--avatar-more">
                                <div className="product-shop--avatar-name">
                                    <div className="product-shop--avatar-text">asus.officialstore</div>
                                    <div className="product-shop--avatar-online">Online 15 Phút Trước</div>
                                </div>
                                <div className="product-shop--avatar-chat">
                                    <div className="product-shop--avatar-chat-now">
                                        <i className="fas fa-comments"></i>
                                        <span className="product-shop--avatar-chat-text">Chat Ngay</span>
                                    </div>
                                    <div className="product-shop--avatar-view">
                                        <i className="fas fa-store"></i>
                                        <span className="product-shop--avatar-view-text">Xem Shop</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-shop--overview">
                        <div className="product-shop--overview-wrap">
                            <div className="product-shop--overview-part1">
                                <div className="product-shop--overview-part1-line1">
                                    <span>Đánh giá</span>
                                    <span>203</span>
                                </div>
                                <div className="product-shop--overview-part1-line2">
                                    <span>Sản Phẩm</span>
                                    <span>419</span>
                                </div>
                            </div>
                            <div className="product-shop--overview-part2">
                                <div className="product-shop--overview-part1-line1">
                                    <span>Tỉ Lệ Phản Hồi</span>
                                    <span>100%</span>
                                </div>
                                <div className="product-shop--overview-part1-line2">
                                    <span>Thời Gian Phản Hồi</span>
                                    <span>trong vài giờ</span>
                                </div>
                            </div>
                            <div className="product-shop--overview-part3">
                                <div className="product-shop--overview-part1-line1">
                                    <span>Tham Gia</span>
                                    <span>14 tháng trước</span>
                                </div>
                                <div className="product-shop--overview-part1-line2">
                                    <span>Người Theo Dõi</span>
                                    <span>93,3k</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <DetailProduct />
            <div className="product-buyer--modal" onClick={handleHideModal}>
                <div className="product-buyer--modal-text">
                    <div className="product-buyer--modal-inner">
                        <span>Sản phẩm đã được thêm vào giỏ hàng thành công</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default withRouter(Product);
