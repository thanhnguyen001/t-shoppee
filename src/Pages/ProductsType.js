import React, { Suspense } from 'react'
import { Fragment } from 'react'
import './ProductsTypePage.scss';
import ProductList from '../components/Container/Products/ProductList';
import Header from '../components/Header/Header';
import { withRouter } from 'react-router-dom';


function ProductsType({ match }) {

    // console.log(match);
    return (
        <Fragment>
            <Header data={'products-type'}/>
            <Suspense fallback={<div>Loading...</div>}>
                <div className="app__container">
                    <div className="grid wide">
                        <ProductList type={match.params.type} />
                    </div>
                </div>
            </Suspense>
        </Fragment>
    )
}

export default withRouter(ProductsType);
