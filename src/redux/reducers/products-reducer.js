
const initialState ={
    products:[]
}


const reducer = (state=initialState,action) =>{
    switch (action.type){
        case 'PRODUCTS_SET':{
            return {...state, products: action.payload}
        }
        default:{
            return state
        }
    }
}



export default reducer;








