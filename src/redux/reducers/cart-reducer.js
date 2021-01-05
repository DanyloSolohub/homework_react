const initialState ={
    cart:[],
    sumC:0
}


const reducer = (state=initialState,action) =>{
    switch (action.type){
        case 'CART_ADD':{
            const updatedCart = state.cart.filter(value => value.id !== action.payload.id);
            if (updatedCart.length === state.cart.length){
                updatedCart.push(action.payload)
            }
            return {...state, cart: updatedCart}
        }
        case 'CART_SUM':{
            const isAddedtoCart = (!!state.cart.find(({id})=> id === action.payload.id))
            if (isAddedtoCart){
                state.sumC = state.sumC + action.payload.price
            }else{
                state.sumC = state.sumC - action.payload.price
            }
            console.log(state.sumC)
            return {
                ...state,
            sumC: state.sumC
            }
        }

        default:{
            return state
        }
    }
}



export default reducer;