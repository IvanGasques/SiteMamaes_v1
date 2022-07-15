import './Home.css'
import LinkBtn from '../Form/LinkBtn'
import Carrosel from '../Carousel/Carrosel'
import Card from '../Card/Card'
import Comentario from '../Comentarios/Comentarios'

function Home(){
  return (<div>
    <section className="container">
<h1><span className='color'>Bem-Vindo ao </span><span>Site das mamãs</span></h1>
<Carrosel/>
<h3> Faça seu planeamento neste momento tão IMPORTANTE!</h3>
<LinkBtn to='/Planeamento' text='Criar Planeamento'/>

  </section>
  <Card/>
  <Comentario/>
  
  </div>)
}
export default Home