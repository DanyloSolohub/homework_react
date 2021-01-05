import React, {useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux";
import './App.css'
import {Product} from './redux/components/Product'

export default function App()  {
    const {products,cart,wishlist,sumC,sumW} = useSelector(({products:{products},cart:{cart},wishlist:{wishlist},sumW:{sumW},sumC:{sumC}})=>({products,cart,wishlist,sumC,sumW}))

    const dispatch = useDispatch()

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products').then(value => value.json())
            .then(value => dispatch({type:'PRODUCTS_SET',payload:value}) )
    },[])



return(
        <div className={'main_div'}>
                       <div className={'sum_div'}>
               <div title={'Sum:' + sumW} >wishlist: {wishlist.length} </div>
               <div title={'Sum:' + sumC} >cart: {cart.length}</div>
            </div>
             <div className={'product_div'}>
                {
                    products.map(product => <Product product={product} cart={cart} wishlist={wishlist} key = {product.id}  />)

                }
                </div>
        </div>
      );
}
