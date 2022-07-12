import './EditProj.css'
import {useParams} from 'react-router-dom'
import Loading from './Loading./Loading'
import { useEffect, useState } from 'react'
import Planeamento from './Planeamento'
import Message from './Menssage/Menssage'
import ServiceForm from './ServiceForm/ServiceForm'
import {parse, v4 as uuidv4} from 'uuid'

const EditProj = () =>{
const {id} = useParams()

const [project, setproject] = useState([]) 
const [showProject, setShowProject] = useState(false)
const [showService, setShowService] = useState(false)


const [message, setMessage] = useState()
const [type, setType] = useState()


useEffect(() => {
 setTimeout(() => {
  fetch (`http://localhost:5000/projects/${id}`, {
method: 'GET',
headers: {
  'Content-Type': 'application/json',
},
 }).then((resp) => resp.json())
 .then((data) => {
  setproject(data)
 })
.catch((err) => console.log(err))},800)
},[id])




///////////////////////////////////////////////////////////

const edit = () => {
  setShowProject(!showProject)
}
///////////////////////////////////////////////////////////

const service = () => {
  setShowService(!showService)
}
///////////////////////////////////////////////////////////
const createService = () => {

}
const lastService = project.services[project.services.length - 1]
 
lastService.id = uuidv4() //net

const lastServiceCost = lastService.cost

const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)
// maximo valor 
if(newCost > parseFloat(project.budget)) {
  setMessage ('Orçamento ultrapassado, verifique o valor do serviço')
  setType('error')
  project.services.pop()
  return false
}

//adicionar total
project.cost = newCost

//atualizar

fetch(`http://localhost:5000/projetcs/${projetc.id}`, {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON,stringify(project)
})
.then((resp) => resp.json())
.then((data) => {
  //exibir os servicos
console.log(data)
}) 
.catch((err) => console.log(err))

///////////////////////////////////////////////////////////


const editProj = (project) =>{
  setMessage('')
  if (project.budget <  project.cost){
    setMessage('O orçamento não pode ser menor que o custo do projeto')
    setType('error')
    return false
  }
  fetch (`http://localhost:5000/projects/${project.id}`,{
    method:'PATCH',
    headers:{
      'Content-Type' : 'application/json',
    },
    body: JSON.stringify(project),
  })
  .then((resp => resp.json()))
  .then((data) => {
    setproject(data)
    setShowProject(false)
    setMessage('Projeto atualizado!')
    setType('success')
   
  })
  .catch(err=> console.log(err))
}
///////////////////////////////////////////////////////////

  return (
    <div className='edite'>
      {project.name ? (
<div className='edit'>
  {message && <Message type={type} msg={message}/>}

    <h1>Projecto:{project.name}</h1>
    


    {!showProject ? ( 
      <div  className='cont' ><p>
      <span>Categoria:</span> {project.category.name}
      </p>

      <p>
      <span>Total do Budget:</span> €{project.budget}
      </p>

      <p>
      <span>Total utilizado:</span> €{project.cost}
      </p> 
      </div>) 
      : (
        <div className='edit2'>
          <Planeamento  handleSubmit={editProj} btxText='Concluir edição' projectData={project}/>
        </div>
      )}<button onClick={edit} className='btne'>{!showProject ?  'Editar Projecto' : 'Fechar'}  </button>
      
<div className='edit2'>
<h2>Adicione serviço</h2>
<button onClick={service} className='btne'>{!showService ?  'Adicionar gasto' : 'Fechar'}  </button>
<div className='service_info'>
{showService && (
  <ServiceForm/>
)}
</div>
</div>
<div>
  <h2> Serviços</h2>
  <span className='start'> 
  <p>Itens de serviços</p>
  </span>
</div>
      
  
<div className='service_info'> 
{showService && <ServiceForm 
handleSubmit={createService}
btxText='Adicionar serviço/compra'
projectData={project}/>
}
</div>
  
</div>
      ) : ( <Loading className='loader'/>)}
    </div>
  )
}


//terminar e resolver o erro no fetch, arrumar o layout..

export default EditProj