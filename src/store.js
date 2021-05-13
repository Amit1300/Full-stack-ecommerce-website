import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {cartReducer} from './Reducer/cartReducer'
import {
    userLoginReducer,
    userRegisterReducer,
    userDetailsReducer,
    userUpdateProfileReducer
} from './Reducer/userReducer'
import { 
    productListReducer, 
    productDetailsReducer,
    productReviewCreateReducer
   

} from './Reducer/productReducer'


import { 
    orderCreateReducer,
    orderDetailsReducer,
    orderPayReducer,
    orderDeliverReducer
  
   

} from './Reducer/orderReducer'

const reducer=combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister:userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    createOrder:orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderDeliver:orderDeliverReducer,
    productReviewCreate:productReviewCreateReducer,
})


const cartItemsFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []


const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ?
    JSON.parse(localStorage.getItem('shippingAddress')) : {}


const intialState={
    cart: {
        cartItems:cartItemsFromStorage,
        shippingAddress: shippingAddressFromStorage,
       
      
    }  ,userLogin: { userInfo: userInfoFromStorage }

}

const middleware=[thunk]

const store=createStore(reducer,intialState,composeWithDevTools(applyMiddleware(...middleware)))


export default store