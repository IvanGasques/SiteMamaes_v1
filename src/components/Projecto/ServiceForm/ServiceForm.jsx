

import { useState, } from 'react'
import Input from '../../Form/Input'
import Submit from '../../Form/Submit'


const ServiceForm = ({handleSubmit, btxText, projectData}) => {

const [service, setService] = useState({})

  const submit = (e) =>{
    e.preventDefault()
    projectData.services.push(service)
    handleSubmit(projectData)
  }

const handleChange  = (e) =>{
setService({...service,[e.target.name]: e.target.value})
}
  return(
  <form onSubmit={submit } >
    <Input 
    type='text'
    text="Nome do serviço"
    name="name"
    placeholder='Insira o nome do serviço'
    handleOnChange={handleChange}/>
    
    <Input 
    type='number'
    name="cost"
    text="Custo do serviço/compra"
    placeholder='Insira o valor total'
    handleOnChange={handleChange}/>
    
    <Input 
    type='text'
    name="description"
    text="Descrição"
    placeholder='Descrição do serviço/compra'
    handleOnChange={handleChange}/>
    <Submit text={btxText}/>
  </form>
  )
}
export default ServiceForm