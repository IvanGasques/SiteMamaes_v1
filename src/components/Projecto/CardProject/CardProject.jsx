import './CardProject.css'
import { FaTrash } from 'react-icons/fa'
import { FaPencilAlt } from 'react-icons/fa'
import {Link} from 'react-router-dom'


const CardProject = ({id, name, budget, category, handleRemove}) => {
const remove = (e) => {
  e.preventDefault()
  handleRemove(id)
}


  return(<div className='project_card'>
   <h4>{name}</h4>
   <p>
   <span className='pa' >Orcamento: </span> €{budget}</p>
   <p>
    <span></span><li>{category}</li>
   </p>
   <div className='card_actions'>
    <Link to= {`/project/${id}`}><FaPencilAlt className='icon'/> Editar</Link>
    <button onClick={remove}><FaTrash className='icon'/> Excluir</button>
   </div>
   </div>
  )
}

export default CardProject