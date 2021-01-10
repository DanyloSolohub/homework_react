import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import './HeaderCss.css'


    export default function Header()  {
return(
    <div className="header">
        <div className="header-top">
            <span> <img src="https://i1.rozetka.ua/owoxads/9/9741.jpg" alt="Якісь люди і надпис"/> </span>
        </div>
        <div style={{background:'#122538'}} className="header_bottom">

            <div  className={'bottom_logo'}  >
             <div className={'header-topline'}>
                 <div  className={'header-phones'}>
                     <i style={{color:'white', margin:'2px'}} className="fas fa-phone-alt"> </i>
                <span className={'phone'} >(044)537-02-22 </span>
                     <div>
                         <i style={{color:'white', margin:'7px' }} className="fas fa-chevron-down"> </i>
                     </div>

                 <div>
                        <span className={'phone'} >
                           Контакти
                        </span>
                 </div>
                 <div>
                        <span className={'phone'} >
                            Допомога
                        </span>
                 </div>
                 <div>
                        <span className={'phone'} >
                            Наша відповідь COVID-19
                        </span>
                 </div>
                     </div>
                 <div className={'header-info-lng'}>


                     <div className={'language'}>
                         <div className="lng_change">
                             <a href="#">UA </a> <span>|</span> <a href="#">RU</a>
                         </div>
                            <div className={'sity_titile'}>
                             <span className="lng_change">Місто:</span>
                         <div className="lng_change"><a href="#">Львів </a> </div>
                            </div>
                                <div className={'logIn_title'}>
                              <div className="lng_change"> <span>Вітаємо,</span> </div>
                         <i style={{color:'#c0cad3', margin:'10px'}} className="fas fa-user-injured"> </i>
                              <div className={'lng_change'}> <a  href="#">увійдіть в особистий кабінет </a> </div>
                                </div>
                     </div>
                 </div>

                </div>
              <div className={'bottom-div'}>

                    <div>
                  <img className={'img_smile'} src="https://xl-static.rozetka.com.ua/assets/img/design/logo_n.svg" alt="Інтернет-магазин Rozetka.ua - №1" title={"Інтернет-магазин Rozetka.ua - №1"}/>
                      </div>
                      <div>
                      <button className={'btn_Kataloh'}>
                          <i  style={{color:'#c0cad3', margin:'5px',fontSize:'20px'}}  className="fas fa-parachute-box"> </i>
                          Kаталог товарів</button>
                    </div>
              <div className="input-group">
                  <div style={{background:'white'}}><i style={{color:'brown', margin:'10px'}} className="fas fa-american-sign-language-interpreting"> </i> </div>
                    <input type="text" className="form-control" placeholder="Я шукаю" aria-label=""
                           aria-describedby="basic-addon1"/>
                           <div style={{background:'white'}}>
                               <i style={{color:'grey', margin:'10px'}} className="fas fa-microphone"> </i>
                           </div>
                        <div className="input-group-append">
                            <button className="btn btn-success" type="button">Знайти</button>
                        </div>
                </div>
                  <div style={{display:'flex',width:'21%', alignItems:'center',justifyContent:'space-evenly'}} >
                  <div style={{display:'flex', alignItems:'center',flexDirection:'column'}}>
                      <span style={{color:'#d2d2d2',fontSize:'13px', marginBottom:'5px'}}>Спробуйте</span>
                      <div style={{background:'#471a7b', color:'#f7d869',textAlign:'center'}}>Преміум</div>
                  </div>
                  <div style={{color:'#c0cad3', margin:'5px'}}>
                      <i style={{fontSize:'24px'}} className="fas fa-weight"> </i>
                    </div>
                     <div style={{color:'#c0cad3', margin:'5px'}}>
                      <i  style={{fontSize:'24px'}} className="fas fa-grin-hearts"> </i>
                       </div>
                  <div style={{color:'#c0cad3', margin:'5px'}} >
                      <i style={{fontSize:'24px'}} className="fas fa-baby-carriage"> </i>
                  </div>
                      </div>
            </div>

            </div>
        </div>
    </div>

      );
}
