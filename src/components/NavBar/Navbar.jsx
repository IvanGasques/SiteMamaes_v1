import './NavBar.css'
import React from 'react'
import {Link} from 'react-router-dom'
import Container from './Container'



function NavBar() {
  return (<nav>
  <Container>
  <Link to = '/Home'>Home</Link>
     <Link to ='/QuemSomos'>QuemSomos</Link>
      <Link to ='/Contacto'>Contacto</Link>
      <Link to ='/Orcamento'>Orcamento</Link>
      </Container>
 </nav>)
}

export default NavBar