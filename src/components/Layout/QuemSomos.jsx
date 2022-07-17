import './QuemSomos.css'
import {FaPhone,FaEnvelopeOpenText,FaMapMarkerAlt} from 'react-icons/fa'

function QuemSomos(){
  return (
  <div className='all'>
  <div className="body">
<h1>Site das Mamãs</h1>

<p>Nasceu o primeiro centro tudo em um para grávidas, mães, mulheres e filhos.</p>

<p>Porque ser mãe não implica deixar de ser mulher. E sabemos bem, que nos primeiros meses, isso se torna muito difícil, devido a toda a logística inerente a ter um bebé que depende de si 24 horas por dia.</p>

<p>Além de cuidarmos das mães e das mulheres, também cuidamos do seu filho, com atividades lúdicas, consultas especializadas, baby spa, massagens e tantos outros serviços que vai descobrir no nosso centro!</p>
</div>
<div  className='nav'><p className='contact'>Contacto: 218 213 573         <FaPhone/></p></div>
<div className='nav'><p className='email'>Email: sitemamaes@gmail.com         <FaEnvelopeOpenText/></p></div>
<div className='nav'><p className='email'>Av. Lisberdade n 253 - Lisboa         <FaMapMarkerAlt/></p></div>
</div>
  )
}
export default QuemSomos