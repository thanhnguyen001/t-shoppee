/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import './Category.css';
import axiosClient from '../../../api/callApi';

function Category({ type }) {

    const [valuePriceRight, setValuePriceRight] = useState('');
    const [valuePriceLeft, setValuePriceLeft] = useState('');
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        const fetchCategory = async () => {
            const response = await axiosClient.get('/category');
            // console.log(response)
            if (!response[type]) type = 'Thời-Trang-Nam';
            setCategoryList(response[type]);
        }

        fetchCategory();
    }, [type])

    const handleMoreOption = (num) => {
        const moreOptionElement = document.querySelectorAll('.category-item--more');
        // console.log(moreOptionElement)
        if (moreOptionElement) {
            moreOptionElement[num].classList.add('more-option-active');
        }
    }

    const handleChange = (e, num) => {
        console.log(e.target.value);
        const value = Number.parseInt(e.target.value);
        if (!Number.isNaN(value)) {
            if (`${value}`.length <= 13) {
                if (num === 0) setValuePriceLeft(`${value}`)
                if (num === 1) setValuePriceRight(`${value}`)
            }
        }
        if (e.target.value === '') {
            if (num === 0) setValuePriceLeft('');
            if (num === 1) setValuePriceRight('');
        }
    }

    const handleClickCategory = (e,num) => {
        e.preventDefault();
        const items = document.querySelectorAll('.category-list__item-link');
        items.forEach((item, index) => {
            if (index === num ) {
                item.classList.add('category-list__item-active');
            }
            else item.classList.remove('category-list__item-active');
        })
    }

    const showCategory = (categoryList) => {
        if (categoryList.length > 0) {
            return categoryList.map((item, index) => {
                if (index <= 5) {
                    return <li className='category-list__item' key={index} onClick={(e) => handleClickCategory(e, index)}>
                        <a href="/" className={`category-list__item-link ${index === 0 && 'category-list__item-active'}`}>{item}</a>
                    </li>
                }
            })
        }
    }

    const showCategoryMore = (categoryList) => {
        if (categoryList.length > 0) {
            return categoryList.map((item, index) => {
                if (index > 5) {
                    return <li className="category-list__item" key={index} onClick={(e) => handleClickCategory(e, index)}>
                        <a href="/" className="category-list__item-link">{item}</a>
                    </li>
                }
            })
        }
    }

    return (

        <div className="l-2 m-0 c-0 col">
            <nav className="category">
                {/* <div className="category-heading">
                    <div className="category-heading__shop">
                    </div>
                    <a href="/" className="category-heading__shop-link">

                        <img src={AsusPNG} alt="" className="category-heading__shop-logo" />
                    </a>
                    <h3 className="category-heading__shop-name">ASUS OFFICIAL STORE</h3>

                </div> */}
                <div className="category-body">
                    {/* <div className="category-body-name">
                        <i class="fas fa-bars"></i>
                        <div className="category-body-name-inner">DANH MỤC SHOP</div>
                    </div>
                    <ul className="category-list">
                        <li className="category-list__item ">
                            <a href="/" className="category-list__item-link ">Sản phẩm</a>
                        </li>
                        <li className="category-list__item">
                            <a href="/" className="category-list__item-link">ASUS x GUNDAM</a>
                        </li>
                        <li className="category-list__item">
                            <a href="/" className="category-list__item-link">ZenBook</a>
                        </li>
                    </ul> */}
                    <div className="category-body-all-category">

                        <div className="category-body-name">
                            <i className="fas fa-bars"></i>
                            <div className="category-body-name-inner">Tất Cả Danh MỤc</div>
                        </div>
                        <ul className="category-list">
                    
                            {showCategory(categoryList)}

                            <li className="category-list__item not-hover" onClick={() => handleMoreOption(0)} >
                                <div className="category-item--more">
                                    <div className="category-item--more-inner">Xem Thêm</div>
                                    <i className="fas fa-chevron-down"></i>
                                </div>
                                <ul className="category-list">
                                  
                                    {showCategoryMore(categoryList)}

                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div className="category-body-location-search category-body-parts">
                        <div className="category-body-name">
                            <i className="fas fa-filter"></i>
                            <div className="category-body-name-inner">Bộ Lọc Tìm Kiếm</div>
                        </div>
                        <div className="category-prototype filter-location">
                            Nơi Bán
                        </div>
                        <ul className="category-list">
                            <li className="category-list__item">
                                <label className="checkbox-control">
                                    <input type="checkbox" name={'checkbox-control'} ></input>
                                    <a href="/" className="category-list__item-link ">Hà Nội</a>
                                </label>
                            </li>
                            <li className="category-list__item">
                                <label className="checkbox-control">
                                    <input type="checkbox" name={'checkbox-control'} ></input>
                                    <a href="/" className="category-list__item-link ">Tp. Hồ Chí Minh</a>
                                </label>
                            </li>
                            <li className="category-list__item">
                                <label className="checkbox-control">
                                    <input type="checkbox" name={'checkbox-control'} ></input>
                                    <a href="/" className="category-list__item-link ">Thái Nguyên</a>
                                </label>
                            </li>
                            <li className="category-list__item">
                                <label className="checkbox-control">
                                    <input type="checkbox" name={'checkbox-control'} ></input>
                                    <a href="/" className="category-list__item-link ">Vĩnh Phúc</a>
                                </label>
                            </li>
                            <li className="category-list__item">
                                <label className="checkbox-control">
                                    <input type="checkbox" name={'checkbox-control'} ></input>
                                    <a href="/" className="category-list__item-link ">Hải Phòng</a>
                                </label>
                            </li>
                            <li className="category-list__item">
                                <label className="checkbox-control">
                                    <input type="checkbox" name={'checkbox-control'} ></input>
                                    <a href="/" className="category-list__item-link ">Đồng Nai</a>
                                </label>
                            </li>
                            <li className="category-list__item not-hover" onClick={() => handleMoreOption(1)}>
                                <div className="category-item--more">
                                    <div className="category-item--more-inner">Xem Thêm</div>
                                    <i className="fas fa-chevron-down"></i>
                                </div>

                                <ul className="category-list">

                                    <li className="category-list__item">
                                        <label className="checkbox-control">
                                            <input type="checkbox" name={'checkbox-control'} ></input>
                                            <a href="/" className="category-list__item-link ">Hà Nội</a>
                                        </label>
                                    </li>
                                    <li className="category-list__item">
                                        <label className="checkbox-control">
                                            <input type="checkbox" name={'checkbox-control'} ></input>
                                            <a href="/" className="category-list__item-link ">Tp. Hồ Chí Minh</a>
                                        </label>
                                    </li>
                                    <li className="category-list__item">
                                        <label className="checkbox-control">
                                            <input type="checkbox" name={'checkbox-control'} ></input>
                                            <a href="/" className="category-list__item-link ">Thái Nguyên</a>
                                        </label>
                                    </li>
                                    <li className="category-list__item">
                                        <label className="checkbox-control">
                                            <input type="checkbox" name={'checkbox-control'} ></input>
                                            <a href="/" className="category-list__item-link ">Vĩnh Phúc</a>
                                        </label>
                                    </li>
                                    <li className="category-list__item">
                                        <label className="checkbox-control">
                                            <input type="checkbox" name={'checkbox-control'} ></input>
                                            <a href="/" className="category-list__item-link ">Hải Phòng</a>
                                        </label>
                                    </li>
                                    <li className="category-list__item">
                                        <label className="checkbox-control">
                                            <input type="checkbox" name={'checkbox-control'} ></input>
                                            <a href="/" className="category-list__item-link ">Đồng Nai</a>
                                        </label>
                                    </li>

                                </ul>
                            </li>
                        </ul>

                    </div>

                    <div className="category-body-express-search category-body-parts">
                        <div className="category-prototype filter-location">
                            Đơn Vị Vận Chuyển
                        </div>
                        <ul className="category-list">
                            <li className="category-list__item">
                                <label className="checkbox-control">
                                    <input type="checkbox" name={'checkbox-control'} ></input>
                                    <a href="/" className="category-list__item-link ">Shopee Express</a>
                                </label>
                            </li>
                            <li className="category-list__item">
                                <label className="checkbox-control">
                                    <input type="checkbox" name={'checkbox-control'} ></input>
                                    <a href="/" className="category-list__item-link ">Now Ship</a>
                                </label>
                            </li>
                            <li className="category-list__item">
                                <label className="checkbox-control">
                                    <input type="checkbox" name={'checkbox-control'} ></input>
                                    <a href="/" className="category-list__item-link ">J&T Express</a>
                                </label>
                            </li>

                            <li className="category-list__item">
                                <label className="checkbox-control">
                                    <input type="checkbox" name={'checkbox-control'} ></input>
                                    <a href="/" className="category-list__item-link ">Ninja Van</a>
                                </label>
                            </li>
                            <li className="category-list__item not-hover" onClick={() => handleMoreOption(2)}>
                                <div className="category-item--more">
                                    <div className="category-item--more-inner">Xem Thêm</div>
                                    <i className="fas fa-chevron-down"></i>
                                </div>

                                <ul className="category-list">

                                    <li className="category-list__item">
                                        <label className="checkbox-control">
                                            <input type="checkbox" name={'checkbox-control'} ></input>
                                            <a href="/" className="category-list__item-link ">Giao Hàng Nhanh</a>
                                        </label>
                                    </li>
                                    <li className="category-list__item">
                                        <label className="checkbox-control">
                                            <input type="checkbox" name={'checkbox-control'} ></input>
                                            <a href="/" className="category-list__item-link ">Giao Hàng Tiết Kiệm</a>
                                        </label>
                                    </li>
                                    <li className="category-list__item">
                                        <label className="checkbox-control">
                                            <input type="checkbox" name={'checkbox-control'} ></input>
                                            <a href="/" className="category-list__item-link ">BEST Express</a>
                                        </label>
                                    </li>
                                    <li className="category-list__item">
                                        <label className="checkbox-control">
                                            <input type="checkbox" name={'checkbox-control'} ></input>
                                            <a href="/" className="category-list__item-link ">Viettel Post</a>
                                        </label>
                                    </li>
                                    <li className="category-list__item">
                                        <label className="checkbox-control">
                                            <input type="checkbox" name={'checkbox-control'} ></input>
                                            <a href="/" className="category-list__item-link ">VNPost Nhanh</a>
                                        </label>
                                    </li>
                                    <li className="category-list__item">
                                        <label className="checkbox-control">
                                            <input type="checkbox" name={'checkbox-control'} ></input>
                                            <a href="/" className="category-list__item-link ">VNPost Tiết Kiệm</a>
                                        </label>
                                    </li>
                                    <li className="category-list__item">
                                        <label className="checkbox-control">
                                            <input type="checkbox" name={'checkbox-control'} ></input>
                                            <a href="/" className="category-list__item-link ">GrabExpress</a>
                                        </label>
                                    </li>
                                    <li className="category-list__item">
                                        <label className="checkbox-control">
                                            <input type="checkbox" name={'checkbox-control'} ></input>
                                            <a href="/" className="category-list__item-link ">Hỏa Tốc</a>
                                        </label>
                                    </li>

                                </ul>
                            </li>
                        </ul>

                    </div>

                    <div className="category-body-trademark-search category-body-parts">
                        <div className="category-prototype filter-location">
                            Thương Hiệu
                        </div>
                        <ul className="category-list">
                            <li className="category-list__item">
                                <label className="checkbox-control">
                                    <input type="checkbox" name={'checkbox-control'} ></input>
                                    <a href="/" className="category-list__item-link ">Thương hiệu 1</a>
                                </label>
                            </li>
                            <li className="category-list__item">
                                <label className="checkbox-control">
                                    <input type="checkbox" name={'checkbox-control'} ></input>
                                    <a href="/" className="category-list__item-link ">Thương hiệu 2</a>
                                </label>
                            </li>
                            <li className="category-list__item">
                                <label className="checkbox-control">
                                    <input type="checkbox" name={'checkbox-control'} ></input>
                                    <a href="/" className="category-list__item-link ">Thương hiệu 3</a>
                                </label>
                            </li>
                            <li className="category-list__item">
                                <label className="checkbox-control">
                                    <input type="checkbox" name={'checkbox-control'} ></input>
                                    <a href="/" className="category-list__item-link ">Thương hiệu 4</a>
                                </label>
                            </li>

                            <li className="category-list__item not-hover" onClick={() => handleMoreOption(3)}>
                                <div className="category-item--more">
                                    <div className="category-item--more-inner">Xem Thêm</div>
                                    <i className="fas fa-chevron-down"></i>
                                </div>

                                <ul className="category-list">

                                    <li className="category-list__item">
                                        <label className="checkbox-control">
                                            <input type="checkbox" name={'checkbox-control'} ></input>
                                            <a href="/" className="category-list__item-link ">Thương hiệu 5</a>
                                        </label>
                                    </li>
                                    <li className="category-list__item">
                                        <label className="checkbox-control">
                                            <input type="checkbox" name={'checkbox-control'} ></input>
                                            <a href="/" className="category-list__item-link ">Thương hiệu 6</a>
                                        </label>
                                    </li>
                                    <li className="category-list__item">
                                        <label className="checkbox-control">
                                            <input type="checkbox" name={'checkbox-control'} ></input>
                                            <a href="/" className="category-list__item-link ">Thương hiệu 7</a>
                                        </label>
                                    </li>
                                    <li className="category-list__item">
                                        <label className="checkbox-control">
                                            <input type="checkbox" name={'checkbox-control'} ></input>
                                            <a href="/" className="category-list__item-link ">Thương hiệu 8</a>
                                        </label>
                                    </li>
                                    <li className="category-list__item">
                                        <label className="checkbox-control">
                                            <input type="checkbox" name={'checkbox-control'} ></input>
                                            <a href="/" className="category-list__item-link ">Thương hiệu 9</a>
                                        </label>
                                    </li>
                                    <li className="category-list__item">
                                        <label className="checkbox-control">
                                            <input type="checkbox" name={'checkbox-control'} ></input>
                                            <a href="/" className="category-list__item-link ">Thương hiệu 10</a>
                                        </label>
                                    </li>
                                    <li className="category-list__item">
                                        <label className="checkbox-control">
                                            <input type="checkbox" name={'checkbox-control'} ></input>
                                            <a href="/" className="category-list__item-link ">Thương hiệu 11</a>
                                        </label>
                                    </li>
                                    <li className="category-list__item">
                                        <label className="checkbox-control">
                                            <input type="checkbox" name={'checkbox-control'} ></input>
                                            <a href="/" className="category-list__item-link ">Thương hiệu 12</a>
                                        </label>
                                    </li>

                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div className="category-body-price-search category-body-parts">
                        <div className="category-prototype filter-price">
                            Khoảng Giá
                        </div>
                        <div className="category-body--range-input">
                            <div className="category-body--range-input-wrap">
                                <input className="filter-input--price" type="text" placeholder="₫ TỪ"
                                    value={valuePriceLeft} onChange={(e) => handleChange(e, 0)}></input>
                                <div className="category-body-separate"></div>
                                <input className="filter-input--price" type="text" placeholder="₫ ĐẾN"
                                    value={valuePriceRight}
                                    onChange={(e) => handleChange(e, 1)}></input>
                            </div>
                        </div>
                        <button className="btn btn-primary btn-filter-price">ÁP DỤNG</button>
                    </div>
                    <div className="category-body-delete-all category-body-parts">
                        <button className="btn btn-primary btn-delete-filter">XÓA TẤT CẢ</button>
                    </div>

                </div>
            </nav>

        </div>

    )
}

export default Category
