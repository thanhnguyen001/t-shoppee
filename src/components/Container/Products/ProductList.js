/* eslint-disable array-callback-return */
import React, { useRef, useState, useEffect } from 'react'
import axiosClient from '../../../api/callApi';
import Category from '../Category/Category';

const Products = React.lazy(() => import('./Products'));

function ProductList({ type }) {
    let count = 1;
    // console.log(type)
    const carousel = useRef(null);
    const wrapSlide = useRef(null);

    // const [slider, setSlider] = useState([]);
    // const [dots, setDots] = useState([]);
    const [carousels, setCarousels] = useState([]);

    //Fetch img slide
    useEffect(() => {
        const fetchCarousels = async () => {
            try {
                const response = await axiosClient.get('/img-slide');
                if (!response[type]) {
                    // eslint-disable-next-line react-hooks/exhaustive-deps
                    type = "Thời-Trang-Nam";
                }
                setCarousels(response[type]);

            } catch (error) {
                console.log(error);
            }
        }

        fetchCarousels();
    }, [type])

    // Load carousel item and add transition 
    useEffect(() => {
        // const slideItemElements = document.querySelectorAll('.carousel-item');
        // const dotsE = document.querySelectorAll('.change-slide');
        // setDots(dotsE);
        // setSlider(slideItemElements);
        if (carousel.current) {
            // console.log([wrapSlide.current]);
            if (wrapSlide.current) {
                setTimeout(() => {
                    carousel.current.style.transform = `translateX(${-wrapSlide.current.clientWidth}px)`;
                }, 200)
            }
            carousel.current.style.transition = `all 0.7s ease-in-out`;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    setInterval(() => handleOnClick(0), 4000);
    
    const handleOnClick = async (temp) => {
        const dotsE = document.querySelectorAll('.change-slide');
        const slider = document.querySelectorAll('.carousel-item');
        // console.log(slider);
        if (carousel.current === null) return;
        if (temp === 0) {
            if (count >= slider.length - 1) return;
            count++;
            // console.log(count);
            // console.log(slider[count])
            carousel.current.style.transition = `all 0.7s ease-in-out`;
            carousel.current.addEventListener('transitionend', () => {
                if (slider[count].id === 'firstClone') {
                    carousel.current.style.transition = 'none';
                    // console.log('ok');
                    // console.log(count)
                    count = slider.length - count;
                    carousel.current.style.transform = `translateX(${-slider[0].clientWidth * count}px)`;
                    for (let i = 0; i < dotsE.length; i++) {
                        if (i === count - 1) {
                            dotsE[i].classList.add('active');
                        }
                        else dotsE[i].classList.remove('active');
                    }
                    return;
                }
            })
        } else if (temp === -1) {
            if (count <= 0) return;
            count--;
            carousel.current.style.transition = `all 0.7s ease-in-out`;
            carousel.current.addEventListener('transitionend', () => {
                if (slider[count].id === 'lastClone') {
                    carousel.current.style.transition = 'none';
                    count = slider.length - 2;
                    carousel.current.style.transform = `translateX(${-slider[0].clientWidth * count}px)`;
                    for (let i = 0; i < dotsE.length; i++) {
                        if (i === count - 1) {
                            dotsE[i].classList.add('active');
                        }
                        else dotsE[i].classList.remove('active');
                    }
                    return;
                }
            })

        } else {
            count = temp;
            carousel.current.style.transition = `all 0.7s ease-in-out`;
            carousel.current.style.transform = `translateX(${-slider[0].clientWidth * count}px)`;
        }

        // console.log(count)
        if (count >= 0 && count < slider.length) {
            carousel.current.style.transform = `translateX(${-slider[0].clientWidth * count}px)`;
        }
        for (let i = 0; i < dotsE.length; i++) {
            if (i === count - 1) {
                dotsE[i].classList.add('active');
            }
            else dotsE[i].classList.remove('active');
        }
    }

    const showCarousels = () => {

        if (carousels.length > 0) {
            let result = carousels.map((item, index) => {
                return <li className="products-type carousel-item" key={index + 1} style={{ width: `${(1 / (carousels.length + 2)) * 100}%` }} >
                    <div className="products-type carousel-item-wrap">
                        <a className="products-type carousel-item-inner" href="/">
                            <div className="products-type carousel-item-link" style={{ backgroundImage: `url(${item})` }}></div>
                        </a>
                    </div>
                </li>
            })

            result.unshift(carousels.map((item, index) => {
                if (index === carousels.length - 1) {
                    return <li className="products-type carousel-item" id="lastClone" key={0} style={{ width: `${(1 / (carousels.length + 2)) * 100}%` }} >
                        <div className="products-type carousel-item-wrap">
                            <a className="products-type carousel-item-inner" href="/">
                                <div className="products-type carousel-item-link" style={{ backgroundImage: `url(${item})` }}></div>
                            </a>
                        </div>
                    </li>
                }
            }))

            result.push(carousels.map((item, index) => {
                if (index === 0) {
                    return <li className="products-type carousel-item" id="firstClone" key={carousels.length + 1} style={{ width: `${(1 / (carousels.length + 2)) * 100}%` }} >
                        <div className="products-type carousel-item-wrap">
                            <a className="products-type carousel-item-inner" href="/">
                                <div className="products-type carousel-item-link" style={{ backgroundImage: `url(${item})` }}></div>
                            </a>
                        </div>
                    </li>
                }
            }))

            return result;
        }
    }

    const showDotSlide = (carousels) => {
        if (carousels.length > 0) {

            return carousels.map((item, index) => {
                return <div key={index} className={`products-type change-slide ${index === 0 && 'active'}`}
                    onClick={() => handleOnClick(index + 1)}>
                </div>
            })
        }
    }

    return (
        <div>
            <div className="row sm-gutter app__content">

                <div className="products-type banner">
                    <div className="products-type banner-carousel">
                        <div className="products-type carousel-wrap" ref={wrapSlide}>
                            <ul className='products-type carousel-slide' ref={carousel} style={{ width: `${(carousels.length + 2) * 100}%` }}>

                                {showCarousels(carousels)}

                            </ul>

                            <div className="products-type label-banner">

                                {showDotSlide(carousels)}

                            </div>

                            <button className='carousel-next' onClick={() => handleOnClick(0)}>
                                <i className="products-type fas fa-chevron-right" ></i>
                            </button>
                            <button className='carousel-prev' onClick={() => handleOnClick(-1)}>
                                <i className="products-type fas fa-chevron-left"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="products-type products-type-products">
                    <Category type={type} />
                    <div className="products-type col l-10 m-12 c-12">
                        <Products type={type} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProductList;
