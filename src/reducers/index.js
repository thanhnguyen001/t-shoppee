import { combineReducers } from "redux";
import user from './userReducer';
import cart from './cart';

const myReducer = combineReducers({
    user,
    cart
});

export default myReducer;