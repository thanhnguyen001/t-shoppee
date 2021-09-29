

export const userSignIn = (user) => {
    return {
        type: 'IS_SIGN_IN',
        payload: user
    }
}

export const userLogOut = () => {
    return {
        type: 'USER_LOG_OUT'
    }
}
// Cart ACtions
export const addToCart = (cart) => {
    return {
        type: 'ADD_TO_CART',
        payload: cart
    }
};

export const addNumToCart = (info) => {
    return {
        type: 'ADD_NUM_TO_CART',
        payload: info
    }
}

export const deleteCartItem = (data) => {
    return {
        type: 'DELETE_CART',
        payload: data
    }
}
