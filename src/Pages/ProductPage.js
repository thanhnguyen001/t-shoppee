import React from 'react'
import { Fragment } from 'react';
import Product from '../components/Container/Products/Product'
import Header from '../components/Header/Header';

function ProductPage() {

    return (
        <Fragment>
            <Header data={'product-page'} />
            <div className="app__container" style={{position: 'relative'}}>
                <div className="grid wide">
                    <div className="row sm-gutter app__content">
                        <div className="product-content" style={{ width: '100%' }}>
                            <Product />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ProductPage;
