import './NavBar.css'
import React from 'react'
import {Link} from 'react-router-dom'




function NavBar() {
  return (<nav className='navBar'>
  
  <ul className='list'>
  <li className='item'><Link className='letra' to = '/'>Home</Link></li>
  <li className='item'><Link className='letra' to = '/Partilha'>Partilhas</Link></li>
  <li className='item'><Link className='letra' to ='/Artigos'>Artigos</Link></li>
  <li className='item'><Link className='letra' to = '/Projects'>Projeto</Link></li>
  <li className='item'><Link className='letra' to ='/Planeamento'>Planeamento</Link></li>
  <li className='item'><Link className='letra' to ='/QuemSomos'>QuemSomos</Link></li>
  
      </ul>
 </nav>)
}

export default NavBar