/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom';
import axiosClient from '../../../api/callApi';
// import productApi from '../../../api/productApi';
import Pagination from '../Pagination/Pagination';
import './Products.css';

function Products({ data, type }) {

    const [productList, setProductList] = useState([]);
    // console.log(type);
    const [option, setOption] = useState('Giá');

    // Fetch product type
    useEffect(() => {
        if (type === 'Thời-Trang-Nam') type = 'ThoiTrangNam';
        if (type === 'Thời-Trang-Nữ') type = 'ThoiTrangNu';
        else type = 'ThoiTrangNam';
        const fetchProducts = async () => {
            try {
                const response = await axiosClient.get(`/${type}`);
                setProductList(response);
                // console.log(response);
            } catch (error) {
                console.log(error)
            }
        }

        fetchProducts();

    }, [type])

    const handleSort = (choose) => {
        const newList = [...productList];
        // console.log(newList)
        if (choose) {
            newList.sort((a, b) => {
                if (Number.parseInt(a.new_price) < Number.parseInt(b.new_price)) return 1;
                if (Number.parseInt(a.new_price) > Number.parseInt(b.new_price)) return -1;
                return 0;
            })
            setOption('Giá: Cao đến Thấp');
        }
        else {
            newList.sort((a, b) => {
                if (Number.parseInt(a.new_price) < Number.parseInt(b.new_price)) return -1;
                if (Number.parseInt(a.new_price) > Number.parseInt(b.new_price)) return 1;
                return 0;
            })
            setOption('Giá: Thấp đến Cao');
        }
        setProductList(newList);
    }

    const showProducts = (productList) => {
        if (productList.length > 0) {
            return productList.map((product, index) => {
                return <div className={`${data === 'suggestion' ? 'l-2' : 'l-2-4'} col m-4-3 c-6`} key={index}>
                    <Link to={`/product/${product.name.replace(/ /g, '-')}/${product.id}/${product.type.replace(/ /g, '-')}`} style={{ textDecoration: 'none', color: 'var(--text-color)' }}>

                        <div className="home-product-item">
                            <div className="home-product-img" style={{ backgroundImage: `url(${product.img[0]})` }}>
                            </div>
                            <h4 className="home-product-name">{product.name}</h4>
                            <span className="home-product-installment">0% TRẢ GÓP</span>
                            <div className="home-product-price">
                                <div className="home-product-price-old"><span className="unit">đ</span>{product.old_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</div>
                                <div className="home-product-price-current"><span className="unit">đ</span>{product.new_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</div>
                            </div>
                            <div className="home-product-interaction">
                                <div className="home-product-interaction-like ">
                                    {/* home-product-interaction-liked  */}
                                    <i className="home-product-interaction-like-icon-empty far fa-heart"></i>
                                    <i className="home-product-interaction-like-icon-fill fas fa-heart"></i>
                                </div>
                                <div className="home-product-interaction-rating">
                                    <i className="home-product-interaction-rating-gold fas fa-star"></i>
                                    <i className="home-product-interaction-rating-gold fas fa-star"></i>
                                    <i className="home-product-interaction-rating-gold fas fa-star"></i>
                                    <i className="home-product-interaction-rating-gold fas fa-star"></i>
                                    <i className=" fas fa-star"></i>
                                </div>
                                <div className="home-product-interaction-sold">Đã bán {product.sold}</div>
                            </div>
                            <span className="home-product-address">{product.location}</span>
                            <div className="home-product-favourite">
                                <i className="fas fa-check"></i>
                                <span>Yêu Thích</span>
                            </div>
                            <div className="home-product-discount">
                                <span className="home-product-discount-percent">10%</span>
                                <span className="home-product-discount-label">GIẢM</span>

                            </div>
                        </div>

                    </Link>
                </div>

            })
        }
    }

    return (
        <Fragment>

            {/* Sort */}
            <div className="filter hide-on-mobile-tablet">
                <span className="filter-sort">Sắp xếp theo</span>
                <button className="btn filter-btn btn-primary">
                    Phổ biến
                </button>
                <button className="btn filter-btn">
                    Mới nhất
                </button><button className="btn filter-btn">
                    Bán chạy
                </button>
                <span className="filter-select">
                    <span className="filter-select-text">{option}</span>
                    <i className="filter-select-icon fas fa-chevron-down"></i>
                    <ul className="filter-select--option">
                        <li className="filter-select--option-item" onClick={() => handleSort(false)}>
                            Giá: Thấp đến Cao
                        </li>
                        <li className="filter-select--option-item" onClick={() => handleSort(true)}>
                            Giá: Cao đến Thấp
                        </li>
                    </ul>
                </span>
                <span className="filter-page">
                    <span className="filter-page--num-current">1</span>/
                    <span className="filter-page--num-amount">3</span>
                    <a href="/" className="filter-page--change filter-page--change-pre filte-page--disable">
                        <i className="filter-page-icon fas fa-chevron-left"></i>
                    </a>
                    <a href="/" className="filter-page--change filter-page--change-next">
                        <i className="filter-page-icon fas fa-chevron-right"></i>
                    </a>
                </span>

            </div>

            {/* Mobile Category */}

            {/* <nav className="mobile-category appear-on-tablet">
                <ul className="mobile-category-list">
                    <li className="mobile-category-item">
                        <a href="/" className="mobile-category-link">Dụng cụ và thiết bị tiện ích</a>
                    </li>
                    <li className="mobile-category-item">
                        <a href="/" className="mobile-category-link">Dụng cụ và thiết bị tiện ích</a>
                    </li>
                    <li className="mobile-category-item">
                        <a href="/" className="mobile-category-link">Dụng cụ và thiết bị tiện ích</a>
                    </li>
                    <li className="mobile-category-item">
                        <a href="/" className="mobile-category-link">Dụng cụ và thiết bị tiện ích</a>
                    </li>
                    <li className="mobile-category-item">
                        <a href="/" className="mobile-category-link">Dụng cụ và thiết bị tiện ích</a>
                    </li>
                </ul>
            </nav> */}
            {/* Product List */}
            <div className="home-product">
                <div className="row sm-gutter productList">

                    {(!productList || productList.length <= 0) && <div className="loading">
                        <div className="loading-wrap">
                            <i className="fas fa-circle-notch"></i>
                        </div>
                    </div>}
                    {productList && productList.length > 0 && showProducts(productList)}

                </div>
            </div>

            {/* Pagination */}
            <Pagination />

        </Fragment>
    )
}

export default Products
