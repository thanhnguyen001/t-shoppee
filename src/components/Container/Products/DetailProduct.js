import React from 'react';
import Pagination from '../Pagination/Pagination';
import './DetailProduct.scss';

function DetailProduct() {

    return (
        <div className="product-introduce">
            <div className="product-introduce--wrap">
                <div className="product-introduce--description c-10">
                    <div className="product-introduce--description-wrap">
                        <div className="product-introduce--detail">
                            <div className="product-introduce--detail-wrap">
                                <div className="product-introduce--detail-title"><span>CHI TIẾT SẢN PHẨM</span></div>
                                <div className="product-introduce--detail-text">
                                    <ul className="product-introduce--detail-list">
                                        <li className="product-introduce--detail-item">
                                            <div className="product-introduce--item-title">Danh Mục</div>
                                            <div className="product-introduce--item-text">{`Shoppe > Máy tính & Laptop > Laptop`}</div>
                                        </li>
                                        <li className="product-introduce--detail-item">
                                            <div className="product-introduce--item-title">Thương hiệu</div>
                                            <div className="product-introduce--item-text">Asus</div>
                                        </li>
                                        <li className="product-introduce--detail-item">
                                            <div className="product-introduce--item-title">Kích thước màn hình laptop</div>
                                            <div className="product-introduce--item-text">15 Inches</div>
                                        </li>
                                        <li className="product-introduce--detail-item">
                                            <div className="product-introduce--item-title">Loại laptop</div>
                                            <div className="product-introduce--item-text">Gaming</div>
                                        </li>
                                        <li className="product-introduce--detail-item">
                                            <div className="product-introduce--item-title">Kho hàng</div>
                                            <div className="product-introduce--item-text">13</div>
                                        </li>
                                        <li className="product-introduce--detail-item">
                                            <div className="product-introduce--item-title">Gửi từ</div>
                                            <div className="product-introduce--item-text">Quận 12, TP. Hồ Chí Minh</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="product-introduce--description-text">
                            <div className="product-introduce--description-text-wrap">
                                <div className="product-introduce--description-title"><span>MÔ TẢ SẢN PHẨM</span></div>
                                <div className="product-introduce--description-inner">
                                    <span>
                                        <pre>
                                            {`
Thông số ASUS TUF A15 FA506IU-AL127T

CPU                 AMD Ryzen 7 4800H 2.9GHz up to 4.2GHz 8MB

RAM                 8GB DDR4 3200MHz (2x SO-DIMM socket, up to 32GB SDRAM)

Ổ cứng              512GB SSD M.2 PCIE G3X2 (2 slots)

Card đồ họa         NVIDIA GeForce GTX 1660Ti 6GB GDDR6 + AMD Radeon™ Graphics

Màn hình            15.6" FHD (1920 x 1080) IPS, 144Hz, Non-Glare, Wide View, Narrow Bezel

Cổng giao tiếp      2x Type-A USB 3.2 (Gen 1)
                    1x Type-C USB 3.2 (Gen 2) with display supportDP1.4
                    1x Type-A USB2.0
                    1x RJ-45 LAN
                    1x HDMI
                    1x COMBO audio jack

Audio	            DTS:X® Ultra

Chuẩn LAN           10/100/1000/Gigabits Base T

Chuẩn WIFI          802.11AC (2X2)

Bluetooth           v5.0

Webcam	            HD 720p CMOS module

Hệ điều hành	    Windows 10 Home

Pin                 4 Cell 90WHr

Trọng lượng         2.3 kg

Màu sắc             Gun Metal; Led RGB Keyboard

Kích thước          359.8 x 256 x 22.8 ~24.9 cm
`}
                                        </pre>
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="product-introduce--assessments" >
                        <div className="product-introduce--assessments-wrap">
                            <div className="product-introduce--assessments-heading" id="danh-gia-san-pham">
                                <span>ĐÁNH GIÁ SẢN PHẨM</span>
                            </div>
                            <div className="product-introduce--assessments-star">
                                <div className="product-introduce--star-wrap">
                                    <div className="product-introduce--star-total">
                                        <div className="product-introduce--star-total-line1"><span>5 </span>trên 5</div>
                                        <div className="product-introduce--star-total-line2">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                    </div>
                                    <div className="product-introduce--star-filter">
                                        <div className="product-introduce--star-all active"><span>Tất Cả</span></div>
                                        <div className="product-introduce--star-five"><span>5 Sao</span></div>
                                        <div className="product-introduce--star-four"><span>4 Sao</span></div>
                                        <div className="product-introduce--star-three"><span>3 Sao</span></div>
                                        <div className="product-introduce--star-two"><span>2 Sao</span></div>
                                        <div className="product-introduce--star-one"><span>1 Sao</span></div>
                                        <div className="product-introduce--star-comment"><span>Có Bình Luận</span></div>
                                        <div className="product-introduce--star-video"><span>Có Hình Ảnh / Video</span></div>
                                    </div>
                                </div>
                            </div>

                            <div className="product-introduce--assessments-comment">
                                <div className="product-introduce--assessments-comment-wrap">

                                    <div className="product-introduce--assessments-user">
                                        <div className="product-introduce--assessments-user-wrap">
                                            <div className="product-introduce--assessments-user--info">
                                                <div className="product-introduce--assessments-user--avatar">
                                                    <img src="https://cf.shopee.vn/file/ad213f87132d61378d58322ab119e64d_tn" alt="user" />
                                                </div>
                                                <div className="product-introduce--assessments-user--rating">
                                                    <div className="product-introduce--assessments-user--name">nameOfUser1</div>
                                                    <div className="product-introduce--assessments-user--star">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-introduce--assessments-user-comment">
                                                <span>Hàng chính hãng, đập thùng. Mua được flash sale giá tốt hơn nhiều so với mua shop ngoài.
                                                    Cấu hình ngon, máy mạnh, mát mẻ.
                                                </span>
                                                <div className="product-introduce--assessments-user-time">
                                                    <span>2020-11-10 15:49</span>
                                                </div>
                                                <div className="product-introduce--assessments-user-reaction">
                                                    <span>
                                                        <i className="far fa-thumbs-up active"></i>
                                                        <i className="fas fa-thumbs-up"></i>
                                                        {` 1`}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="product-introduce--assessments-user">
                                        <div className="product-introduce--assessments-user-wrap">
                                            <div className="product-introduce--assessments-user--info">
                                                <div className="product-introduce--assessments-user--avatar">
                                                    <img src="https://cf.shopee.vn/file/ad213f87132d61378d58322ab119e64d_tn" alt="user" />
                                                </div>
                                                <div className="product-introduce--assessments-user--rating">
                                                    <div className="product-introduce--assessments-user--name">nameOfUser1</div>
                                                    <div className="product-introduce--assessments-user--star">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-introduce--assessments-user-comment">
                                                <span>Hàng chính hãng, đập thùng. Mua được flash sale giá tốt hơn nhiều so với mua shop ngoài.
                                                    Cấu hình ngon, máy mạnh, mát mẻ.
                                                </span>
                                                <div className="product-introduce--assessments-user-time">
                                                    <span>2020-11-10 15:49</span>
                                                </div>
                                                <div className="product-introduce--assessments-user-reaction">
                                                    <span>
                                                        <i className="far fa-thumbs-up active"></i>
                                                        <i className="fas fa-thumbs-up"></i>
                                                        {` 1`}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="product-introduce--assessments-user">
                                        <div className="product-introduce--assessments-user-wrap">
                                            <div className="product-introduce--assessments-user--info">
                                                <div className="product-introduce--assessments-user--avatar">
                                                    <img src="https://cf.shopee.vn/file/ad213f87132d61378d58322ab119e64d_tn" alt="user" />
                                                </div>
                                                <div className="product-introduce--assessments-user--rating">
                                                    <div className="product-introduce--assessments-user--name">nameOfUser1</div>
                                                    <div className="product-introduce--assessments-user--star">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-introduce--assessments-user-comment">
                                                <span>Hàng chính hãng, đập thùng. Mua được flash sale giá tốt hơn nhiều so với mua shop ngoài.
                                                    Cấu hình ngon, máy mạnh, mát mẻ.
                                                </span>
                                                <div className="product-introduce--assessments-user-time">
                                                    <span>2020-11-10 15:49</span>
                                                </div>
                                                <div className="product-introduce--assessments-user-reaction">
                                                    <span>
                                                        <i className="far fa-thumbs-up active"></i>
                                                        <i className="fas fa-thumbs-up"></i>
                                                        {` 1`}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <Pagination />
                        </div>
                    </div>
                </div>

                <div className="product-introduce--ad c-2">
                    <div className="product-introduce--ad-wrap">
                        <ul className="product-introduce--ad-list">

                            <li className="product-introduce--ad-item">
                                <div className="c-12">
                                    <div className="product-introduce home-product-item">
                                        <div className="product-introduce home-product-img" style={{ backgroundImage: 'url(https:/cf.shopee.vn/file/eed033bb915c47087453edd8cd861540_tn)' }}>
                                        </div>
                                        <h4 className="product-introduce home-product-name">Laptop ASUS TUF FA506IV-HN202T R7-4800H 16GB 1TB SSD RTX2060 15.6"FHD IPS 144Hz W10</h4>
                                        <span className="product-introduce home-product-installment">0% TRẢ GÓP</span>
                                        <div className="product-introduce home-product-price">
                                            <div className="product-introduce home-product-price-old"><span className="product-introduce unit">đ</span>35.000.000</div>
                                            <div className="product-introduce home-product-price-current"><span className="product-introduce unit">đ</span>32.990.000</div>
                                        </div>
                                        <div className="product-introduce home-product-favourite">
                                            <i className="product-introduce fas fa-check"></i>
                                            <span>Bán Chạy</span>
                                        </div>
                                        <div className="product-introduce home-product-discount">
                                            <span className="product-introduce home-product-discount-percent">10%</span>
                                            <span className="product-introduce home-product-discount-label">GIẢM</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            
                            <li className="product-introduce--ad-item">
                                <div className="c-12">
                                    <div className="product-introduce home-product-item">
                                        <div className="product-introduce home-product-img" style={{ backgroundImage: 'url(https:/cf.shopee.vn/file/eed033bb915c47087453edd8cd861540_tn)' }}>
                                        </div>
                                        <h4 className="product-introduce home-product-name">Laptop ASUS TUF FA506IV-HN202T R7-4800H 16GB 1TB SSD RTX2060 15.6"FHD IPS 144Hz W10</h4>
                                        <span className="product-introduce home-product-installment">0% TRẢ GÓP</span>
                                        <div className="product-introduce home-product-price">
                                            <div className="product-introduce home-product-price-old"><span className="product-introduce unit">đ</span>35.000.000</div>
                                            <div className="product-introduce home-product-price-current"><span className="product-introduce unit">đ</span>32.990.000</div>
                                        </div>
                                        <div className="product-introduce home-product-favourite">
                                            <i className="product-introduce fas fa-check"></i>
                                            <span>Bán Chạy</span>
                                        </div>
                                        <div className="product-introduce home-product-discount">
                                            <span className="product-introduce home-product-discount-percent">10%</span>
                                            <span className="product-introduce home-product-discount-label">GIẢM</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            
                            <li className="product-introduce--ad-item">
                                <div className="c-12">
                                    <div className="product-introduce home-product-item">
                                        <div className="product-introduce home-product-img" style={{ backgroundImage: 'url(https:/cf.shopee.vn/file/eed033bb915c47087453edd8cd861540_tn)' }}>
                                        </div>
                                        <h4 className="product-introduce home-product-name">Laptop ASUS TUF FA506IV-HN202T R7-4800H 16GB 1TB SSD RTX2060 15.6"FHD IPS 144Hz W10</h4>
                                        <span className="product-introduce home-product-installment">0% TRẢ GÓP</span>
                                        <div className="product-introduce home-product-price">
                                            <div className="product-introduce home-product-price-old"><span className="product-introduce unit">đ</span>35.000.000</div>
                                            <div className="product-introduce home-product-price-current"><span className="product-introduce unit">đ</span>32.990.000</div>
                                        </div>
                                        <div className="product-introduce home-product-favourite">
                                            <i className="product-introduce fas fa-check"></i>
                                            <span>Bán Chạy</span>
                                        </div>
                                        <div className="product-introduce home-product-discount">
                                            <span className="product-introduce home-product-discount-percent">10%</span>
                                            <span className="product-introduce home-product-discount-label">GIẢM</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            
                            <li className="product-introduce--ad-item">
                                <div className="c-12">
                                    <div className="product-introduce home-product-item">
                                        <div className="product-introduce home-product-img" style={{ backgroundImage: 'url(https:/cf.shopee.vn/file/eed033bb915c47087453edd8cd861540_tn)' }}>
                                        </div>
                                        <h4 className="product-introduce home-product-name">Laptop ASUS TUF FA506IV-HN202T R7-4800H 16GB 1TB SSD RTX2060 15.6"FHD IPS 144Hz W10</h4>
                                        <span className="product-introduce home-product-installment">0% TRẢ GÓP</span>
                                        <div className="product-introduce home-product-price">
                                            <div className="product-introduce home-product-price-old"><span className="product-introduce unit">đ</span>35.000.000</div>
                                            <div className="product-introduce home-product-price-current"><span className="product-introduce unit">đ</span>32.990.000</div>
                                        </div>
                                        <div className="product-introduce home-product-favourite">
                                            <i className="product-introduce fas fa-check"></i>
                                            <span>Bán Chạy</span>
                                        </div>
                                        <div className="product-introduce home-product-discount">
                                            <span className="product-introduce home-product-discount-percent">10%</span>
                                            <span className="product-introduce home-product-discount-label">GIẢM</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            
                            <li className="product-introduce--ad-item">
                                <div className="c-12">
                                    <div className="product-introduce home-product-item">
                                        <div className="product-introduce home-product-img" style={{ backgroundImage: 'url(https:/cf.shopee.vn/file/eed033bb915c47087453edd8cd861540_tn)' }}>
                                        </div>
                                        <h4 className="product-introduce home-product-name">Laptop ASUS TUF FA506IV-HN202T R7-4800H 16GB 1TB SSD RTX2060 15.6"FHD IPS 144Hz W10</h4>
                                        <span className="product-introduce home-product-installment">0% TRẢ GÓP</span>
                                        <div className="product-introduce home-product-price">
                                            <div className="product-introduce home-product-price-old"><span className="product-introduce unit">đ</span>35.000.000</div>
                                            <div className="product-introduce home-product-price-current"><span className="product-introduce unit">đ</span>32.990.000</div>
                                        </div>
                                        <div className="product-introduce home-product-favourite">
                                            <i className="product-introduce fas fa-check"></i>
                                            <span>Bán Chạy</span>
                                        </div>
                                        <div className="product-introduce home-product-discount">
                                            <span className="product-introduce home-product-discount-percent">10%</span>
                                            <span className="product-introduce home-product-discount-label">GIẢM</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailProduct
