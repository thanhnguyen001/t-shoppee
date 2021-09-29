/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addNumToCart } from '../../../actions/actions';
import './Cart.scss';
import CartItem from './CartItem';


function Cart() {

    // const initialProducts = JSON.parse(localStorage.getItem('CART')) || [];
    // console.log(initialProducts);
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    // console.log(cart)
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalProduct, setTotalProduct] = useState(0);
    const [productList, setProductList] = useState(cart);


    useEffect(() => {
        
        if (productList) {
            setProductList(cart);
            let checked = true;
            let total = 0;
            let count = 0;
            productList.forEach((product, index) => {
                if (product.isChecked) {
                    checked = false;
                    count++;
                    total = total + product.quantity * product.new_price;
                    if (total < 0) total = 0;
                    setTotalPrice(total);
                }
            })
            setTotalProduct(count);
            if (checked) setTotalPrice(0);
            // console.log('ok');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productList,cart]);

    const handleCheckedAll = (e) => {
        const productElements = document.querySelectorAll('input[type=checkbox]');
        let temp = e.target.checked;
        const newProducts = [...productList];
        newProducts.forEach(product => {
            product.isChecked = temp;
        });
        setProductList(newProducts);
        // setIsCheckedAll(temp);

        Array.from(productElements).forEach((item) => {
            return item.checked = temp;
        });

    }

    const onUpdateCart = (change) => {
        if (change.action === 'add') {
            dispatch(addNumToCart(change));
            const newProducts = [...productList];
            newProducts.forEach((product, index) => {
                if (product.id === change.id && product.type === change.type) {
                    product.quantity = change.quantity;
                }
            });
            setProductList(newProducts);
        }
    }

    const onDeleteCart = (id, type) => {
        const newProducts = [...productList];
        newProducts.forEach((product, index) => {
            if (product.id === id && product.type === type) {
                newProducts.splice(index, 1);
            }
        });
        setProductList(newProducts);
    }

    const onCheckedCart = (change) => {
        if (change.action === 'isChecked') {
            const newProducts = [...productList];
            newProducts.forEach((product) => {
                if (product.id === change.id && product.type === change.type) {
                    product.isChecked = change.isChecked
                };
            })
            setProductList(newProducts);
        }
    }

    const showCartItem = (productList) => {
        if (productList) return productList.map((product, index) => <CartItem
            key={index}
            product={product}
            updateCart={onUpdateCart}
            deleteCart={onDeleteCart}
            checkedCart={onCheckedCart}
        />)
    }

    const emptyCart = () => {
        setTimeout(() => {
            const freeCodeElement = document.querySelector('.cart-free-code');
            const tableHeadingElement = document.querySelector('.cart-table--heading');
            const cartTotalElement = document.querySelector('.cart-total');
            freeCodeElement.classList.add('no-cart');
            tableHeadingElement.classList.add('no-cart');
            cartTotalElement.classList.add('no-cart');
        }, 500)
        return <div className="cart-no-cart">
            <div className="cart-no-cart--wrap">
                <div className="cart-no-cart--img">
                    <img src="https://elead.com.vn/wp-content/uploads/2020/05/hinh-anh-mat-cuoi.jpg14.png" alt="empty-cart"></img>
                </div>
                <div className="cart-no-cart--mess">
                    <span>Giỏ Hàng Của Bạn Đang Trống</span>
                </div>
                <div className="cart-no-cart--buy-now">
                    <Link to='/shop'>
                        <button className="btn btn-primary">Mua Ngay</button>
                    </Link>
                </div>
            </div>
        </div>
    }

    return (
        <div className="cart-content">
            <div className="cart-wrap">
                <div className="cart-free-code">
                    <i className="fas fa-truck-monster"></i>
                    <span>Nhấn vào mục Mã giảm giá ở cuối trang để hưởng miễn phí vận chuyển bạn nhé!</span>
                </div>
                <div className="cart-table">
                    <div className="cart-table--heading">
                        <div className="cart-table--heading-wrap">
                            <div className="cart-table--heading-name cart-product-name">
                                <input type="checkbox" onClick={handleCheckedAll}></input>
                                <span>Sản Phẩm</span>
                            </div>
                            <div className="cart-table--heading-unit cart-product-unit">
                                <span>Đơn giá</span>
                            </div>
                            <div className="cart-table--heading-quantity cart-product-quantity">
                                <span>Số Lượng</span>
                            </div>
                            <div className="cart-table--heading-price cart-product-price">
                                <span>Số Tiền</span>
                            </div>
                            <div className="cart-table--heading-adjust cart-product-adjust">
                                <span>Thao Tác</span>
                            </div>
                        </div>
                    </div>
                    <div className="cart-table--list">
                        <ul className="cart-table--list-wrap">

                            {productList.length > 0 ? showCartItem(productList) : emptyCart()}

                        </ul>
                    </div>
                </div>
                <div className="cart-total">
                    <div className="cart-total--wrap">
                        <div className="cart-total--shop-voucher">
                            <div className="cart-total--voucher-wrap">
                                <div className="cart-total--voucher-text">
                                    <svg fill="none" viewBox="0 -2 23 22" className="shopee-svg-icon pcmall-cart_2zPMNi icon-voucher-line">
                                        <g filter="url(#voucher-filter0_d)"><mask id="a" fill="#fff">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M1 2h18v2.32a1.5 1.5 0 000 2.75v.65a1.5 1.5 0 000 2.75v.65a1.5 1.5 0 000 2.75V16H1v-2.12a1.5 1.5 0 000-2.75v-.65a1.5 1.5 0 000-2.75v-.65a1.5 1.5 0 000-2.75V2z"></path></mask><path d="M19 2h1V1h-1v1zM1 2V1H0v1h1zm18 2.32l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zm0 .65l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zm0 .65l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zM19 16v1h1v-1h-1zM1 16H0v1h1v-1zm0-2.12l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zm0-.65l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zm0-.65l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zM19 1H1v2h18V1zm1 3.32V2h-2v2.32h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zm.6 1.56v-.65h-2v.65h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zm.6 1.56v-.65h-2v.65h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zM20 16v-2.13h-2V16h2zM1 17h18v-2H1v2zm-1-3.12V16h2v-2.12H0zm1.4.91a2.5 2.5 0 001.5-2.29h-2a.5.5 0 01-.3.46l.8 1.83zm1.5-2.29a2.5 2.5 0 00-1.5-2.3l-.8 1.84c.18.08.3.26.3.46h2zM0 10.48v.65h2v-.65H0zM.9 9.1a.5.5 0 01-.3.46l.8 1.83A2.5 2.5 0 002.9 9.1h-2zm-.3-.46c.18.08.3.26.3.46h2a2.5 2.5 0 00-1.5-2.3L.6 8.65zM0 7.08v.65h2v-.65H0zM.9 5.7a.5.5 0 01-.3.46l.8 1.83A2.5 2.5 0 002.9 5.7h-2zm-.3-.46c.18.08.3.26.3.46h2a2.5 2.5 0 00-1.5-2.3L.6 5.25zM0 2v2.33h2V2H0z" mask="url(#a)"></path></g><path clipRule="evenodd" d="M6.49 14.18h.86v-1.6h-.86v1.6zM6.49 11.18h.86v-1.6h-.86v1.6zM6.49 8.18h.86v-1.6h-.86v1.6zM6.49 5.18h.86v-1.6h-.86v1.6z"></path>
                                        <defs><filter id="voucher-filter0_d" x="0" y="1" width="20" height="16" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation=".5"></feGaussianBlur><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs>
                                    </svg>
                                    <span>Shop Voucher</span>
                                </div>
                                <div className="cart-total--voucher-choose">
                                    <span>Chọn Hoặc Nhập Mã</span>
                                </div>
                            </div>
                        </div>
                        <div className="cart-total--cen">

                        </div>
                        <div className="cart-total--cost">
                            <div className="cart-total--cost-wrap">
                                <div className="cart-total--cost-part">
                                    <input type="checkbox" className="cart-total--cost-all" onClick={handleCheckedAll} ></input>
                                    <div className="cart-total--cost-all-text">
                                        <span style={{ cursor: 'pointer' }}>Chọn Tất Cả (1)</span>
                                    </div>
                                    <div className="cart-toal--cost-delete" style={{ cursor: 'pointer' }}>
                                        <span>Xóa</span>
                                    </div>
                                </div>
                                <div className="cart-total--cost-part">
                                    <div className="cart-total--cost-pay">
                                        <div className="cart-total--cost-pay-must">Tổng Thanh Toán ({totalProduct} Sản Phẩm):
                                            <span>
                                                ₫{totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                                            </span>
                                        </div>
                                        <div className="cart-total--cost-pay-discount">
                                            <span>Tiết Kiệm: ₫71k</span>
                                        </div>
                                    </div>
                                    <div className="cart-total--cost-buy">
                                        <button className="btn btn-primary btn-cart-buy">Mua Hàng</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
