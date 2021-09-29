/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './ListType.scss';



function ListType() {

    let count = 0;

    const carousel = useRef(null);
    const firstClick = useRef(true);
    const nextBtn = useRef(null);
    const prevBtn = useRef(null);

    const [slider, setSlider] = useState([]);
    const [itemsInBox, setItemsInBox] = useState(0);
    const typesWrap = useRef(null);

    useEffect(() => {
        const slideItemElements = document.querySelectorAll('.type-item');
        const typeWrapElement = document.querySelector('.types-wrap');
        setItemsInBox(Math.floor(typeWrapElement.clientWidth / slideItemElements[0].clientWidth));
        setSlider(slideItemElements);
        if (carousel.current) {
            carousel.current.style.transform = `translateX(${-slideItemElements[0].clientWidth * count}px)`;
            carousel.current.style.transition = `all 0.7s ease-in-out`;
        }
        // console.log('start')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const handleOnClick = (temp) => {
        if (temp) {
            prevBtn.current.classList.remove('disable');
            if (firstClick.current) {
                // count = itemsInBox;
                firstClick.current = false;
            }
            // if (count >= slider.length - 1 - itemsInBox) return;
            count += 3;
            if (count === slider.length - itemsInBox - 1) nextBtn.current.classList.add('disable');
            if (count > slider.length - itemsInBox) {        
                count = slider.length - itemsInBox - 1;
                nextBtn.current.classList.add('disable');
            };
            // console.log(count);
            carousel.current.style.transform = `translateX(${-slider[0].clientWidth * (count) - 1.5}px)`;
        }
        else {
            nextBtn.current.classList.remove('disable');
            if (count < 0) return;
            count -= 3;
            if (count < 0) count = 0;
            console.log(count)
            carousel.current.style.transform = `translateX(${-slider[0].clientWidth * count}px)`;
            if  (count === 0) {
                prevBtn.current.classList.add('disable');
                nextBtn.current.classList.remove('disable');
            }
        }
        if (count !== 0)  {prevBtn.current.classList.remove('disable');}

    }

    return (
        <div className="list-type">
            <div className="list-wrap">
                <div className="list-title">
                    <div className="">DANH MỤC</div>
                </div>

                <div className="types">
                    <div className="types-wrap" ref={typesWrap}>
                        <ul className="types-detail types-on-tablet types-on-mobile" ref={carousel}>

                            <li className="type-item">
                                <Link  to='/shop/Thời-Trang-Nam' className="type-item--link" href="">
                                    <div className="type-item--wrap">
                                        <div className="type-item--inner" style={{ backgroundImage: 'url("https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn")' }}>

                                        </div>
                                        <div className="type-item--name">
                                            <span>Thời Trang Nam</span>
                                        </div>
                                    </div>
                                </Link>
                                <Link to='/shop/Thời-Trang-Nữ' className="type-item--link" href="">
                                    <div className="type-item--wrap">
                                        <div className="type-item--inner"
                                            style={{ backgroundImage: 'url("https://cf.shopee.vn/file/75ea42f9eca124e9cb3cde744c060e4d_tn")' }}>
                                        </div>
                                        <div className="type-item--name">
                                            <span>Thời Trang Nữ</span>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                           
                            <li className="type-item">
                                <Link  to='/shop/Điện-Thoại-&-Phụ-Kiện' className="type-item--link" href="">
                                    <div className="type-item--wrap">
                                        <div className="type-item--inner" 
                                            style={{ backgroundImage: 'url("https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn")' }}>

                                        </div>
                                        <div className="type-item--name">
                                            <span>Điện THoại & Phụ Kiện</span>
                                        </div>
                                    </div>
                                </Link>
                                <Link to='/shop/Mẹ-&-Bé' className="type-item--link" href="">
                                    <div className="type-item--wrap">
                                        <div className="type-item--inner"
                                            style={{ backgroundImage: 'url("https://cf.shopee.vn/file/099edde1ab31df35bc255912bab54a5e_tn")' }}>
                                        </div>
                                        <div className="type-item--name">
                                            <span>Mẹ & Bé</span>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                           
                            <li className="type-item">
                                <Link  to='/shop/Thiết-Bị-Điện-Tử' className="type-item--link" href="">
                                    <div className="type-item--wrap">
                                        <div className="type-item--inner" 
                                            style={{ backgroundImage: 'url("https://cf.shopee.vn/file/978b9e4cb61c611aaaf58664fae133c5_tn")' }}>
                                        </div>
                                        <div className="type-item--name">
                                            <span>Thiết Bị Điện Tử</span>
                                        </div>
                                    </div>
                                </Link>
                                <Link to='/shop/Nhà-Cửa-&-Đời-Sống' className="type-item--link" href="">
                                    <div className="type-item--wrap">
                                        <div className="type-item--inner"
                                            style={{ backgroundImage: 'url("https://cf.shopee.vn/file/24b194a695ea59d384768b7b471d563f_tn")' }}>
                                        </div>
                                        <div className="type-item--name">
                                            <span>Nhà Cửa & Đời Sống</span>
                                        </div>
                                    </div>
                                </Link>
                            </li>   
                           
                            <li className="type-item">
                                <Link  to='/shop/Máy-Tính-&-Laptop' className="type-item--link" href="">
                                    <div className="type-item--wrap">
                                        <div className="type-item--inner" 
                                            style={{ backgroundImage: 'url("https://cf.shopee.vn/file/c3f3edfaa9f6dafc4825b77d8449999d_tn")' }}>
                                        </div>
                                        <div className="type-item--name">
                                            <span>Máy Tính & Laptop</span>
                                        </div>
                                    </div>
                                </Link>
                                <Link to='/shop/Sắc-Đẹp' className="type-item--link" href="">
                                    <div className="type-item--wrap">
                                        <div className="type-item--inner"
                                            style={{ backgroundImage: 'url("https://cf.shopee.vn/file/c765998fda99b2be9eb6e348df29af28_tn")' }}>
                                        </div>
                                        <div className="type-item--name">
                                            <span>Sắc Đẹp</span>
                                        </div>
                                    </div>
                                </Link>
                            </li>   
                            
                            <li className="type-item">
                                <Link  to='/shop/Máy-Ảnh-&-Máy-Quay-Phim' className="type-item--link" href="">
                                    <div className="type-item--wrap">
                                        <div className="type-item--inner" 
                                            style={{ backgroundImage: 'url("https://cf.shopee.vn/file/ec14dd4fc238e676e43be2a911414d4d_tn")' }}>
                                        </div>
                                        <div className="type-item--name">
                                            <span>Máy Ảnh & Máy Quay Phim</span>
                                        </div>
                                    </div>
                                </Link>
                                <Link to='/shop/Sức-Khỏe' className="type-item--link" href="">
                                    <div className="type-item--wrap">
                                        <div className="type-item--inner"
                                            style={{ backgroundImage: 'url("https://cf.shopee.vn/file/bf87b50b463f646bb7fb8a1a606d9ed2_tn")' }}>
                                        </div>
                                        <div className="type-item--name">
                                            <span>Sức Khỏe</span>
                                        </div>
                                    </div>
                                </Link>
                            </li>   
                            
                            <li className="type-item">
                                <Link  to='/shop/Đồng-Hồ' className="type-item--link" href="">
                                    <div className="type-item--wrap">
                                        <div className="type-item--inner" 
                                            style={{ backgroundImage: 'url("https://cf.shopee.vn/file/86c294aae72ca1db5f541790f7796260_tn")' }}>
                                        </div>
                                        <div className="type-item--name">
                                            <span>Đồng Hồ</span>
                                        </div>
                                    </div>
                                </Link>
                                <Link to='/shop/Giày-Dép-Nữ' className="type-item--link" href="">
                                    <div className="type-item--wrap">
                                        <div className="type-item--inner"
                                            style={{ backgroundImage: 'url("https://cf.shopee.vn/file/48630b7c76a7b62bc070c9e227097847_tn")' }}>
                                        </div>
                                        <div className="type-item--name">
                                            <span>Giày Dép Nữ</span>
                                        </div>
                                    </div>
                                </Link>
                            </li>   
                            
                            <li className="type-item">
                                <Link  to='/shop/Giày-Dép-Nam' className="type-item--link" href="">
                                    <div className="type-item--wrap">
                                        <div className="type-item--inner" 
                                            style={{ backgroundImage: 'url("https://cf.shopee.vn/file/74ca517e1fa74dc4d974e5d03c3139de_tn")' }}>
                                        </div>
                                        <div className="type-item--name">
                                            <span>Giày Dép Nam</span>
                                        </div>
                                    </div>
                                </Link>
                                <Link to='/shop/Túi-Ví-NỮ' className="type-item--link" href="">
                                    <div className="type-item--wrap">
                                        <div className="type-item--inner"
                                            style={{ backgroundImage: 'url("https://cf.shopee.vn/file/fa6ada2555e8e51f369718bbc92ccc52_tn")' }}>
                                        </div>
                                        <div className="type-item--name">
                                            <span>Túi Ví Nữ</span>
                                        </div>
                                    </div>
                                </Link>
                            </li>   
                            
                            <li className="type-item">
                                <Link  to='/shop/Thiết-Bị-Điện-Gia-Dụng' className="type-item--link" href="">
                                    <div className="type-item--wrap">
                                        <div className="type-item--inner" 
                                            style={{ backgroundImage: 'url("https://cf.shopee.vn/file/7abfbfee3c4844652b4a8245e473d857_tn")' }}>
                                        </div>
                                        <div className="type-item--name">
                                            <span>Thiết Bị Điện Gia Dụng</span>
                                        </div>
                                    </div>
                                </Link>
                                <Link to='/shop/Phụ-Kiện-&-Trang-Sức-Nữ' className="type-item--link" href="">
                                    <div className="type-item--wrap">
                                        <div className="type-item--inner"
                                            style={{ backgroundImage: 'url("https://cf.shopee.vn/file/8e71245b9659ea72c1b4e737be5cf42e_tn")' }}>
                                        </div>
                                        <div className="type-item--name">
                                            <span>Phụ Kiện & Trang Sức Nữ</span>
                                        </div>
                                    </div>
                                </Link>
                            </li>   
                            
                            <li className="type-item">
                                <Link  to='/shop/Thể-Thao-&-Du-Lịch' className="type-item--link" href="">
                                    <div className="type-item--wrap">
                                        <div className="type-item--inner" 
                                            style={{ backgroundImage: 'url("https://cf.shopee.vn/file/6cb7e633f8b63757463b676bd19a50e4_tn")' }}>
                                        </div>
                                        <div className="type-item--name">
                                            <span>Thể Thao & Du Lịch</span>
                                        </div>
                                    </div>
                                </Link>
                                <Link to='/shop/Bách-Hóa-Online' className="type-item--link" href="">
                                    <div className="type-item--wrap">
                                        <div className="type-item--inner"
                                            style={{ backgroundImage: 'url("https://cf.shopee.vn/file/c432168ee788f903f1ea024487f2c889_tn")' }}>
                                        </div>
                                        <div className="type-item--name">
                                            <span>Bách Hóa Online</span>
                                        </div>
                                    </div>
                                </Link>
                            </li>   
                            
                            <li className="type-item">
                                <Link  to='/shop/Ô-Tô-&-Xe-Máy-&-Xe-Đạp' className="type-item--link" href="">
                                    <div className="type-item--wrap">
                                        <div className="type-item--inner" 
                                            style={{ backgroundImage: 'url("https://cf.shopee.vn/file/3fb459e3449905545701b418e8220334_tn")' }}>
                                        </div>
                                        <div className="type-item--name">
                                            <span>Ô Tô & Xe Máy & Xe Đạp</span>
                                        </div>
                                    </div>
                                </Link>
                                <Link to='/shop/Nhà-Sách-Online' className="type-item--link" href="">
                                    <div className="type-item--wrap">
                                        <div className="type-item--inner"
                                            style={{ backgroundImage: 'url("https://cf.shopee.vn/file/36013311815c55d303b0e6c62d6a8139_tn")' }}>
                                        </div>
                                        <div className="type-item--name">
                                            <span>Nhà Sách Online</span>
                                        </div>
                                    </div>
                                </Link>
                            </li>   
                            
                            <li className="type-item">
                                <Link  to='/shop/Balo-&-Túi-Ví-Nam' className="type-item--link" href="">
                                    <div className="type-item--wrap">
                                        <div className="type-item--inner" 
                                            style={{ backgroundImage: 'url("https://cf.shopee.vn/file/18fd9d878ad946db2f1bf4e33760c86f_tn")' }}>
                                        </div>
                                        <div className="type-item--name">
                                            <span>Balo & Túi Ví Nam</span>
                                        </div>
                                    </div>
                                </Link>
                                <Link to='/shop/Thời-Trang-Trẻ-Em<' className="type-item--link" href="">
                                    <div className="type-item--wrap">
                                        <div className="type-item--inner"
                                            style={{ backgroundImage: 'url("https://cf.shopee.vn/file/4540f87aa3cbe99db739f9e8dd2cdaf0_tn")' }}>
                                        </div>
                                        <div className="type-item--name">
                                            <span>Thời Trang Trẻ Em</span>
                                        </div>
                                    </div>
                                </Link>
                            </li>   
                            
                            <li className="type-item">
                                <Link  to='/shop/Đồ-Chơi' className="type-item--link" href="">
                                    <div className="type-item--wrap">
                                        <div className="type-item--inner" 
                                            style={{ backgroundImage: 'url("https://cf.shopee.vn/file/ce8f8abc726cafff671d0e5311caa684_tn")' }}>
                                        </div>
                                        <div className="type-item--name">
                                            <span>Đồ Chơi</span>
                                        </div>
                                    </div>
                                </Link>
                                <Link to='/shop/Giặt-Giũ-&-Chăm-Sóc-Nhà-Cửa' className="type-item--link" href="">
                                    <div className="type-item--wrap">
                                        <div className="type-item--inner"
                                            style={{ backgroundImage: 'url("https://cf.shopee.vn/file/cd8e0d2e6c14c4904058ae20821d0763_tn")' }}>
                                        </div>
                                        <div className="type-item--name">
                                            <span>Giặt Giũ & Chăm Sóc Nhà Cửa</span>
                                        </div>
                                    </div>
                                </Link>
                            </li>   
                            
                            <li className="type-item">
                                <Link  to='/shop/Chăm-Sóc-Thú-Cưng' className="type-item--link" href="">
                                    <div className="type-item--wrap">
                                        <div className="type-item--inner" 
                                            style={{ backgroundImage: 'url("https://cf.shopee.vn/file/cdf21b1bf4bfff257efe29054ecea1ec_tn")' }}>
                                        </div>
                                        <div className="type-item--name">
                                            <span>Chăm Sóc Thú Cưng</span>
                                        </div>
                                    </div>
                                </Link>
                                <Link to='/shop/Voucher-&-Dịch-Vụ' className="type-item--link" href="">
                                    <div className="type-item--wrap">
                                        <div className="type-item--inner"
                                            style={{ backgroundImage: 'url("https://cf.shopee.vn/file/d3b22516408fdb736aa355271e63135b")' }}>
                                        </div>
                                        <div className="type-item--name">
                                            <span>Voucher & Dịch Vụ</span>
                                        </div>
                                    </div>
                                </Link>
                            </li>   
                            
                        </ul>
                    </div>
                    <div className="types-btn-next" ref={nextBtn} onClick={() => handleOnClick(true)}>
                        <i className="fas fa-chevron-circle-right"></i>
                    </div>
                    <div className="types-btn-prev disable" ref={prevBtn} onClick={() => handleOnClick(false)}>
                        <i className="fas fa-chevron-circle-left"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListType
