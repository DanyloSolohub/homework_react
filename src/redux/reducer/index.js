import {combineReducers} from "redux";
import products from "./products";
import cart from "./cart";
import sumCart from "./cart";
import wishlist from "./wishlist";
import sumWishlist from "./wishlist";

export const reducer = combineReducers({
    products,
    cart,
    wishlist,
    sumCart,
    sumWishlist
})