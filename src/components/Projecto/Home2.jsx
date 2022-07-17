import './Home2.css'
import Planeamento from './Planeamento'
import {useNavigate, } from 'react-router-dom'


 const Home2 = () => {
  const navegate = useNavigate ()
const createPost = (project) => {
  project.mamaes = 0
project.services = []

fetch('http://localhost:5000/projects', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(project)
}) 
.then((resp) => resp.json())
.then((data) => {
  console.log(data)
  navegate('/projects',{message: 'Projeto criado com sucesso!'})
})
.catch(err => console.log(err))
}
  return (<div className="projeto">
<h1>Criar Planeamento</h1>
<p> Crie seu planeamento para depois adicionar os serviços</p>
<Planeamento handleSubmit ={createPost} btxText='Criar projeto'/>
</div>
  )
}
export default Home2