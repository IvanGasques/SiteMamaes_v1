import './Orcamento.css'
import img5 from '../img/img5.jpg'
import LinkBtn from './LinkBtn'


function Orcamento(){
  return (
    <section className="container">
<h1>Bem-Vindo ao <span>Site das mamaes</span></h1>
<h3> Faça seu planeamento neste momentao tão IMPORTANTE!</h3>
<LinkBtn to='/project' text='Criar Planeamento'/>
<img src={img5} alt='mamaes'></img>

  </section>)
}
export default Orcamento