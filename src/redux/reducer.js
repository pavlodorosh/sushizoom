import { combineReducers } from 'redux';

const INITIAL_STATE = {
    city: [],
    cart: [],
    action_cart: [],
    cartCount: 0,
    phone: null,
    priceKoefficient: 1
};

const appMainReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            state.cartCount++
            let product = action.value
            let canPush = true
            state.cart.forEach(prod => {
                if (prod.name == product.name) {
                    prod.count++
                    canPush = false
                }
            })
            if (canPush) {
                product.count = 1
                state.cart.push(product)
            }

            return state
        case 'ADD_TO_ACTION_CART':
            state.cartCount++
            let aproduct = action.value
            let acanPush = true
            state.action_cart.forEach(prod => {
                if (prod.name == aproduct.name) {
                    prod.count++
                    acanPush = false
                }
            })
            if (acanPush) {
                aproduct.count = 1
                state.action_cart.push(aproduct)
            }

            return state             
        case 'ACTION_DELETE_FROM_CART':
            let action_arr = state.action_cart.filter((el, index) => index != action.value)
            let action_co = 0
            action_arr.forEach(el => {
                action_co += el.count
            })
            console.log('a' + action_co);
            state.cartCount = action_co
            state.action_cart = action_arr
            return state   
        case 'DELETE_FROM_CART':
            let arr = state.cart.filter((el, index) => index != action.value)
            let co = 0
            arr.forEach(el => {
                co += el.count
            })
            console.log('c' + co);
            state.cartCount = co
            state.cart = arr
            return state
        case 'ACTION_DECREASE_COUNT':
            if (state.action_cart[action.value].count > 1) {
                state.action_cart[action.value].count--
            }
            state.cartCount--
            return state
        case 'ACTION_INCREASE_COUNT':
            state.action_cart[action.value].count++
            state.cartCount++
            return state
        case 'DECREASE_COUNT':
            if (state.cart[action.value].count > 1) {
                state.cart[action.value].count--
            }
            state.cartCount--
            return state
        case 'INCREASE_COUNT':
            state.cart[action.value].count++
            state.cartCount++
            return state
        case 'CLEAR_STATE':
            state.cartCount = 0
            state.cart = []
            return state
        case 'CLEAR_ACTION_CART':
            state.action_cart = []
            state.cartCount = state.cart.length
            return state
        case 'CITY_HANDLE_CLICK':
            state.city = [action.value]
            state.action_cart = []
            state.count = 0
            let count = 0
            state.cart.forEach(el => {
                count += el.count
            })
            state.cartCount = count
            return state
        default:
            return state
    }
};

export default combineReducers({
    data: appMainReducer,
});