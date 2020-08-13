import { combineReducers } from 'redux';

const INITIAL_STATE = {
    city: [],
    cart: [],
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
                if(prod.name == product.name){
                    prod.count++      
                    canPush = false   
                }
            })
            if(canPush){
                product.count = 1
                state.cart.push(product)
            }

            return state
        case 'DELETE_FROM_CART':
            let arr = state.cart.filter((el, index) => index != action.value)
            let co = 0
            arr.forEach(el => {
                co += el.count
            })
            state.cartCount = co
            state.cart = arr
            return state    
        case 'DECREASE_COUNT':
            if(state.cart[action.value].count > 1){
                state.cart[action.value].count--
            }
            return state    
        case 'INCREASE_COUNT':
            state.cart[action.value].count++
            return state    
        case 'CLEAR_STATE':
            state.cartCount = 0
            state.cart = []
            return state   
        case 'CITY_HANDLE_CLICK':
            state.city.push(action.value)     
            return state
        default:
            return state
    }
};

export default combineReducers({
  data: appMainReducer,
});