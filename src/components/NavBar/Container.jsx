import './Container.css'


function Container(props){
  return(
<div className='containerr' id='{[props.customClass]}'> 
{props.children}</div>
  )
}

export default Container