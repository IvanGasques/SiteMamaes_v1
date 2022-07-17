import Comentario from "./Comentarios"
import { useEffect, useState,} from "react"
import Loading from "../Projecto/Loading./Loading"
import "./ShowComents.css"

const ShowComents = () =>{

const [ data, setdata] = useState(false)

  const url="http://localhost:5000/posts"

  useEffect(()=>{
    setTimeout(() => { fetch(url)
  .then((resp) => resp.json())
  .then((dados => setdata (dados))
)
  .catch((err) => console.log(err))
},1400)},[])

  

   return(
    <div className="page">
    <Comentario/>
    <div>{!data ? 
      (<Loading/>) :
      (data.map((post) =>(
        <div className="page2" key={post.id}>
        <p className="name"  ><h4>{post.name}</h4></p>
        <p className="post" >"{post.post}"</p>
       </div>)))
    }</div>
    </div>
    )
}


export default ShowComents