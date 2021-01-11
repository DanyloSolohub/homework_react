import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './BodyCss.css'
import {useDispatch, useSelector} from "react-redux";



export default function Commodity(props)  {

const {wishlist} = useSelector(({wishlist:{wishlist}})=>({wishlist}))

    const dispatch = useDispatch()

    const isAddedtoWishlist =  (!!wishlist.find(({id})=> id === props.data.id))

    const addToWishlist = (data) =>{
       dispatch({type:'WISHLIST_ADD',payload:data})
         dispatch({type:'WISHLIST_SUM',payload:data})
    }

return(



                <div className={'cards'}>

                    <div className={'card_body'}>
                       <div className={'img_size'}> <img className={'img_commodity'}  src={props.data.url} alt={props.data.name}/>
                           <i style={{float:'right', fontSize:'25px',color: isAddedtoWishlist? 'red':'green'}}  onClick={()=>addToWishlist(props.data)} className="fas fa-heart"> </i>
                       </div>
                        <br/>
                        <span className={'nameOfCommodity'}> <a href="#">Крісло для геймерів <br/> Hator sport light  </a>
                             </span> <br/>
                        <span className={'price'}>{props.data.price} $</span>
                        <span className={'price'} style={{fontSize:'13px'}}> Закінчується</span>
                    </div>






        </div>
      );
}
