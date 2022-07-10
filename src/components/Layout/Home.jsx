import './Home.css'
import img5 from '../img/img5.jpg'
import LinkBtn from '../Form/LinkBtn'


function Home(){
  return (
    <section className="container">
<h1>Bem-Vindo ao <span>Site das mamaes</span></h1>
<h3> Faça seu planeamento neste momentao tão IMPORTANTE!</h3>
<LinkBtn to='/Planeamento' text='Criar Planeamento'/>
<img src={img5} alt='mamaes'></img>

  </section>)
}
export default Home