

import './App.css'
import './index.css'
import Footer from './components/Footer/Footer.jsx'
import {BrowserRouter as Router, Route,Switch,} from 'react-router-dom'
import QuemSomos from './components/Layout/QuemSomos'
import Contacto from './components/Layout/Contacto'
import NavBar from "./components/NavBar/Navbar";
import Home from './components/Layout/Home'
import Home2 from './components/Projecto/Home2'
import Projects from './components/Layout/Projects'
import EditProj from './components/Projecto/EditProj'
import imageUrl from './components/img/backgraund.jpg'
import TrocaExperiencia from './components/Comentarios/TrocaExperiencia'

function App() {


  return (
    
  <div className='App' id='appe' style={{ background: `url(${imageUrl})`}}>
  <div className='link'> <Router>
 
  <NavBar></NavBar>
 
  

 <Switch >

    <Route exact path='/'>
      <Home/>
      </Route>
      <Route exact path='/Partilha'>
      <TrocaExperiencia/>
      </Route>
      <Route  path='/Projects' >
    <Projects/>
    </Route>
    <Route  path='/QuemSomos' >
    <QuemSomos></QuemSomos>
    </Route>
    <Route  path='/Contacto'>
    <Contacto></Contacto>
    </Route>
    <Route  path='/Planeamento'>
    <Home2/>
    </Route>
    <Route  path='/project/:id' >
    <EditProj></EditProj>
    </Route>
    
    </Switch> </Router></div>
   
<Footer className='footer'></Footer>
  </div>
  )
}

export default App;
