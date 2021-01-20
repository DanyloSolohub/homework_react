
const initialState={
    wishlist:[],
    sumWishlist:null
}

const reducer = (state=initialState,action)=>{
    switch (action.type){
        case 'ADD_TO_WISHLIST':{
        const updatedCart = state.wishlist.filter(value => value.id !== action.payload.id )
            if (updatedCart.length === state.wishlist.length ){
                updatedCart.push(action.payload)
            }
            return{
                ...state,
                wishlist: updatedCart
            }
        }
        case 'SUM_WISHLIST':{
             const isAddedtoWishlist = (!!state.wishlist.find(({id})=> id === action.payload.id))
            if (isAddedtoWishlist){
                state.sumWishlist = state.sumWishlist + action.payload.price
            }else{
                state.sumWishlist = state.sumWishlist - action.payload.price
            }
            return{
                ...state,
                sumWishlist: state.sumWishlist
            }
        }
        default:{
            return state
        }
    }
}


export default reducer;