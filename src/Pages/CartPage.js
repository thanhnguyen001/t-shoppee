import React, { Fragment } from 'react';
import Cart from '../components/Container/Cart/Cart';
import Header from '../components/Header/Header';

function CartPage() {
    return (
        <Fragment>
            <Header data={'cart-page'} />
            <div className="app__container">
                <div className="grid wide">
                    <div className="row sm-gutter app__content">
                        <Cart />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default CartPage;
