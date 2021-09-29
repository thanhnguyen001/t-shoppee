import React from 'react'
import { Fragment } from 'react';
import Banner from '../components/Container/Home/Banner/Banner';
import ListType from '../components/Container/Home/ListType/ListType';
import Slogan from '../components/Container/Home/Slogan/Slogan';
import Products from '../components/Container/Products/Products';
import Header from '../components/Header/Header';

function HomePage() {

    return (
        <Fragment>
            <Header />
            <div className="app__container">
                <div className="grid wide">
                    <div className="row sm-gutter app__content">
                        <Slogan />
                        <Banner />
                        <ListType />
                        <div className="products-suggest-today">
                            <div className="product-suggest-title-wrap">
                                <div className="product-suggest-title" >
                                    <div className="product-suggest-title-inner">GỢI Ý HÔM NAY</div>
                                    <div className="sale-now">
                                        <img src="https://cf.shopee.vn/file/cb7702bebc3ee2e6c8f3ce66d1d1864a" alt="sale" />
                                    </div>
                                </div>
                            </div>
                            <div className="col l-12 m-12 c-12 no-padding ">
                                <Products data={'suggestion'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default HomePage;
