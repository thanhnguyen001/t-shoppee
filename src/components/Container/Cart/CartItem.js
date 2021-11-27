/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addNumToCart, deleteCartItem } from '../../../actions/actions';
import userApi from '../../../api/usersApi';
import useDimensionWindow from '../../../hooks/useDimensionWindow';

CartItem.propTypes = {
    updateCart: PropTypes.func.isRequired
};

CartItem.defaultProps = {
    // updateCart: null
}

function CartItem(props) {


    const { updateCart, deleteCart, checkedCart, product } = props;

    const user = JSON.parse(localStorage.getItem('USER_INFO')).user;


    const cart = useSelector(state => state.cart);
    // console.log(cart.cart);
    const dispatch = useDispatch();
    const { width: windowWidth } = useDimensionWindow();

    const [quantityPrice, setQuantityPrice] = useState(product.quantity * product.new_price);
    const [quantity, setQuantity] = useState(product.quantity);
    const [temp, setTemp] = useState(1);
    const [isChecked, setIsChecked] = useState(false);
    // console.log(product.isChecked);

    useEffect(() => {
        setIsChecked(product.isChecked);
    }, [product.isChecked])

    const patchAPI = (number, type) => {
        // console.log(user)
        if (user) {
            cart.forEach((item) => {
                if (item.id === product.id && item.type === type) {
                    item.quantity = number;
                }
            })
            const data = JSON.stringify({
                cart: [...cart]
            });
            userApi.patchUser(user.id, data);
        }
    }

    const handleUpdateCart = (number) => {
        updateCart({
            action: 'add',
            id: product.id,
            quantity: number,
            type: product.type
        });
    }

    const handleDeleteCart = () => {
        deleteCart(product.id, product.type);
        cart.forEach((item, index) => {
            if (item.id === product.id && item.type === product.type) {
                cart.splice(index, 1);
            }
        })
        const data = JSON.stringify({
            cart: [...cart]
        });
        console.log(cart);
        userApi.patchUser(user.id, data);
        dispatch(deleteCartItem({
            id: product.id,
            type: product.type
        }));
    }

    const handleQuantity = (num) => {
        let mid = quantity + num;
        if (mid < 0) {
            mid = 0;
        }
        setQuantity(mid);
        setQuantityPrice(mid * product.new_price);
        handleUpdateCart(quantity + num, product.type);
        patchAPI(quantity + num, product.type);
    }

    const handleClickChecked = (e) => {
        setIsChecked(!isChecked);
        checkedCart({
            action: 'isChecked',
            id: product.id,
            isChecked: !isChecked,
            type: product.type
        })
    }

    const handleEnterQuantity = (e) => {
        let value = Number.parseInt(e.target.value);
        if (!Number.isNaN(value) && value > 0) {
            setQuantity(value);
            if (value < 10) setTemp(value);
        }
        if (e.target.value === '') setQuantity('');
    }

    const handleBlurQuantity = (e) => {
        if (quantity === '') {
            setQuantity(temp);
            setQuantityPrice(temp * product.new_price);
            dispatch(addNumToCart({
                id: product.id,
                quantity: temp,
                type: product.type
            }));
            patchAPI(temp, product.type);
            handleUpdateCart(temp, product.type);

        }
        else {
            setQuantityPrice(quantity * product.new_price);
            patchAPI(quantity, product.type);
            handleUpdateCart(quantity, product.type);
        }
    }

    return (
        <li className="cart-table--item">
            <div className="cart-table--item-wrap">
                <div className="cart-table-item-shop">
                    <input type="checkbox" name="product-1" className="product-1 cart-product"
                        checked={isChecked}
                        onChange={handleClickChecked}
                    />
                    <div>Yêu Thích+</div>
                    <div>{product.shop}<i className="fas fa-comments"></i></div>
                </div>
                <div className="cart-table--item-product">
                    <div className="cart-table--item-name cart-product-name">
                        <input type="checkbox" name="product-1" className="product-1 cart-product"
                            checked={isChecked}
                            onChange={handleClickChecked}
                        />

                        <div className="cart-product--img">
                            <a href='' >
                                <div className="cart-product--img-inner"
                                    style={{ backgroundImage: `url(${product.img})` }}>
                                </div>
                            </a>

                            {windowWidth <= 580 &&
                                <div className="cart-product--mobile">
                                    <div className="cart-product--title">
                                        <a href='' className="cart-product--title-inner">
                                            {product.name}
                                        </a>
                                    </div>
                                    <div className="cart-product--distribute">
                                        <div className="cart-product--distribute-inner">
                                            <span>Phân Loại Hàng</span>
                                            <i className="fas fa-caret-down"></i>
                                        </div>
                                    </div>
                                    <div className="cart-table--item-unit cart-product-unit">
                                        <div className="cart-product--unit-wrap">
                                            <span className="cart-unit-old">₫{product.old_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</span>
                                            <span className="cart-unit-new">₫{product.new_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</span>
                                        </div>
                                    </div>
                                    <div className="cart-table--item-quantity cart-product-quantity">
                                        <div className="cart-product--quantity-wrap">
                                            <div className="cart-decrease" onClick={() => handleQuantity(-1)}>-</div>
                                            <div className="cart-quantity">
                                                <input type="text" value={quantity} className="input-quantity" onChange={handleEnterQuantity} onBlur={handleBlurQuantity} />
                                            </div>
                                            <div className="cart-increase" onClick={() => handleQuantity(1)}>+</div>
                                        </div>
                                    </div>
                                </div>
                            }

                        </div>

                        {windowWidth > 580 && <div className="cart-product--title">
                            <a href='' className="cart-product--title-inner">
                                {product.name}
                            </a>
                        </div>}

                        {windowWidth > 580 && <div className="cart-product--distribute">
                            <div className="cart-product--distribute-inner">
                                <span>Phân Loại Hàng</span>
                                <i className="fas fa-caret-down"></i>
                            </div>
                        </div>}

                    </div>

                    {windowWidth > 580 && <div className="cart-table--item-unit cart-product-unit">
                        <div className="cart-product--unit-wrap">
                            <span className="cart-unit-old">₫{product.old_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</span>
                            <span className="cart-unit-new">₫{product.new_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</span>
                        </div>
                    </div>}

                    {windowWidth > 580 && <div className="cart-table--item-quantity cart-product-quantity">
                        <div className="cart-product--quantity-wrap">
                            <div className="cart-decrease" onClick={() => handleQuantity(-1)}>-</div>
                            <div className="cart-quantity">
                                <input type="text" value={quantity} className="input-quantity" onChange={handleEnterQuantity} onBlur={handleBlurQuantity} />
                            </div>
                            <div className="cart-increase" onClick={() => handleQuantity(1)}>+</div>
                        </div>
                    </div>}

                    <div className="cart-table--item-price cart-product-price">
                        <div className="cart-product--price-wrap">
                            <span>₫{
                                quantityPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                            }</span>
                        </div>
                    </div>

                    <div className="cart-table--item-adjust cart-product-adjust">
                        <div className="cart-product--adjust-wrap" onClick={handleDeleteCart} >
                            <span>Xóa</span>
                        </div>
                    </div>

                </div>
                <div className="cart-table--item-voucher">
                    <div className="cart-product--voucher-wrap">
                        <svg fill="none" viewBox="0 -2 23 22" className="shopee-svg-icon pcmall-cart_2zPMNi icon-voucher-line">
                            <g filter="url(#voucher-filter0_d)"><mask id="a" fill="#fff">
                                <path fillRule="evenodd" clipRule="evenodd" d="M1 2h18v2.32a1.5 1.5 0 000 2.75v.65a1.5 1.5 0 000 2.75v.65a1.5 1.5 0 000 2.75V16H1v-2.12a1.5 1.5 0 000-2.75v-.65a1.5 1.5 0 000-2.75v-.65a1.5 1.5 0 000-2.75V2z"></path></mask><path d="M19 2h1V1h-1v1zM1 2V1H0v1h1zm18 2.32l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zm0 .65l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zm0 .65l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zM19 16v1h1v-1h-1zM1 16H0v1h1v-1zm0-2.12l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zm0-.65l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zm0-.65l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zM19 1H1v2h18V1zm1 3.32V2h-2v2.32h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zm.6 1.56v-.65h-2v.65h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zm.6 1.56v-.65h-2v.65h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zM20 16v-2.13h-2V16h2zM1 17h18v-2H1v2zm-1-3.12V16h2v-2.12H0zm1.4.91a2.5 2.5 0 001.5-2.29h-2a.5.5 0 01-.3.46l.8 1.83zm1.5-2.29a2.5 2.5 0 00-1.5-2.3l-.8 1.84c.18.08.3.26.3.46h2zM0 10.48v.65h2v-.65H0zM.9 9.1a.5.5 0 01-.3.46l.8 1.83A2.5 2.5 0 002.9 9.1h-2zm-.3-.46c.18.08.3.26.3.46h2a2.5 2.5 0 00-1.5-2.3L.6 8.65zM0 7.08v.65h2v-.65H0zM.9 5.7a.5.5 0 01-.3.46l.8 1.83A2.5 2.5 0 002.9 5.7h-2zm-.3-.46c.18.08.3.26.3.46h2a2.5 2.5 0 00-1.5-2.3L.6 5.25zM0 2v2.33h2V2H0z" mask="url(#a)"></path></g><path clipRule="evenodd" d="M6.49 14.18h.86v-1.6h-.86v1.6zM6.49 11.18h.86v-1.6h-.86v1.6zM6.49 8.18h.86v-1.6h-.86v1.6zM6.49 5.18h.86v-1.6h-.86v1.6z"></path>
                            <defs><filter id="voucher-filter0_d" x="0" y="1" width="20" height="16" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation=".5"></feGaussianBlur><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs>
                        </svg>
                        <div className="cart-product--voucher-text">
                            <span>Shop Voucher giảm đến 30%</span>
                        </div>
                        <div className="cart-product--voucher-more">
                            <span>Xem thêm voucher</span>
                        </div>
                    </div>
                </div>
                <div className="cart-table--item-express">
                    <div className="cart-table--item-express-wrap">
                        <i className="fas fa-truck-moving"></i>
                        <div className="cart-product--express-text">
                            <span>Miễn Phí Vận Chuyển cho đơn hàng từ ₫50.000 (giảm tối đa ₫25.000); Miễn Phí Vận Chuyển cho đơn hàng từ ₫300.000 (giảm tối đa ₫70.000)</span>
                        </div>
                        <div className="cart-product--express-more">
                            <span>Tìm hiểu thêm</span>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default CartItem
