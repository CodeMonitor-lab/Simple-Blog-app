import React from 'react'
import { NavLink } from 'react-router-dom'
import Styles from './SocilaIcons.module.css'
// Icons
import { FaFacebookF} from 'react-icons/fa6'
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const SocialIcons = () => {
  return (
   <>
    <section className={Styles.SocialIcons_Section}>
    <ul className={Styles.Footer_Icons} >
    <NavLink to='#!' ><span  className={Styles.Facebook} ><FaFacebookF/></span></NavLink>
    <NavLink to='#!' ><span  className={Styles.Instgram} ><FaInstagram/></span></NavLink>
    <NavLink to='#!' ><span  className={Styles.Linkdin} ><FaLinkedinIn/></span></NavLink>
    <NavLink to='#!' ><span  className={Styles.Twitter} ><BsTwitterX/></span></NavLink>
    </ul>    
    </section>
   </>
  )
}

export default SocialIcons
