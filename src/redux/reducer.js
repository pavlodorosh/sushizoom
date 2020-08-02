import { combineReducers } from 'redux';
import phones from '../data/phones'

const INITIAL_STATE = {
    city: '',
    cart: [],
    cartCount: 0,
    phone: null  
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
        case 'CITY_HANDLE_CLICK':
            state.city = action.value
            phones.forEach(el => {
                if(el.city == action.value){
                    state.phone = el.phone
                }
            })
            return state
        default:
            return state
    }
};

export default combineReducers({
  data: appMainReducer,
});