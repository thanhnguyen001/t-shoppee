import React from 'react';


function Footer() {
    return (
        
        <div className="footer">
            <div className="grid wide">
                <div className="row">
                    <div className="col l-2-5 c-4 ">
                        <h3 className="footer-heading">CHĂM SÓC KHÁCH HÀNG</h3>
                        <ul className="footer-list">
                            <li className="footer-list-item">
                                <a href="/" className="footer-link">Trung tâm trợ giúp</a>
                            </li>
                            <li className="footer-list-item">
                                <a href="/" className="footer-link">Hướng dẫn thanh toán</a>
                            </li>
                            <li className="footer-list-item">
                                <a href="/" className="footer-link">Chính sách bảo hành</a>
                            </li>
                        </ul>
                        <h3 className="footer-heading">THEO DÕI CHUNG TÔI TRÊN</h3>
                        <ul className="footer-list">
                            <li className="footer-list-item">
                                <i className="footer-download-icon fab fa-facebook"></i>
                                <a href="/" className="footer-link">Facebook</a>
                            </li>
                            <li className="footer-list-item">
                                <i className="footer-download-icon fab fa-instagram-square"></i>
                                <a href="/" className="footer-link">Instagram</a>
                            </li>
                            <li className="footer-list-item">
                                <i className="footer-download-icon fab fa-linkedin"></i>
                                <a href="/" className="footer-link">LinkedIn</a>
                            </li>                          
                        </ul>
                    </div>
                    <div className="col l-2-5 c-4">
                        <h3 className="footer-heading">GIỚI THIỆU</h3>
                        <ul className="footer-list">
                            <li className="footer-list-item">
                                <a href="/" className="footer-link">Tuyển dụng</a>
                            </li>
                            <li className="footer-list-item">
                                <a href="/" className="footer-link">Điều khoản</a>
                            </li>
                            <li className="footer-list-item">
                                <a href="/" className="footer-link">Chính hãng</a>
                            </li>                          
                        </ul>
                        <h3 className="footer-heading">TẢI ỨNG DỤNG SHOPPE NGAY THÔI</h3>
                        <img src="./assets/img/download.jpg" alt="" className="footer-download-img" />
                    </div>
                    <div className="col l-2-5 c-4">
                        <ul className="footer-list">
                            <li className="footer-list-item">
                                <h3 href="/" className="footer-heading">THANH TOÁN</h3>
                                <img src="./assets/img/thanh-toan.jpg" alt="" className="footer-pay-img" />
                            </li>
                            <li className="footer-list-item">
                                <h3 href="/" className="footer-heading">ĐƠN VỊ VẬN CHUYỂN</h3>
                                <img src="./assets/img/van-chuyen.jpg" alt="" className="footer-transport" />
                            </li>
                                                
                        </ul>
                    </div>                
                </div>
            </div>
            <span className="footer-bottom">
                © 2021 Shopee. Tất cả các quyền được bảo lưu.
            </span>
        </div>
    )
}

export default Footer
