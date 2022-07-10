

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
function App() {


  return (
  <div className='App'>
  <div className='link'> <Router>
  <NavBar></NavBar>
 
  

 <Switch >

    <Route exact path='/'>
      <Home/>
      </Route>
      <Route exact path='/Projects' >
    <Projects/>
    </Route>
    <Route exact path='/QuemSomos' >
    <QuemSomos></QuemSomos>
    </Route>
    <Route exact path='/Contacto'>
    <Contacto></Contacto>
    </Route>
    <Route exact path='/Planeamento'>
    <Home2/>
    </Route>
    
    </Switch> </Router></div>
<Footer className='footer'></Footer>
  </div>
  )
}

export default App;
