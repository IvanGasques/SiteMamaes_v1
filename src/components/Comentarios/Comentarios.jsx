
import './Comentarios.css'
import {  useState, } from 'react'

function Comentario(){
  
 const [name, setname] = useState ("")
 const [post, setpost] = useState ("")

 const nameChange = (e) => setname(e.target.value)
 const postChange = (e) => setpost(e.target.value)
 


const publicarComentario = (e) => {
e.preventDefault();

const data = {name, post} 

const requestOptions = {
method: 'POST',
headers: {
  'Content-Type': 'application/json',
},
body: JSON.stringify(data)
 };
 fetch ('http://localhost:5000/posts',requestOptions) 
 .then((resp) => resp.json())
 .then((resp) => console.log(resp))


 }





  return(<div>

   <div className="tab"> 
<form   className="foorm" onSubmit={publicarComentario} >
<h1> Partilha de experiências</h1>
     <p><label htmlFor='name'>Nome: </label></p>
     <input type="text" name="name" value={name}  onChange={nameChange} required/>


     <pre> <p>
     <input  name='content'  type='text' value={post} className="textarea" placeholder="Digite aqui as suas experiências..." onChange={postChange} required></input></p></pre>

     <p className="bt" >
     <button  type="submit"  onClick={() => window.location.reload()} className="button_default button_default_stroke">Publicar</button>
     
      </p>
     
     </form>
          </div>
        
          </div>
  )
}

export default Comentario