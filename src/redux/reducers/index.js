import {combineReducers} from "redux";
import wishlist from './wishlist'
import sumW from './wishlist'

export const reducer = combineReducers({
    wishlist,
    sumW
})