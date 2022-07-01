import React from "react";
import './Comentarios.css'

function Comentario(){
  return(<div>

   <div className="tab"> 
<form action="www.google.com" method="post" className="foorm">
     <p><label for="nome" >Nome: </label>
     <input type="text" name="nome" id="nome"/></p>


     <pre> <p>
     <textarea name="mensagem" className="mensagem" placeholder="Digite seu comentario..."></textarea></p></pre>

     <p><input type="submit" id="bt" value="Publicar" class="button-default button-default-stroke"/>
      </p>
     </form>
          </div></div>
  )
}

export default Comentario;