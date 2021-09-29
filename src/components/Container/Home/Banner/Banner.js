/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from 'react';
import './Banner.scss';

function Banner() {

    let count = useRef(1)
    const carousel = useRef(null);

    const [slider, setSlider] = useState([]);
    const [dots, setDots] = useState([]);

    useEffect(() => {
        const slideItemElements = document.querySelectorAll('.carousel-item');
        const dotsE = document.querySelectorAll('.change-slide');
        setDots(dotsE);
        setSlider(slideItemElements);
        if (carousel.current) {
            carousel.current.style.transform = `translateX(${-slideItemElements[0].clientWidth * count.current}px)`;
            carousel.current.style.transition = `all 0.7s ease-in-out`;
            // dotsE[count - 1].style.backgroundColor = 'red';
        }
        // console.log('start')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const time = useRef(setTimeout(() => {
        handleOnClick(0);
    }, 4000));

    function resetAutoChange() {
        if (time.current) {
            clearTimeout(time.current)
        }
    }

    useEffect(() => {
        resetAutoChange();

        time.current = setTimeout(() => {
            handleOnClick(0);
        }, 4000)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleOnClick = (temp) => {
        resetAutoChange();

        if (carousel.current) {
            if (temp === 0) {
                if (count.current >= slider.length - 1) return;
                count.current++;
                carousel.current.style.transition = `all 0.7s ease-in-out`;
                carousel.current.addEventListener('transitionend', () => {
                    if (slider[count.current].id === 'firstClone') {
                        count.current = slider.length - count.current;
                        carousel.current.style.transform = `translateX(${-slider[0].clientWidth * count.current}px)`;
                        carousel.current.style.transition = 'none';
                        dots[count.current - 1].classList.add('active');
                    }
                })
            } else if (temp === -1) {
                if (count.current <= 0) return;
                count.current--;
                carousel.current.style.transition = `all 0.7s ease-in-out`;
                carousel.current.addEventListener('transitionend', () => {
                    if (slider[count.current].id === 'lastClone') {
                        count.current = slider.length - 2;
                        carousel.current.style.transform = `translateX(${-slider[0].clientWidth * count.current}px)`;
                        carousel.current.style.transition = 'none';
                        dots[count.current - 1].classList.add('active');
                    }
                })

            } else {
                count.current = temp;
                carousel.current.style.transition = `all 0.7s ease-in-out`;
                carousel.current.style.transform = `translateX(${-slider[0].clientWidth * count.current}px)`;
            }
            if (count.current >= 0 && count.current < slider.length) {
                carousel.current.style.transform = `translateX(${-slider[0].clientWidth * count.current}px)`;
            }
        }
        for (let i = 0; i < dots.length; i++) {
            if (i === count.current - 1) {
                dots[i].classList.add('active');
            }
            else dots[i].classList.remove('active');
        }
        time.current = setTimeout(() => {
            handleOnClick(0)
        }, 4000)
    }


    return (
        <div className="banner">
            <div className="banner-carousel">
                <div className="carousel-wrap">
                    <ul className='carousel-slide' ref={carousel}>

                        <li className="carousel-item" id="lastClone">
                            <div className="carousel-item-wrap">
                                <a className="carousel-item-inner" href="/">
                                    <div className="carousel-item-link" style={{ backgroundImage: 'url("https://cf.shopee.vn/file/a14c5672c0c24c11a637ff05c4b730e7_xxhdpi")' }}></div>
                                </a>
                            </div>
                        </li>

                        <li className="carousel-item">
                            <div className="carousel-item-wrap">
                                <a className="carousel-item-inner" href="/">
                                    <div className="carousel-item-link" style={{ backgroundImage: 'url(https://cf.shopee.vn/file/a83c2b8e5838751f4f6cdd6db2c4dc99_xxhdpi)' }}></div>
                                </a>
                            </div>
                        </li>
                        <li className="carousel-item">
                            <div className="carousel-item-wrap">
                                <a className="carousel-item-inner" href="/">
                                    <div className="carousel-item-link" style={{ backgroundImage: 'url("https://cf.shopee.vn/file/cd0433cd0491419a6032b52738867d72_xxhdpi")' }}></div>
                                </a>
                            </div>
                        </li>
                        <li className="carousel-item">
                            <div className="carousel-item-wrap">
                                <a className="carousel-item-inner" href="/">
                                    <div className="carousel-item-link" style={{ backgroundImage: 'url("https://cf.shopee.vn/file/2788006ced96bded474eb2c5a7ccd660_xxhdpi")' }}></div>
                                </a>
                            </div>
                        </li>
                        <li className="carousel-item">
                            <div className="carousel-item-wrap">
                                <a className="carousel-item-inner" href="/">
                                    <div className="carousel-item-link" style={{ backgroundImage: 'url("https://cf.shopee.vn/file/172a3ec020e8638394457ddc57e973a6_xxhdpi")' }}></div>
                                </a>
                            </div>
                        </li>
                        <li className="carousel-item">
                            <div className="carousel-item-wrap">
                                <a className="carousel-item-inner" href="/">
                                    <div className="carousel-item-link" style={{ backgroundImage: 'url("https://cf.shopee.vn/file/a14c5672c0c24c11a637ff05c4b730e7_xxhdpi")' }}></div>
                                </a>
                            </div>
                        </li>

                        <li className="carousel-item" id="firstClone">
                            <div className="carousel-item-wrap">
                                <a className="carousel-item-inner" href="/">
                                    <div className="carousel-item-link" style={{ backgroundImage: 'url(https://cf.shopee.vn/file/a83c2b8e5838751f4f6cdd6db2c4dc99_xxhdpi)' }}></div>
                                </a>
                            </div>
                        </li>

                    </ul>

                    <div className="label-banner">
                        <div className="change-slide active" onClick={() => handleOnClick(1)}></div>
                        <div className="change-slide" onClick={() => handleOnClick(2)}></div>
                        <div className="change-slide" onClick={() => handleOnClick(3)}></div>
                        <div className="change-slide" onClick={() => handleOnClick(4)}></div>
                        <div className="change-slide" onClick={() => handleOnClick(5)}></div>
                    </div>


                    <button className='carousel-next' onClick={() => handleOnClick(0)}>
                        <i className="fas fa-chevron-right" ></i>
                    </button>
                    <button className='carousel-prev' onClick={() => handleOnClick(-1)}>
                        <i className="fas fa-chevron-left"></i>
                    </button>
                </div>
            </div>
            <div className="banner-pattern">
                <div className="pattern-wrap">
                    <div className="pattern-item">
                        <a className="pattern-item-link">
                            <div className="pattern-item-inner" style={{ backgroundImage: 'url("https://cf.shopee.vn/file/3f131176821170eb2ea6e9168fbde375_xhdpi")' }}></div>
                        </a>
                    </div>
                    <div className="pattern-item">
                        <a className="pattern-item-link">
                            <div className="pattern-item-inner" style={{ backgroundImage: 'url("https://cf.shopee.vn/file/0d162e8c5a8f6fd5dbbc3152b081985f_xhdpi")' }}></div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
