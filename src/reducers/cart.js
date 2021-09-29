const initialCart = JSON.parse(localStorage.getItem('CART')) || [];

const cart = (state = initialCart, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            let newState = [...action.payload];
            localStorage.setItem('CART', JSON.stringify(newState));
            return newState;
        case 'ADD_NUM_TO_CART':
            let newState1 = [...state];
            // console.log(action.payload)
            newState1.forEach((product, index) => {
                if (product.id === action.payload.id && product.type === action.payload.type) {
                    product.quantity = action.payload.quantity
                };
            });
            localStorage.setItem('CART', JSON.stringify(newState1));
            return newState1;
        case 'DELETE_CART':
            let newState2 = [...state];
            // console.log(action.payload)
            newState2.forEach((product, index) => {
                if (product.id === action.payload.id && product.type === action.payload.type) {
                    newState2.splice(index, 1);
                };
            });
            localStorage.setItem('CART', JSON.stringify(newState2));
            return newState2;
        default:
            return state;
    }
}

export default cart;
