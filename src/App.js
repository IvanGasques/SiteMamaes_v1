

import './App.css'
import './index.css'
import Footer from './components/Footer/Footer.jsx'
import { Route,Routes,} from 'react-router-dom'
import QuemSomos from './components/Layout/QuemSomos'
import NavBar from "./components/NavBar/Navbar";
import Home from './components/Layout/Home'
import Home2 from './components/Projecto/Home2'
import Projects from './components/Layout/Projects'
import EditProj from './components/Projecto/EditProj'
import imageUrl from './components/img/backgraund.jpg'
import TrocaExperiencia from './components/Comentarios/TrocaExperiencia'
import Artigos1 from './components/Artigos/Artigos1'
import Artigos2 from './components/Artigos/Artigos2'
import Artigos3 from './components/Artigos/Artigos3'
import Artigos4 from './components/Artigos/Artigos4'
import Artigos5 from './components/Artigos/Artigos5'


function App() {


  return (
    
  <div className='App' id='appe' style={{ background: `url(${imageUrl})`}}>
  <div className='link'> 
 
  <NavBar></NavBar>
 
  

 <Routes >

    <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/Partilha' element={<TrocaExperiencia/>}></Route>
      <Route  path='/Projects' element={<Projects/>}></Route>
    <Route  path='/QuemSomos' element={<QuemSomos></QuemSomos>}></Route>
    <Route  path='/Artigos' element={<Artigos1/>}></Route>
    <Route  path='/Planeamento' element={<Home2/>}></Route>
    <Route  path='/project/:id' element={<EditProj></EditProj>}></Route>
    <Route  path='/Artigos1' element={<Artigos1/>}></Route>
    
     <Route  path='/Artigos2' element={<Artigos2/>}></Route>
     <Route  path='/Artigos3' element={<Artigos3/>}></Route> 
    <Route  path='/Artigos4' element={<Artigos4/>}></Route> 
    <Route  path='/Artigos5' element={<Artigos5/>}></Route>
    
    </Routes> 
    </div>
   
<Footer className='footer'></Footer>
  </div>
  )
}

export default App;
