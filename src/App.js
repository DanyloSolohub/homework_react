import React, {useEffect} from 'react';
import {useDispatch,useSelector} from "react-redux";
import Products from './redux/components/Products'
export default function App()  {

    const dispatch = useDispatch()


 const {products,cart,wishlist,sumCart,sumWishlist} = useSelector(({products:{products},cart:{cart},wishlist:{wishlist},sumCart:{sumCart},sumWishlist:{sumWishlist}})=>({products,cart,wishlist,sumCart,sumWishlist}))
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products').then(value => value.json()).then(value => dispatch({type:'PRODUCTS_SET',payload:value}))
    },[])



    return(
        <div>
                <div style={{background:'royalblue',width:'100%',height:'200px',display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
                    <span style={{fontSize:'30px', fontWeight:'bold'}} title={ `cost:${sumCart}  `} >Cart:{cart.length}</span>
                    <span style={{fontSize:'30px', fontWeight:'bold'}} title={ `cost:${sumWishlist}  `} >Wishlist:{wishlist.length}</span>
                </div>

            <div style={{display:'flex',alignItems:"center",justifyContent:'center',flexDirection:'column'}}>
           <div style={{background:'aliceblue'}}>
            {
                products.map(product=><Products product={product} sumCart={sumCart} sumWishlist={sumWishlist} cart={cart} wishlist={wishlist}  key={product.id}  />)
            }
            </div>
            </div>

        </div>
      );
}
