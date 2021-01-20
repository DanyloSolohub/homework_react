
const initialState={
    cart:[],
    sumCart:null
}

const reducer = (state=initialState,action)=>{
    switch (action.type){
        case 'ADD_TO_CART':{
            const updatedCart = state.cart.filter(value => value.id !== action.payload.id);
            if (updatedCart.length === state.cart.length){
                updatedCart.push(action.payload)
            }

            return{
                ...state,
                cart: updatedCart
            }
        }
        case 'SUM_CART':{
             const isAddedtoCart = (!!state.cart.find(({id})=> id === action.payload.id))
            if (isAddedtoCart){
                state.sumCart = state.sumCart + action.payload.price
            }else{
                state.sumCart = state.sumCart - action.payload.price
            }
            return{
                ...state,
                sumCart: state.sumCart
            }
        }
        default:{
            return state
        }
    }
}


export default reducer;