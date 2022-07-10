import Message from "../Projecto/Menssage/Menssage"
import {useLocation} from 'react-router-dom'
import './Project.css'
import Container from '../NavBar/Container'
import LinkBtn from "../Form/LinkBtn"
import CardProject from "../Projecto/CardProject/CardProject"
import { useEffect, useState } from "react"


const Projects = ({type, start}) => {

  const[projects, setProjects] = useState([])

  const location = useLocation()
  let message =''
  if (location.state){
    message =  location.state.message
  }

  useEffect (()=> {
    fetch('http://localhost:5000/projects',{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then((resp) => resp.json())
  .then((data) => {
    setProjects(data)
  })
  .catch((err) => console.log(err))},[])
  return(
    <div className="project_container">
     <div className="title">
     <h1>Meus Projetos</h1>
     <LinkBtn to='/Planeamento' text='Criar Projeto'/>
     </div>
    {message && 
    <Message type='success' msg={message}/>}
    <Container className={start}>
     {projects.length> 0 &&
     projects.map((projects) =>
      <CardProject 
      id= {projects.id}
      name={projects.name}
      budget={projects.budget}
      category={projects.category.name}
      key={projects.id}
      />
     )}
    </Container>

    </div>
  )
}
export default Projects