import React from "react";
import Image2 from './imagens/Image2.jpg'
import Image1 from './imagens/Image1.jpg'
import Image3 from './imagens/Image3.jpg'
import Image4 from './imagens/Image4.jpg'
import Image5 from './imagens/Image5.jpg'
import Image6 from './imagens/Image6.jpg'


import './Carrosel.css'




function Carrosel() {
  return (<div>
     
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Image2} className="d-block w-80" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Image3}  className="d-block w-80" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Image5} className="d-block w-80" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Image4} className="d-block w-80" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Image6} className="d-block w-80" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Image1} className="d-block w-80" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  </div>
  )
}

export default Carrosel