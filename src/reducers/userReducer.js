const initialState = JSON.parse(localStorage.getItem('USER_INFO')) || null;

const isSignedIn = (state = initialState, action) => {
    switch (action.type) {
        case 'IS_SIGN_IN':
            const newState = {
                ...state,
                user: action.payload
            }
            localStorage.setItem('USER_INFO', JSON.stringify(newState));
            return newState;
        case 'USER_LOG_OUT':
            localStorage.removeItem('USER_INFO');
            localStorage.removeItem('CART');
            return null
        default:
            return state
    }
}

export default isSignedIn;