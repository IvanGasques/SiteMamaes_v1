import React from "react";
import ImgCard from './Img/ImgCard.jpeg'
import ImgCard1 from './Img/ImgCard1.jpeg'
import ImgCard2 from './Img/ImgCard2.jpeg'
import ImgCard3 from './Img/ImgCard3.jpeg'
import './Card.css'
import '../Comentarios/Comentarios.css'
import {Link} from 'react-router-dom'
import '../Form/LinkBtn.css'

function Card (){
return(<div className="carde">
  <div className="card" >
  <img src={ImgCard1} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Alimentação complementar as orientações</h5>
    <p className="card-text">Novas orientações para a alimentação complementar
A alimentação complementar suscita sempre... muitas dúvidas aos pais, deixamos neste artigo...
</p>
   <div id="btn"  ><Link className="button_default button_default_stroke" to ='/Artigos4'>Ler mais</Link> </div>

  </div>
</div>
<div className="card" >
  <img src={ImgCard2} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Crise alimentar está a causar casos</h5>
    <p className="card-text">Crise alimentar está a causar casos de subnutrição grave infantil a cada minuto. A organização apela para a disponibilização de...</p>
    <div id="btn"  ><Link className="button_default button_default_stroke" to ='/Artigos3'>Ler mais</Link> </div>

  </div>
</div>
<div className="card" >
  <img src={ImgCard3} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Bebés expostos a Covid-19...</h5>
    <p className="card-text">Bebés expostos a Covid-19 no útero têm maior risco de sofrer atrasos no desenvolvimento
O estudo foi realizado num hospital de Boston. Um estudo recente, ...</p>
<div id="btn"  ><Link className="button_default button_default_stroke" to ='/Artigos1'>Ler mais</Link> </div>

  </div>
</div>
<div className="card" >
  <img src={ImgCard} className="card-img-top" alt="..."/>
  <div className="card-body" id="cardy">
    <h5 className="card-title">Atividade física das crianças</h5>
    <p className="card-text">Atividade física das crianças diminuiu 20% a nível global em contexto de pandemia
Os dados foram recolhidos a partir de... </p>
    <div id="btn"  ><Link  className="button_default button_default_stroke" to ='/Artigos2'>Ler mais</Link> </div>
  </div>
</div>

</div>
)
}

export default Card