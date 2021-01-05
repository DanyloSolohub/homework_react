import {useDispatch} from "react-redux";


export  function Product(props)  {
    const dispatch = useDispatch()

    const isAddedtoCart = (!!props.cart.find(({id})=> id === props.product.id))
    const isAddedtoWishlist = (!!props.wishlist.find(({id})=> id === props.product.id))


    const addToWishlist = (product)=> {
         dispatch({type:'WISHLIST_ADD',payload:product})
         dispatch({type:'WISHLIST_SUM',payload:product})

        }
        const addToCart = (product)=> {
        dispatch({type:'CART_ADD',payload:product})
        dispatch({type:'CART_SUM',payload:product})
        }


return(
        <div key={props.product.id}>
            {props.product.id}. {props.product.title}  <h2> {props.product.price}  </h2>
            <button style={{background: isAddedtoWishlist? 'red':'green'}} onClick={()=> addToWishlist(props.product)} >{isAddedtoWishlist? 'remove from wishlist' :'Add to wishlist'}</button>
            <button style={{background: isAddedtoCart? 'red':'green'}} onClick={()=> addToCart(props.product)}>{isAddedtoCart ? 'remove from cart' : 'Add to cart'}</button> <hr/> </div>
)

}




