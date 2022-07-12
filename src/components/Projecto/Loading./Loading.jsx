import './Loading.css'
import loading from './loading.svg'

const Loading = () => {
  return(
    <div className='loader'> 
    <img src={loading} className='image' alt='Loading'/> 
    </div>
  )
}
export default Loading