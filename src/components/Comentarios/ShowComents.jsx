import Comentario from "./Comentarios"
import { useEffect, useState,} from "react"
import Loading from "../Projecto/Loading./Loading"
import "./ShowComents.css"
import Message from "../Projecto/Menssage/Menssage"

const ShowComents = () =>{

  const [ type, setType] = useState()
  const [ Msg, setMsg] = useState()
const [ data, setdata] = useState(false)

  const url="http://localhost:5000/posts"

  useEffect(()=>{setType('success')
  setMsg('Partilha feita com sucesso')
    setTimeout(() => { fetch(url)
  .then((resp) => resp.json())
  .then((dados => {setdata (dados)
  
    })
)
  .catch((err) => console.log(err))
},1100)},[])

  

   return(
    <div className="page">
    <Comentario/>
    <div>{!data ? 
      (<div><div className="mens"><Loading/> </div><Message type={type} msg={Msg}/></div>) : ( 
      data.map((post) =>(
        <div className="page2" key={post.id}>
        <h4><p className="name"  >{post.name}</p></h4>
        <p className="post" >"{post.post}"</p>
       </div>)))
    }</div>
    </div>
    )
}


export default ShowComents