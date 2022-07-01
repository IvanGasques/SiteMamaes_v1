
import Menu from "./components/Menu/Menu";
import Card from "./components/Card/Card";
import Carrosel from "./components/Carousel/Carrosel";
import Comentario from "./components/Comentarios/Comentarios";
import Footer from "./components/Footer/Footer";

function App() {
  return (
  <div className='App'>
  <Menu></Menu>
<Carrosel></Carrosel>
<Card/>

<Comentario></Comentario>
<Footer/>
  </div>
  )
}

export default App;
