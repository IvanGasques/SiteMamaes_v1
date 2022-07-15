import React from "react";
import './Comentarios.css'
import { useState } from 'react'

function Comentario(){

function publicarComentario(e){
  e.preventDefault()
  setUserName(name)
}

const [name, setName] = useState()
const [userName, setUserName] = useState()
const [text, setText] = useState()
  return(<div>

   <div className="tab"> 
<form  className="foorm" >
<h1> Partilha de experiências</h1>
     <p><label htmlFor='name'>Nome: </label>
     <input type="text" name="name" id="name" onChange ={(e) => setName(e.target.value)}/></p>


     <pre> <p>
     <textarea id="coment" name="coment" className="mensagem" placeholder="Digite seu comentario..." onChange={(e) => setText(e.target.value)}></textarea></p></pre>

     <p><input onClick={publicarComentario} type="submit" id="bt" value="Publicar" className="button_default button_default_stroke"/>
      </p>
     
     </form>
          </div>
         <div className="comento">
        {userName &&(  <div className="coment">{name}:
          {text}
          </div>)}</div>
          </div>
  )
}

export default Comentario;