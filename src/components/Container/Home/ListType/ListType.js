/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import useDimensionWindow from '../../../../hooks/useDimensionWindow';
import './ListType.css';



function ListType() {

    let count = 0;

    const carousel = useRef(null);
    const firstClick = useRef(true);
    const nextBtn = useRef(null);
    const prevBtn = useRef(null);

    const [slider, setSlider] = useState([]);
    const [itemsInBox, setItemsInBox] = useState(0);
    const typesWrap = useRef(null);
    const { width: windowWidth } = useDimensionWindow();
    const [itemTypeWidth, setItemTypeWidth] = useState(null)

    useEffect(() => {
        const slideItemElements = document.querySelectorAll('.type-item');
        const typeWrapElement = document.querySelector('.types-wrap');
        if (windowWidth >= 1024) {
            setItemsInBox(10);
            setItemTypeWidth(typeWrapElement.clientWidth / 10)
        }
        else if (windowWidth < 1024) {
            setItemsInBox(5);
            setItemTypeWidth(typeWrapElement.clientWidth / 5)
        }
        setSlider(slideItemElements);
        if (carousel.current) {
            carousel.current.style.transform = `translateX(${-slideItemElements[0].clientWidth * count}px)`;
            carousel.current.style.transition = `all 0.7s ease-in-out`;
        }
        // console.log('start')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [windowWidth])


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
            if (count >= slider.length - itemsInBox) {
                count = slider.length - itemsInBox;
                nextBtn.current.classList.add('disable');
            };
            // console.log(count);
            carousel.current.style.transform = `translateX(${-slider[0].clientWidth * count - 1.5}px)`;
        }
        else {
            nextBtn.current.classList.remove('disable');
            if (count < 0) return;
            count -= 3;
            if (count < 0) count = 0;
            console.log(count)
            carousel.current.style.transform = `translateX(${-slider[0].clientWidth * count}px)`;
            if (count === 0) {
                prevBtn.current.classList.add('disable');
                nextBtn.current.classList.remove('disable');
            }
        }
        if (count !== 0) { prevBtn.current.classList.remove('disable'); }

    }

    return (
        <div className="list-type">
            <div className="list-wrap">
                <div className="list-title">
                    <div className="">DANH M???C</div>
                </div>

                <div className="types">
                    <div className="types-wrap" ref={typesWrap}>
                        <ul className="types-detail types-on-tablet types-on-mobile" ref={carousel}>

                            <li className="type-item" style={{ width: `${itemTypeWidth}px` }} >
                                <Link to='/shop/Th???i-Trang-Nam' className="type-item--link" href="">
                                    <div className="type-item--wrap">
                                        <div className="type-item--inner"
                                            style={{ width: `${itemTypeWidth}px` ,backgroundImage: 'url("https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn")' }}>

                                        </div>
                                        <div className="type-item--name">
                                            <span>Th???i Trang Nam</span>
                                        </div>
                                    </div>
                                </Link>
                                <Link to='/shop/Th???i-Trang-N???' className="type-item--link" href="">
                                    <div className="type-item--wrap">
                                        <div className="type-item--inner"
                                            style={{ width: `${itemTypeWidth}px` ,backgroundImage: 'url("https://cf.shopee.vn/file/75ea42f9eca124e9cb3cde744c060e4d_tn")' }}>
                                        </div>
                                        <div className="type-item--name">
                                            <span>Th???i Trang N???</span>
                                        </div>
                                    </div>
                                </Link>
                            </li>

                            <li className="type-item" style={{ width: `${itemTypeWidth}px` }} >
                                <Link to='/shop/??i???n-Tho???i-&-Ph???-Ki???n' className="type-item--link" href="">
                                    <div className="type-item--wrap">
                                        <div className="type-item--inner"
                                            style={{ width: `${itemTypeWidth}px` ,backgroundImage: 'url("https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn")' }}>

                                        </div>
                                        <div className="type-item--name">
                                            <span>??i???n THo???i & Ph??? Ki???n</span>
                                        </div>
                                    </div>
                                </Link>
                                <Link to='/shop/M???-&-B??' className="type-item--link" href="">
                                    <div className="type-item--wrap">
                                        <div className="type-item--inner"
                                            style={{ width: `${itemTypeWidth}px` ,backgroundImage: 'url("https://cf.shopee.vn/file/099edde1ab31df35bc255912bab54a5e_tn")' }}>
                                        </div>
                                        <div className="type-item--name">
                                            <span>M??? & B??</span>
                                        </div>
                                    </div>
                                </Link>
                            </li>

                            <li className="type-item" style={{ width: `${itemTypeWidth}px` }} >
                                <Link to='/shop/Thi???t-B???-??i???n-T???' className="type-item--link" href="">
                                    <div className="type-item--wrap">
                                        <div className="type-item--inner"
                                            style={{ width: `${itemTypeWidth}px` ,backgroundImage: 'url("https://cf.shopee.vn/file/978b9e4cb61c611aaaf58664fae133c5_tn")' }}>
                                        </div>
                                        <div className="type-item--name">
                                            <span>Thi???t B??? ??i???n T???</span>
                                        </div>
                                    </div>
                                </Link>
                                <Link to='/shop/Nh??-C???a-&-?????i-S???ng' className="type-item--link" href="">
                                    <div className="type-item--wrap">
                                        <div className="type-item--inner"
                                            style={{ width: `${itemTypeWidth}px` ,backgroundImage: 'url("https://cf.shopee.vn/file/24b194a695ea59d384768b7b471d563f_tn")' }}>
                                        </div>
                                        <div className="type-item--name">
                                            <span>Nh?? C???a & ?????i S???ng</span>
                                        </div>
                                    </div>
                                </Link>
                            </li>

                            <li className="type-item" style={{ width: `${itemTypeWidth}px` }} >
                                <Link to='/shop/M??y-T??nh-&-Laptop' className="type-item--link" href="">
                                    <div className="type-item--wrap">
                                        <div className="type-item--inner"
                                            style={{ width: `${itemTypeWidth}px` ,backgroundImage: 'url("https://cf.shopee.vn/file/c3f3edfaa9f6dafc4825b77d8449999d_tn")' }}>
                                        </div>
                                        <div className="type-item--name">
                                            <span>M??y T??nh & Laptop</span>
                                        </div>
                                    </div>
                                </Link>
                                <Link to='/shop/S???c-?????p' className="type-item--link" href="">
                                    <div className="type-item--wrap">
                                        <div className="type-item--inner"
                                            style={{ width: `${itemTypeWidth}px` ,backgroundImage: 'url("https://cf.shopee.vn/file/c765998fda99b2be9eb6e348df29af28_tn")' }}>
                                        </div>
                                        <div className="type-item--name">
                                            <span>S???c ?????p</span>
                                        </div>
                                    </div>
                                </Link>
                            </li>

                            <li className="type-item" style={{ width: `${itemTypeWidth}px` }} >
                                <Link to='/shop/M??y-???nh-&-M??y-Quay-Phim' className="type-item--link" href="">
                                    <div className="type-item--wrap">
                                        <div className="type-item--inner"
                                            style={{ width: `${itemTypeWidth}px` ,backgroundImage: 'url("https://cf.shopee.vn/file/ec14dd4fc238e676e43be2a911414d4d_tn")' }}>
                                        </div>
                                        <div className="type-item--name">
                                            <span>M??y ???nh & M??y Quay Phim</span>
                                        </div>
                                    </div>
                                </Link>
                                <Link to='/shop/S???c-Kh???e' className="type-item--link" href="">
                                    <div className="type-item--wrap">
                                        <div className="type-item--inner"
                                            style={{ width: `${itemTypeWidth}px` ,backgroundImage: 'url("https://cf.shopee.vn/file/bf87b50b463f646bb7fb8a1a606d9ed2_tn")' }}>
                                        </div>
                                        <div className="type-item--name">
                                            <span>S???c Kh???e</span>
                                        </div>
                                    </div>
                                </Link>
                            </li>

                            <li className="type-item" style={{ width: `${itemTypeWidth}px` }} >
                                <Link to='/shop/?????ng-H???' className="type-item--link" href="">
                                    <div className="type-item--wrap">
                                        <div className="type-item--inner"
                                            style={{ width: `${itemTypeWidth}px` ,backgroundImage: 'url("https://cf.shopee.vn/file/86c294aae72ca1db5f541790f7796260_tn")' }}>
                                        </div>
                                        <div className="type-item--name">
                                            <span>?????ng H???</span>
                                        </div>
                                    </div>
                                </Link>
                                <Link to='/shop/Gi??y-D??p-N???' className="type-item--link" href="">
                                    <div className="type-item--wrap">
                                        <div className="type-item--inner"
                                            style={{ width: `${itemTypeWidth}px` ,backgroundImage: 'url("https://cf.shopee.vn/file/48630b7c76a7b62bc070c9e227097847_tn")' }}>
                                        </div>
                                        <div className="type-item--name">
                                            <span>Gi??y D??p N???</span>
                                        </div>
                                    </div>
                                </Link>
                            </li>

                            <li className="type-item" style={{ width: `${itemTypeWidth}px` }} >
                                <Link to='/shop/Gi??y-D??p-Nam' className="type-item--link" href="">
                                    <div className="type-item--wrap">
                                        <div className="type-item--inner"
                                            style={{ width: `${itemTypeWidth}px` ,backgroundImage: 'url("https://cf.shopee.vn/file/74ca517e1fa74dc4d974e5d03c3139de_tn")' }}>
                                        </div>
                                        <div className="type-item--name">
                                            <span>Gi??y D??p Nam</span>
                                        </div>
                                    </div>
                                </Link>
                                <Link to='/shop/T??i-V??-N???' className="type-item--link" href="">
                                    <div className="type-item--wrap">
                                        <div className="type-item--inner"
                                            style={{ width: `${itemTypeWidth}px` ,backgroundImage: 'url("https://cf.shopee.vn/file/fa6ada2555e8e51f369718bbc92ccc52_tn")' }}>
                                        </div>
                                        <div className="type-item--name">
                                            <span>T??i V?? N???</span>
                                        </div>
                                    </div>
                                </Link>
                            </li>

                            <li className="type-item" style={{ width: `${itemTypeWidth}px` }} >
                                <Link to='/shop/Thi???t-B???-??i???n-Gia-D???ng' className="type-item--link" href="">
                                    <div className="type-item--wrap">
                                        <div className="type-item--inner"
                                            style={{ width: `${itemTypeWidth}px` ,backgroundImage: 'url("https://cf.shopee.vn/file/7abfbfee3c4844652b4a8245e473d857_tn")' }}>
                                        </div>
                                        <div className="type-item--name">
                                            <span>Thi???t B??? ??i???n Gia D???ng</span>
                                        </div>
                                    </div>
                                </Link>
                                <Link to='/shop/Ph???-Ki???n-&-Trang-S???c-N???' className="type-item--link" href="">
                                    <div className="type-item--wrap">
                                        <div className="type-item--inner"
                                            style={{ width: `${itemTypeWidth}px` ,backgroundImage: 'url("https://cf.shopee.vn/file/8e71245b9659ea72c1b4e737be5cf42e_tn")' }}>
                                        </div>
                                        <div className="type-item--name">
                                            <span>Ph??? Ki???n & Trang S???c N???</span>
                                        </div>
                                    </div>
                                </Link>
                            </li>

                            <li className="type-item" style={{ width: `${itemTypeWidth}px` }} >
                                <Link to='/shop/Th???-Thao-&-Du-L???ch' className="type-item--link" href="">
                                    <div className="type-item--wrap">
                                        <div className="type-item--inner"
                                            style={{ width: `${itemTypeWidth}px` ,backgroundImage: 'url("https://cf.shopee.vn/file/6cb7e633f8b63757463b676bd19a50e4_tn")' }}>
                                        </div>
                                        <div className="type-item--name">
                                            <span>Th??? Thao & Du L???ch</span>
                                        </div>
                                    </div>
                                </Link>
                                <Link to='/shop/B??ch-H??a-Online' className="type-item--link" href="">
                                    <div className="type-item--wrap">
                                        <div className="type-item--inner"
                                            style={{ width: `${itemTypeWidth}px` ,backgroundImage: 'url("https://cf.shopee.vn/file/c432168ee788f903f1ea024487f2c889_tn")' }}>
                                        </div>
                                        <div className="type-item--name">
                                            <span>B??ch H??a Online</span>
                                        </div>
                                    </div>
                                </Link>
                            </li>

                            <li className="type-item" style={{ width: `${itemTypeWidth}px` }} >
                                <Link to='/shop/??-T??-&-Xe-M??y-&-Xe-?????p' className="type-item--link" href="">
                                    <div className="type-item--wrap">
                                        <div className="type-item--inner"
                                            style={{ width: `${itemTypeWidth}px` ,backgroundImage: 'url("https://cf.shopee.vn/file/3fb459e3449905545701b418e8220334_tn")' }}>
                                        </div>
                                        <div className="type-item--name">
                                            <span>?? T?? & Xe M??y & Xe ?????p</span>
                                        </div>
                                    </div>
                                </Link>
                                <Link to='/shop/Nh??-S??ch-Online' className="type-item--link" href="">
                                    <div className="type-item--wrap">
                                        <div className="type-item--inner"
                                            style={{ width: `${itemTypeWidth}px` ,backgroundImage: 'url("https://cf.shopee.vn/file/36013311815c55d303b0e6c62d6a8139_tn")' }}>
                                        </div>
                                        <div className="type-item--name">
                                            <span>Nh?? S??ch Online</span>
                                        </div>
                                    </div>
                                </Link>
                            </li>

                            <li className="type-item" style={{ width: `${itemTypeWidth}px` }} >
                                <Link to='/shop/Balo-&-T??i-V??-Nam' className="type-item--link" href="">
                                    <div className="type-item--wrap">
                                        <div className="type-item--inner"
                                            style={{ width: `${itemTypeWidth}px` ,backgroundImage: 'url("https://cf.shopee.vn/file/18fd9d878ad946db2f1bf4e33760c86f_tn")' }}>
                                        </div>
                                        <div className="type-item--name">
                                            <span>Balo & T??i V?? Nam</span>
                                        </div>
                                    </div>
                                </Link>
                                <Link to='/shop/Th???i-Trang-Tr???-Em<' className="type-item--link" href="">
                                    <div className="type-item--wrap">
                                        <div className="type-item--inner"
                                            style={{ width: `${itemTypeWidth}px` ,backgroundImage: 'url("https://cf.shopee.vn/file/4540f87aa3cbe99db739f9e8dd2cdaf0_tn")' }}>
                                        </div>
                                        <div className="type-item--name">
                                            <span>Th???i Trang Tr??? Em</span>
                                        </div>
                                    </div>
                                </Link>
                            </li>

                            <li className="type-item" style={{ width: `${itemTypeWidth}px` }} >
                                <Link to='/shop/?????-Ch??i' className="type-item--link" href="">
                                    <div className="type-item--wrap">
                                        <div className="type-item--inner"
                                            style={{ width: `${itemTypeWidth}px` ,backgroundImage: 'url("https://cf.shopee.vn/file/ce8f8abc726cafff671d0e5311caa684_tn")' }}>
                                        </div>
                                        <div className="type-item--name">
                                            <span>????? Ch??i</span>
                                        </div>
                                    </div>
                                </Link>
                                <Link to='/shop/Gi???t-Gi??-&-Ch??m-S??c-Nh??-C???a' className="type-item--link" href="">
                                    <div className="type-item--wrap">
                                        <div className="type-item--inner"
                                            style={{ width: `${itemTypeWidth}px` ,backgroundImage: 'url("https://cf.shopee.vn/file/cd8e0d2e6c14c4904058ae20821d0763_tn")' }}>
                                        </div>
                                        <div className="type-item--name">
                                            <span>Gi???t Gi?? & Ch??m S??c Nh?? C???a</span>
                                        </div>
                                    </div>
                                </Link>
                            </li>

                            <li className="type-item" style={{ width: `${itemTypeWidth}px` }} >
                                <Link to='/shop/Ch??m-S??c-Th??-C??ng' className="type-item--link" href="">
                                    <div className="type-item--wrap">
                                        <div className="type-item--inner"
                                            style={{ width: `${itemTypeWidth}px` ,backgroundImage: 'url("https://cf.shopee.vn/file/cdf21b1bf4bfff257efe29054ecea1ec_tn")' }}>
                                        </div>
                                        <div className="type-item--name">
                                            <span>Ch??m S??c Th?? C??ng</span>
                                        </div>
                                    </div>
                                </Link>
                                <Link to='/shop/Voucher-&-D???ch-V???' className="type-item--link" href="">
                                    <div className="type-item--wrap">
                                        <div className="type-item--inner"
                                            style={{ width: `${itemTypeWidth}px` ,backgroundImage: 'url("https://cf.shopee.vn/file/d3b22516408fdb736aa355271e63135b")' }}>
                                        </div>
                                        <div className="type-item--name">
                                            <span>Voucher & D???ch V???</span>
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
