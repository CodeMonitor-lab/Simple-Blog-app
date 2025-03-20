import React from 'react'
import Styles from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className={Styles.Header_container}>
      <div className={Styles.Header_section}>
      <main className={Styles.Navbar_items}>
        {/*  */}
        <div className={Styles.logo}><h1>CodeMonitor</h1></div>
        {/*  */}
        <div className={Styles.Header_links}>
        <ul className={Styles.links}>
          <NavLink to='/' > <li className={Styles.redirect_links} >Home</li></NavLink>
          <NavLink to='/' > <li className={Styles.redirect_links} >About</li></NavLink>
          <NavLink to='/' > <li className={Styles.redirect_links} >Contact</li></NavLink>
          <NavLink to='/' > <li className={Styles.redirect_links} >Portfolio</li></NavLink>
        </ul>
        </div>
        {/*  */}
       <div className={Styles.Auth_links}>
       <ul className={Styles.Auths}>
        <NavLink to='/Login' ><button  className={Styles.Auth_Navigate} type="submit">Login</button></NavLink>
        <NavLink to='/SignUp' ><button  className={Styles.Auth_Navigate} type="submit">SignUp</button></NavLink>
        </ul>
       </div>
       {/*  */}
      </main>
      </div>
    </div>
    </>
  )
}

export default Header
