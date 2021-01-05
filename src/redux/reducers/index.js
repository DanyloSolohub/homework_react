import {combineReducers} from "redux";
import products from './products-reducer'
import cart from './cart-reducer'
import wishlist from './wishlist-reducer'
import sumC from './cart-reducer'
import sumW from './wishlist-reducer'

export const reducer = combineReducers({
    products,
    cart,
    wishlist,
    sumW,
    sumC
})