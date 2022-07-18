import './EditProj.css'
import './CardProject/CardProject.css'
import {useParams} from 'react-router-dom'
import Loading from './Loading./Loading'
import { useEffect, useState } from 'react'
import Planeamento from './Planeamento'
import Message from './Menssage/Menssage'
import ServiceForm from './ServiceForm/ServiceForm'
import {parse, v4 as uuidv4} from 'uuid'

import ServiceCard from './ServiceForm/ServiceCard'

const EditProj = () =>{
const {id} = useParams()

const [project, setproject] = useState([]) 
const [showProject, setShowProject] = useState(false)
const [showService, setShowService] = useState(false)
const [services, setServices] = useState([])


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
  setServices(data.services)
 })
.catch((err) => console.log(err))},500)
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


const createService = (project) => {

setMessage('')

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

fetch(`http://localhost:5000/projects/${project.id}`, {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(project)
 })
.then((resp) => resp.json())
.then((data) => {
 setShowProject(false)
}) 
.catch((err) => console.log(err))
}
///////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////

const serviceRemove= ({id, cost}) => {

  const servicesUpdated = project.services.filter((service) => service.id !== id)

  const projectUpdated = project

  projectUpdated.services = servicesUpdated

  projectUpdated.cost = parseFloat(projectUpdated.id) - parseFloat(cost)

  fetch(`http://localhost:5000/projects/${project.id}`,{
    method: 'PATCH',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify(projectUpdated)
  }).then((resp => resp.json()))
  .then((data) => {
   setproject(projectUpdated)
   setServices(servicesUpdated)
   setMessage('Serviço removido com sucesso!')
  })
  .catch(err=> console.log(err))
  
}





const editProj= ()=>{}
////////////////////////////////////////////////////////////
  return (<div>
    <div className='edite'>
      {project ? (
<div className='edit'>
  {message && <Message type={type} msg={message}/>}

    <h1>Projecto:{project.name}</h1>
    <button onClick={edit} className='btne'>{!showProject ?  'Editar Projecto' : 'Fechar'}  </button>


    {!showProject ? ( 
      <div  className='cont' ><p>
      <span>Categoria:</span> {project.category}
      </p>

      <p>
      <span>Total do Budget:</span> €{project.budget}
      </p>

      <p>
      <span>Total utilizado:</span> €{project.services}
      </p> 
      </div>) 
      : (
        <div className='edit2'>
          <Planeamento  handleSubmit={editProj} btxText='Concluir edição' projectData={project}/>
        </div>
      )}
      
<div className='edit2'>
<h2>Adicione serviço</h2>
<button onClick={service} className='btne'>{!showService ?  'Adicionar gasto' : 'Fechar'}  </button>
<div className='service_info'>

{!showService ? <ServiceForm
handleSubmit={createService} 
btxText= 'Adicionar Serviço'
projectData={project}/> : false
}
</div>
</div>

  <h2> Serviços</h2>
  <div className='start'> 

  
  {services.length > 0 &&
  services.map((service) =>(
    <ServiceCard className='project_card'
    id= {service.id}
    name= {service.name}
    cost= {service.cost}
    description= {service.description}
    key= {service.id}
    handleRemove= {serviceRemove} />))}
    {services.name === 0 && <p>'Não hà serviços cadastrados.'</p>}
 
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
    </div></div>
  )
}


//terminar e resolver o erro no fetch, arrumar o layout..

export default EditProj