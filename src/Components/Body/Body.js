import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Carousel from 'react-bootstrap/Carousel'
import './BodyCss.css'
import {AllCommodity} from "./AllCommodity";



export default function Body()  {
    const data = AllCommodity.prototype.Geturl().img
    console.log(AllCommodity.prototype.Geturl().img[0])
return(
        <div className={'Body'}>
            <div className={'navi_menu'}>
            <div className={'menu'}>
                <div className={'svg_menu'}>
                <div>    <i style={{color:'grey', marginRight:'4px'}} className="fas fa-laptop"> </i></div>
                <div>    <i style={{color:'grey', marginRight:'4px'}} className="fas fa-mobile"> </i></div>
                <div>    <i style={{color:'grey', marginRight:'4px'}} className="fas fa-gamepad"> </i></div>
                <div>    <i style={{color:'grey', marginRight:'4px'}} className="fas fa-toilet"> </i></div>
                <div>    <i style={{color:'grey', marginRight:'4px'}} className="fas fa-couch"> </i></div>
                <div>    <i style={{color:'grey', marginRight:'4px'}} className="fas fa-tools"> </i></div>
                <div>    <i style={{color:'grey', marginRight:'4px'}} className="fas fa-hot-tub"> </i></div>
                <div>    <i style={{color:'grey', marginRight:'4px'}} className="fas fa-gavel"> </i></div>
                <div>    <i style={{color:'grey', marginRight:'4px'}} className="fas fa-skiing"> </i></div>
                <div>    <i style={{color:'grey', marginRight:'4px'}} className="fas fa-socks"> </i></div>
                <div>    <i style={{color:'grey', marginRight:'4px'}} className="fas fa-bath"> </i></div>
                <div>    <i style={{color:'grey', marginRight:'4px'}} className="fas fa-laugh-beam"> </i></div>
                <div>    <i style={{color:'grey', marginRight:'4px'}} className="fas fa-paperclip"> </i></div>
                <div>    <i style={{color:'grey', marginRight:'4px'}} className="fas fa-wine-bottle"> </i></div>
                <div>    <i style={{color:'grey', marginRight:'4px'}} className="fas fa-business-time"> </i></div>
                <div>    <i style={{color:'grey', marginRight:'4px'}} className="fab fa-accessible-icon"> </i></div>
                <div>    <i style={{color:'grey', marginRight:'4px'}} className="fas fa-check"> </i></div>
                </div>

                <div className={'list_menu'}>
                    <div >
                        <a href="#">Ноутбуки та комп'ютери</a>  </div>
                    <div>
                        <a href="#">Смартфони, ТВ і електроніка</a> </div>
                    <div>
                        <a href="#">Товари для геймерів</a> </div>
                    <div>
                        <a href="#">Побутова техніка</a> </div>
                    <div>
                        <a href="#">Товари для дому</a> </div>
                    <div>
                        <a href="#">Інструменти та автотовари</a> </div>
                    <div>
                        <a href="#">Сантехніка та ремонт</a> </div>
                    <div>
                        <a href="#">Дача, сад і город</a> </div>
                    <div>
                        <a href="#">Спорт і захоплення</a> </div>
                    <div>
                        <a href="#">Одяг, взуття та прикраси</a> </div>
                    <div>
                        <a href="#">Краса та здоров'я</a> </div>
                    <div>
                        <a href="#">Дитячі товари</a> </div>
                    <div>
                        <a href="#">Канцтвори та книги</a> </div>
                    <div>
                        <a href="#">Алкогольні напої та продукти</a> </div>
                    <div>
                        <a href="#">Товари для бізнесу</a> </div>
                    <div>
                        <a href="#">Послуги та сервіси</a> </div>
                    <div>
                        <a href="#">Усе для затишних свят 🎄 </a> </div>

                </div>

                <div style={{marginLeft:'10px'}}>
                    <div> <i className="far fa-hand-point-right"> </i> </div>
                    <div> <i className="fas fa-hand-point-right"> </i> </div>
                    <div> <i className="far fa-hand-point-right"> </i> </div>
                    <div> <i className="fas fa-hand-point-right"> </i> </div>
                    <div> <i className="far fa-hand-point-right"> </i> </div>
                    <div> <i className="fas fa-hand-point-right"> </i> </div>
                    <div> <i className="far fa-hand-point-right"> </i> </div>
                    <div> <i className="fas fa-hand-point-right"> </i> </div>
                    <div> <i className="far fa-hand-point-right"> </i> </div>
                    <div> <i className="fas fa-hand-point-right"> </i> </div>
                    <div> <i className="far fa-hand-point-right"> </i> </div>
                    <div> <i className="fas fa-hand-point-right"> </i> </div>
                    <div> <i className="far fa-hand-point-right"> </i> </div>
                    <div> <i className="fas fa-hand-point-right"> </i> </div>
                    <div> <i className="far fa-hand-point-right"> </i> </div>
                    <div> <i className="fas fa-hand-point-right"> </i> </div>
                    <div> <i className="far fa-hand-point-right"> </i> </div>
                </div>
                </div>

                <div style={{width:'100%',background:'#f4f4f4', display:"flex", flexDirection:'column',alignItems:'center',border:'1px solid #e9e9e9 top bottom left'}}>
                    <span style={{fontWeight: 'bold',fontSize:'20px',marginTop:'20px'}}>Herzlich Willkommen!!</span> <br/>
                    <span style={{textAlign:"center",fontSize:'10px'}}>
                        Увійдіть, щоб отримувати рекомендації, <br/> персональні бонуси і знижки.
                    </span> <br/>
                    <button style={{marginBottom:'30px'}} className={'btn_menu'}>
                        Увійдіть в особистий кабінет
                    </button>
                </div>
                <div>
                <span> Встановлюйте наші додатки:</span> <hr/>
            </div>
                <div>
                <span style={{color:'#797878'}}>Графік роботи Call-центру</span>
                <span style={{fontWeight:"bold"}}> <br/>
                    +38 044 537-02-22 <br/>+38 044 503-80-80
                </span> <br/>
                <span style={{fontSize:'10px'}}>
                    У будні з 08:00 до 21:00 <br/> Субота з 09:00 до 20:00 <br/> Неділя з 10:00 до 19:00
                </span><hr/>
                <div style={{display:'flex', flexDirection:'column'}}>
                    <span style={{color:'#797878'}} >Ми в соціальних мережах</span>
                    <div>
                    <img height={'30px'} width={'30px'} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" alt="facebook"/>
                    <img height={'30px'} width={'30px'} src="https://pngimg.com/uploads/twitter/twitter_PNG29.png" alt="twitter"/>
                    <img height={'30px'} width={'30px'} src="https://i.pinimg.com/originals/de/1c/91/de1c91788be0d791135736995109272a.png" alt="youtube"/>
                    <img height={'30px'} width={'30px'} src="https://freepngimg.com/thumb/logo/62372-computer-neon-instagram-icons-hd-image-free-png.png" alt="inst"/>
                </div>
                </div>
              <hr/>
              <div style={{display:'flex',flexDirection:'column'}}>
                  <span>Допомога</span>
                  <a style={{color:'#3e77aa'}}  href="#">Доставка та оплата</a>
                  <a style={{color:'#3e77aa'}}  href="#">Кредит</a>
                  <a style={{color:'#3e77aa'}}  href="#">Гарантія</a>
                  <a  style={{color:'#3e77aa'}} href="#">Повернення товару</a>
                  <a style={{color:'#3e77aa'}}  href="#">Сервісні центри</a>
                  <a style={{color:'#3e77aa'}}  href="#">Відстежити замовлення</a>
                  <br/>
                  <span>інформація про компанію</span>
                  <a  style={{color:'#3e77aa'}} href="#">Про нас</a>
                  <a  style={{color:'#3e77aa'}} href="#">Умови використання сайту</a>
                  <a  style={{color:'#3e77aa'}} href="#">Вакансії</a>
                  <a  style={{color:'#3e77aa'}} href="#">Контакти</a>
                  <br/>
                  <span>Сервіси</span>
                  <a  style={{color:'#3e77aa'}} href="#">Бонусний рахунок</a>
                  <a  style={{color:'#3e77aa'}} href="#">Подарункові сертифікати</a>
                  <a style={{color:'#3e77aa'}}  href="#">Переказ грошей з карти на карту</a>
                  <a style={{color:'#3e77aa'}}  href="#">Тури на відпочинок</a>
                  <br/>
                  <span>Партнерам</span>
                  <a style={{color:'#3e77aa'}}  href="#">Подавати на розетці</a>
                  <a style={{color:'#3e77aa'}}  href="#">Співпраця з нами</a>
                  <a style={{color:'#3e77aa'}}  href="#">Логотип и стайлгайд</a>

              </div>
                    <hr/>
                    <div style={{display:'flex',flexDirection:"column" }}>
                        <div style={{margin:'0 auto'}}> <img src="https://xl-static.rozetka.com.ua/assets/img/design/mastercard-logo.svg" alt="mastercard"/>

                        <img src="https://xl-static.rozetka.com.ua/assets/img/design/visa-logo.svg" alt="visa"/>
                        </div>
                        <br/>
                        <span style={{color:'#797878',fontSize:'10px'}}>ТМ використовується на підставі ліцензії <br/> правовласника RozetkaLTD.</span>
                      <br/>
                        <span style={{color:'#797878',fontWeight:'bold',fontSize:'10px'}}>© Інтернет-магазин «Розетка™» <br/>  2001–2021</span>
                    </div>
            <br/>
                </div>




            </div>



            <div className={'main_menu'} style={{display:'flex',flexDirection:'column'}}>
            <div className={'Rozetka_karusel'}>
           <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100 h-25"
      src="https://i2.rozetka.ua/images/264/264431.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100 h-25"
      src="https://i1.rozetka.ua/images/266/266266.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-25"
      src="https://i2.rozetka.ua/images/264/264431.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
                </div>


            <div  className={'commodity'}>
                <div style={{ marginBottom:'50px'}}>
                    <i style={{color:'royalblue',fontSize:'25px'}} className="far fa-star"> </i>
                    <span style={{fontSize:'19px'}}> Тільки в Розетці </span>
                </div>
                <div className={'cards'}>
                    <div className={'cards_row'}>
                    <div className={'card_body'}>
                       <div className={'img_size'}> <img className={'img_commodity'}  src={data[0].url} alt={data[0].name}/> </div>
                        <br/>
                        <span className={'nameOfCommodity'}> <a href="#">Крісло для геймерів <br/> Hator sport light </a>
                             </span> <br/>
                        <span className={'price'}>{data[0].price} $</span>
                        <span className={'price'} style={{fontSize:'13px'}}> Закінчується</span>
                    </div>

                    <div className={'card_body'}>
                      <div className={'img_size'}>  <img className={'img_commodity'}  src={data[1].url} alt={data[1].name}/></div>
                        <br/>
                        <span className={'nameOfCommodity'}> <a href="#">Крісло для геймерів <br/> Hator sport light </a>
                             </span> <br/>
                        <span className={'price'}> {data[1].price} $</span>
                        <span className={'price'} style={{fontSize:'13px'}}> Закінчується</span>
                    </div>
                    <div className={'card_body'}>
                       <div className={'img_size'}> <img className={'img_commodity'}  src={data[2].url} alt={data[2].name}/></div>
                        <br/>
                        <span className={'nameOfCommodity'}> <a href="#">Крісло для геймерів <br/> Hator sport light </a>
                             </span> <br/>
                        <span className={'price'}> {data[2].price} $</span>
                        <span className={'price'} style={{fontSize:'13px'}}> Закінчується</span>
                    </div>
                    <div className={'card_body'}>
                      <div className={'img_size'}>  <img className={'img_commodity'}  src={data[3].url} alt={data[3].name}/></div>
                        <br/>
                        <span className={'nameOfCommodity'}> <a href="#">Крісло для геймерів <br/> Hator sport light </a>
                             </span> <br/>
                        <span className={'price'}> {data[3].price} $</span>
                        <span className={'price'} style={{fontSize:'13px'}}> Закінчується</span>
                    </div>
                    <div className={'card_body'}>
                     <div className={'img_size'}>   <img className={'img_commodity'}  src={data[4].url} alt={data[4].name}/> </div>
                        <br/>
                        <span className={'nameOfCommodity'}> <a href="#">Крісло для геймерів <br/> Hator sport light </a>
                             </span> <br/>
                        <span className={'price'}> {data[4].price} $</span>
                        <span className={'price'} style={{fontSize:'13px'}}> Закінчується</span>
                    </div> </div>
                    <div className={'cards_row'}>
                    <div className={'card_body'}>
                      <div className={'img_size'}>  <img className={'img_commodity'}  src={data[5].url} alt={data[5].name}/></div>
                        <br/>
                        <span className={'nameOfCommodity'}> <a href="#">Крісло для геймерів <br/> Hator sport light </a>
                             </span> <br/>
                        <span className={'price'}> {data[5].price} $</span>
                        <span className={'price'} style={{fontSize:'13px'}}> Закінчується</span>
                    </div>
                    <div className={'card_body'}>
                     <div className={'img_size'}>   <img className={'img_commodity'}  src={data[6].url} alt={data[6].name}/></div>
                        <br/>
                        <span className={'nameOfCommodity'}> <a href="#">Крісло для геймерів <br/> Hator sport light </a>
                             </span> <br/>
                        <span className={'price'}> {data[6].price} $</span>
                        <span className={'price'} style={{fontSize:'13px'}}> Закінчується</span>
                    </div>
                    <div className={'card_body'}>
                      <div className={'img_size'}>  <img className={'img_commodity'}  src={data[7].url} alt={data[7].name}/></div>
                        <br/>
                        <span className={'nameOfCommodity'}> <a href="#">Крісло для геймерів <br/> Hator sport light </a>
                             </span> <br/>
                        <span className={'price'}> {data[7].price} $</span>
                        <span className={'price'} style={{fontSize:'13px'}}> Закінчується</span>
                    </div>
                    <div className={'card_body'}>
                      <div className={'img_size'}>  <img className={'img_commodity'}  src={data[8].url} alt={data[8].name}/></div>
                        <br/>
                        <span className={'nameOfCommodity'}> <a href="#">Крісло для геймерів <br/> Hator sport light </a>
                             </span> <br/>
                        <span className={'price'}> {data[8].price} $</span>
                        <span className={'price'} style={{fontSize:'13px'}}> Закінчується</span>
                    </div> <div className={'card_body'}>
                      <div className={'img_size'}>  <img className={'img_commodity'}  src={data[9].url} alt={data[9].name}/></div>
                        <br/>
                        <span className={'nameOfCommodity'}> <a href="#">Крісло для геймерів <br/> Hator sport light </a>
                             </span> <br/>
                        <span className={'price'}> {data[9].price} $</span>
                        <span className={'price'} style={{fontSize:'13px'}}> Закінчується</span>
                    </div></div>
                        <div className={'card_body'}>
                      <div className={'img_size'}>  <img className={'img_commodity'}  src={data[10].url} alt={data[10].name}/></div>
                        <br/>
                        <span className={'nameOfCommodity'}> <a href="#">Крісло для геймерів <br/> Hator sport light </a>
                             </span> <br/>
                        <span className={'price'}> {data[10].price} $</span>
                        <span className={'price'} style={{fontSize:'13px'}}> Закінчується</span>
                    </div>
                </div>

            </div>
</div>








        </div>


      );
}
