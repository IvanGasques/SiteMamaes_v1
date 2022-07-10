import './CardProject.css'
import { FaTrash } from 'react-icons/fa'
import { FaPencilAlt } from 'react-icons/fa'


const CardProject = ({id, name, budget, category, handleRemove}) => {

  return(<div className='project_card'>
   <h4>{name}</h4>
   <p>
   <span>Orcamento: </span> €{budget}</p>
   <p>
    <span></span><li>{category}</li>
   </p>
   <div className='card_actions'>
    <button><FaPencilAlt className='icon'/> Editar</button>
    <button><FaTrash className='icon'/> Excluir</button>
   </div>
   </div>
  )
}

export default CardProject