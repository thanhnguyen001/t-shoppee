/* eslint-disable array-callback-return */
import React, { useRef, useState, useEffect } from 'react'
import axiosClient from '../../../api/callApi';
import useDimensionWindow from '../../../hooks/useDimensionWindow';
import Category from '../Category/Category';

const Products = React.lazy(() => import('./Products'));

function ProductList({ type }) {
    const count = useRef(1);
    const moveX = useRef(0);

    // console.log(type)
    const carousel = useRef(null);
    const wrapSlide = useRef(null);

    // const [slider, setSlider] = useState([]);
    // const [dots, setDots] = useState([]);
    const [carousels, setCarousels] = useState([]);

    const { width: windowWidth } = useDimensionWindow();

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
                const wrapCarousel = document.querySelector(".carousel-wrap");
                const carouselSlide = document.querySelector(".carousel-slide");
        
                if (carouselSlide && wrapCarousel) {
                    // console.log(wrapCarousel.clientWidth);
                    carouselSlide.style.transform = `translateX(${-wrapCarousel.clientWidth * count.current}px)`;
                    carouselSlide.style.transition = `all 0.7s ease-in-out`;
                    moveX.current = wrapCarousel.clientWidth * count.current;
                }

            } catch (error) {
                console.log(error);
            }
        }

        fetchCarousels();
    }, [type])

    // Load carousel item and add transition 

    useEffect(() => {
        if (carousel.current && wrapSlide.current) {
            // console.log(wrapSlide.current.clientWidth);
            carousel.current.style.transform = `translateX(${-wrapSlide.current.clientWidth * count.current}px)`;
            carousel.current.style.transition = `all 0.7s ease-in-out`;
            moveX.current = wrapSlide.current.clientWidth * count.current;
        }
    }, [windowWidth])

    // const [isFirstChange, setFirst] = useState(true);

    const time = useRef(null);

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

        return () => {
            resetAutoChange();
            clearTimeout(time.current)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleOnClick = async (temp) => {
        resetAutoChange();
        // setFirst(false);
        time.current = setTimeout(() => {
            handleOnClick(0);
        }, 4000)
        const dotsE = document.querySelectorAll('.change-slide');
        const slider = document.querySelectorAll('.carousel-item');
        // console.log(slider);
        if (carousel.current === null) return;
        if (carousel.current) {
            if (temp === 0) {
                count.current = count.current + 1;
            } else if (temp === -1) {
                count.current = count.current - 1;
            } else {
                count.current = temp;
            }

            if (count.current > slider.length - 1) {
                count.current--;
                return;
            }
            if (count.current < 0) {
                count.current++;
                return;
            }

            carousel.current.style.transform = `translateX(${-slider[0].clientWidth * count.current}px)`;
            carousel.current.style.transition = `all 0.7s ease-in-out`;
            carousel.current.addEventListener('transitionend', () => {
                if (slider[count.current].id === 'firstClone') {
                    count.current = 1;
                    carousel.current.style.transform = `translateX(${-slider[0].clientWidth * count.current}px)`;
                    carousel.current.style.transition = 'none';
                    dotsE[count.current - 1].classList.add('active');
                }

                if (slider[count.current].id === 'lastClone') {
                    count.current = slider.length - 2;
                    carousel.current.style.transform = `translateX(${-slider[0].clientWidth * count.current}px)`;
                    carousel.current.style.transition = 'none';
                    dotsE[count.current - 1].classList.add('active');
                }

            })
        }
        for (let i = 0; i < dotsE.length; i++) {
            if (i === count.current - 1) {
                dotsE[i].classList.add('active');
            }
            else dotsE[i].classList.remove('active');
        }

    }

    const showCarousels = () => {

        if (carousels.length > 0) {
            let result = carousels.map((item, index) => {
                return <li className="products-type carousel-item" key={index + 1} >
                    <div className="products-type carousel-item-wrap">
                        <a className="products-type carousel-item-inner" href="/">
                            {/* <div className="products-type carousel-item-link" style={{ backgroundImage: `url(${item})` }}></div> */}
                            <img className="products-type carousel-item-link" src={item} alt="img" />
                        </a>
                    </div>
                </li>
            })

            result.unshift(carousels.map((item, index) => {
                if (index === carousels.length - 1) {
                    return <li className="products-type carousel-item" id="lastClone" key={0} >
                        <div className="products-type carousel-item-wrap">
                            <a className="products-type carousel-item-inner" href="/">
                                <img className="products-type carousel-item-link" src={item} alt="img" />
                                {/* <div className="products-type carousel-item-link" style={{ backgroundImage: `url(${item})` }}></div> */}
                            </a>
                        </div>
                    </li>
                }
            }))

            result.push(carousels.map((item, index) => {
                if (index === 0) {
                    return <li className="products-type carousel-item" id="firstClone" key={carousels.length + 1} >
                        <div className="products-type carousel-item-wrap">
                            <a className="products-type carousel-item-inner" href="/">
                                <img className="products-type carousel-item-link" src={item} alt="img" />
                                {/* <div className="products-type carousel-item-link" style={{ backgroundImage: `url(${item})` }}></div> */}
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

    // Handle Touch on mobile
    const startPoint = useRef(0);
    const space = useRef(0);
    const prevSpace = useRef(0);
    const direct = useRef("left");
    const prevDirect = useRef("left");

    const handleTouchStart = (e) => {
        startPoint.current = e.touches[0].pageX;
    }
    const handleTouchesMove = (e) => {
        if (windowWidth > 600) return;
        space.current = e.touches[0].pageX - startPoint.current;
        space.current >= prevSpace.current ? direct.current = "right" : direct.current = "left";
        console.log(direct.current)
        prevSpace.current = space.current;
    }
    const handleTouchEnd = () => {

    }

    return (
        <div>
            <div className="row sm-gutter app__content">

                <div className="products-type banner">
                    <div className="products-type banner-carousel">
                        <div className="products-type carousel-wrap" ref={wrapSlide}>
                            <ul className='products-type carousel-slide' ref={carousel}
                                onTouchStart={handleTouchStart}
                                onTouchMove={handleTouchesMove}
                                onTouchEnd={handleTouchEnd}
                            >
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
