import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ProductPage from './Pages/ProductPage';
import ProductsType from './Pages/ProductsType';
import SignPage from './Pages/SignPage';
import CartPage from './Pages/CartPage';



const routers = [
    {
        exact: true,
        path: '/shop',
        component: HomePage 
    },
    {
        exact: true,
        path: '/shop/:type',
        component: ({ match }) => <ProductsType match={match}/>
    },
    {
        exact: true,
        path: '/product/:name/:id/:type',
        component: ({ match }) => <ProductPage match={match} />
    },
    {
        exact: true,
        path: '/sign:temp',
        component:({ match }) => <SignPage match={match} /> 
    },
    {
        exact: true,
        path: '/',
        component: HomePage 
    },
    {
        exact: true,
        path: '/cart',
        component: CartPage 
    },
]


function routes() {

    const renderRouter = (routers) => {

        return routers.map((route, index) =>
            <Route key={index} path={`${route.path}`} exact={route.exact}>
                {route.component}
            </Route>
        )
    }

    return (
        <Switch>
            {renderRouter(routers)}
        </Switch>
    );
}

export default routes;
