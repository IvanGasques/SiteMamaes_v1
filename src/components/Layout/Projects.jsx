import Message from "../Projecto/Menssage/Menssage"
import {useLocation} from 'react-router-dom'
import './Project.css'
import Container from '../NavBar/Container'
import LinkBtn from "../Form/LinkBtn"
import CardProject from "../Projecto/CardProject/CardProject"
import { useEffect, useState } from "react"
import Loading from "../Projecto/Loading./Loading"
import "../Projecto/EditProj.css"


const Projects = ({type, start}) => {

  const[projects, setProjects] = useState([])
  const [removeLoading, setRemoveLoading] = useState(false)
  const [projectMessage, setProjectMessage] = useState('')


  const location = useLocation()
  let message =''
  if (location.state){
    message =  location.state.message
  }
///////////////////////////////////////////////////////////

  useEffect (()=> {
    setTimeout(() => {fetch('http://localhost:5000/projects',{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then((resp) => resp.json())
  .then((data) => {
    setProjects(data)
    setRemoveLoading(true)
   

  })
  .catch((err) => console.log(err))
},800)},[])

///////////////////////////////////////////////////////////

const removeProject = (id) => {

  fetch (`http://localhost:5000/projects/${id}`, {
    method: 'DELETE',
    headers: {
      'Contente-Type': 'application/json'
    },
  }).then((resp) => resp.json())
  .then((data => {
    setProjects(projects.filter((project) => project.id!== id))
    setProjectMessage('Projeto removido com sucesso')
  }))
  
  .catch(err => console.log(err))
}
///////////////////////////////////////////////////////////

  return(
    <div className="project_container">
     <div className="title">
     <h1>Meus Projetos</h1>
     <LinkBtn to='/Planeamento' text='Criar Projeto'/>
     </div>
     <div className='edite' >
    {message && 
    <Message type='success' msg={message}/>}
    <Message type='success' msg={projectMessage}/>
    <div className='start'>
     {projects.length >0 &&
     projects.map((projects, category) =>
      <CardProject 
      id= {projects.id}
      name={projects.name}
      budget={projects.budget}
      category={category.name}
      key={projects.id}
      handleRemove={removeProject}
      />
     )}
     {!removeLoading && <Loading/>}

     {removeLoading && projects.length ===0 && (
      <p> N??o h?? projeto cadastrados</p>
     )}
    </div>
<div></div></div>
    </div>
  )
}
export default Projects