import React from "react";
import "./Footer.css"
import {FaFacebook,FaInstagram, FaLinkedin} from 'react-icons/fa'

function Footer () {
  return(
  
     <footer ><div className="rodape"><ul className="social_list">
     <li><FaFacebook></FaFacebook></li>
     <li><FaInstagram></FaInstagram></li>
     <li><FaLinkedin></FaLinkedin></li>
     </ul> &copy;SiteMamaes.com</div></footer>
  )
}

export default Footer