import React from 'react'
import Styles from './Footer.module.css'
import {NavLink} from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa6";
import {SocialIcons} from '../../index'

const Footer = () => {
  return (
    <>
    <main className={Styles.Footer_Container}>
        <h1 style={{paddingTop:'2rem',color:"#fff",fontSize:"2.5rem",textAlign:"center",fontFamily:'sans-serif'}} >Our Services</h1>
      <section className={Styles.Footer_Section}>
        <ul className={Styles.Footer_links}>
          <NavLink  to='/!' ><li>Portfolio</li></NavLink>
          <NavLink  to='/' ><li>About</li></NavLink>
          <NavLink  to='/' ><li>Services</li></NavLink>
          <NavLink  to='/' ><li>Contact us</li></NavLink>
        </ul>
        {/* Social icons */}
        <SocialIcons/>
      </section>
      {/* Footer CopyRight */}
      <section className={Styles.Footer_Rights}>
        <span>&copy;2025 MySite, All Right Reserved</span>
      </section>
    </main>
    </>
  )
}

export default Footer
