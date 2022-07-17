import './Planeamento.css'
import Input from '../Form/Input'
import Select from '../Form//Select'
import Submit from '../Form/Submit'
import { useState,useEffect } from 'react'


const Planeamento = ({btxText, handleSubmit, projectData}) => {
const [categories, setCategories] = useState([])
const [project, setProject] = useState (projectData || {})

useEffect (() => {
  fetch('http://localhost:5000/categories',{
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})
.then((resp) => resp.json())
.then((data) => {
  setCategories(data)
})
.catch((err) => console.log(err))
},[])

const submit = (e) => {
  e.preventDefault()
  handleSubmit(project)
}

const handleChange = (e) => {
  setProject({...project, [e.target.name]: e.target.value})
}
const handleCategory = (e) => {
  setProject({...project, category:{
    id: e.target.value,
    name: e.target.options[e.target.selectedIndex].text,},
})}

  return(
    <form onSubmit={submit} className='plane'>
    
    <Input 
   type='text'
   text='Nome do Projeto'
   name='name'
   placeholder='Insira o nome do Projeto'
   handleOnChange={handleChange}
   value={project.name ? project.name : ''}
   />
   
    <Input 
   type='number'
   text='Valor do Budget'
   name='budget'
   placeholder="Insira o seu Budget"
   handleOnChange={handleChange}
   value={project.budget ? project.budget : ''}
   />
   
   <Select name="category_id" 
   text='Selecione a categoria'
    options= {categories}
   handleOnChange={handleCategory}
   value={project.category ? project.category.id : ''}
   />
    
    <Submit text={btxText}/>
    </form>
  )
}
export default Planeamento