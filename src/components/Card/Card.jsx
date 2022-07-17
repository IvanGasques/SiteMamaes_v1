import React from "react";
import ImgCard from './Img/ImgCard.jpeg'
import ImgCard1 from './Img/ImgCard1.jpeg'
import ImgCard2 from './Img/ImgCard2.jpeg'
import ImgCard3 from './Img/ImgCard3.jpeg'
import './Card.css'
import '../Comentarios/Comentarios.css'

function Card (){
return(<div className="carde">
  <div className="card" >
  <img src={ImgCard1} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Novas orientações para a alimentação complementar
A alimentação complementar suscita sempre... muitas dúvidas aos pais, deixamos neste artigo...
</p>
    <button  className="button_default button_default_stroke">Ler mais</button>

  </div>
</div>
<div className="card" >
  <img src={ImgCard2} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">8 mitos da alimentação infantil
Os conselhos bem-intencionados sobre a alimentação infantil não passam muitas vezes de mitos ...</p>
<button  className="button_default button_default_stroke">Ler mais</button>

  </div>
</div>
<div className="card" >
  <img src={ImgCard3} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Bebés expostos a Covid-19 no útero têm maior risco de sofrer atrasos no desenvolvimento
O estudo foi realizado num hospital de Boston. Um estudo recente, ...</p>
<button  className="button_default button_default_stroke">Ler mais</button>

  </div>
</div>
<div className="card" >
  <img src={ImgCard} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button id="btn" className="button_default button_default_stroke">Ler mais</button>
  </div>
</div>

</div>
)
}

export default Card