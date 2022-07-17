import '../CardProject/CardProject.css'
import { FaTrash } from 'react-icons/fa'


const ServiceCard = ({id, name, cost, description, handleRemove}) => {
 
const remove =(e) => {
  e.preventDefault()
  handleRemove(id, cost)

}

 return(
    <div className='project_card' key={id}>
      <h4>{name}</h4>
      <p>
        <span>Custo Total:</span> €{cost}
      </p>
      <p>{description}</p>
      <div className='card_actions'>
        <button onClick={remove}>
          <FaTrash/>
          Excluir
        </button>
      </div>
    </div>
  )
}

export default ServiceCard