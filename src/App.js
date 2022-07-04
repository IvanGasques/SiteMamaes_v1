

import './App.css'
import './index.css'
import Footer from './components/Footer/Footer.jsx'
import {BrowserRouter as Router, Route,Switch,} from 'react-router-dom'

import QuemSomos from './components/Layout/QuemSomos'
import Contacto from './components/Layout/Contacto'
import Orcamento from './components/Layout/Orcamento'
import NavBar from "./components/NavBar/Navbar";
import Pagina from './components/Pagina'


function App() {


  return (
  <div className='App'>
  <Router>
  <NavBar></NavBar>
  
 
 <Switch className='link'>
 
    <Route exact path='/Home'>
      <Pagina></Pagina>
      </Route>
    <Route exact path='/QuemSomos' >
    <QuemSomos></QuemSomos>
    </Route>
    <Route exact path='/Contacto'>
    <Contacto></Contacto>
    </Route>
    <Route exact path='/Orcamento'>
    <Orcamento></Orcamento>
    </Route>
    
    </Switch> </Router>
<Footer className='footer'></Footer>
  </div>
  )
}

export default App;
