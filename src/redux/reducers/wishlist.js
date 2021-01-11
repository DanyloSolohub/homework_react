const initialState ={
    wishlist:[],
    sumW: 0
}


const reducer = (state=initialState,action) =>{

    switch (action.type){
        case 'WISHLIST_ADD':{
            const updatedWishlist = state.wishlist.filter(value => value.id !== action.payload.id);
            if (updatedWishlist.length === state.wishlist.length){
                updatedWishlist.push(action.payload)
            }

            return {...state, wishlist: updatedWishlist}
        }
        case 'WISHLIST_SUM':{
            const isAddedtoWishlist = (!!state.wishlist.find(({id})=> id === action.payload.id))
            if (isAddedtoWishlist){
                state.sumW = state.sumW + action.payload.price
            }else{
                state.sumW = state.sumW - action.payload.price
            }
            console.log(state.sumW)
            return{
                  ...state,
                sumW: state.sumW
            }
        }
        default:{
            return state
        }
    }
}



export default reducer;