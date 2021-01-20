import {useDispatch} from "react-redux";


export default function Products(props)  {
const dispatch = useDispatch()

    const AddToCart = (product)=>{
        dispatch({type:'ADD_TO_CART',payload:product})
        dispatch({type:'SUM_CART',payload:product})
    }
    const AddToWishlist = (product)=>{
        dispatch({type:'ADD_TO_WISHLIST',payload:product})
        dispatch({type:'SUM_WISHLIST',payload:product})

    }
        const isAddedToCart = (!!props.cart.find(({id})=> id === props.product.id))
        const isAddedToWishliist= (!!props.wishlist.find(({id})=>id === props.product.id))

    return(
        <div>
            {props.product.id}. {props.product.title}:  <span style={{fontWeight:'bold'}}>{props.product.price} </span>  <br/>
            <button style={{background: isAddedToWishliist? 'orange': 'green' }} onClick={()=>AddToWishlist(props.product)} >{isAddedToWishliist? 'remove from wishlist' : 'Add to wishlist'}</button>
            <button style={{background: isAddedToCart? 'red':'green' }} onClick={()=>AddToCart(props.product)} >{isAddedToCart? 'remove from cart': 'Add to cart'} </button>
            <hr/>
        </div>
      );
}
