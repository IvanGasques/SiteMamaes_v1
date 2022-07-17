import './NavBar.css'
import React from 'react'
import {Link} from 'react-router-dom'




function NavBar() {
  return (<nav className='navBar'>
  
  <ul className='list'>
  <li className='item'><Link to = '/'>Home</Link></li>
  <li className='item'><Link to = '/Partilha'>Partilhas</Link></li>
  <li className='item'><Link to = '/Project'>Projeto</Link></li>
  <li className='item'><Link to ='/Planeamento'>Planeamento</Link></li>
  <li className='item'><Link to ='/QuemSomos'>QuemSomos</Link></li>
  <li className='item'><Link to ='/Contacto'>Contacto</Link></li>
      </ul>
 </nav>)
}

export default NavBar