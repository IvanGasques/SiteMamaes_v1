import React from "react"
import Menu from '../components/Menu/Menu'
import Card from "../components/Card/Card"
import Carrosel from "../components/Carousel/Carrosel"
import Comentario from "../components/Comentarios/Comentarios"


function Pagina(){
  return (
    <div>
       <Menu></Menu>
<Carrosel></Carrosel>
<Card/>

<Comentario></Comentario>

    </div>
  )
}
export default Pagina