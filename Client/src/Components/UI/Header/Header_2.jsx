import React, { useState } from 'react'
import Styles from './Header_2.module.css'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";

const Header_2 = () => {
  const [showMenu,setShowMenu] = useState(false);
  const [loading,setLoading] = useState(true);

  const handleToggleMenu = ()=>{
    setShowMenu(!showMenu);

  }
   
  return (
    <>
      <header className={Styles.Container} >
        <div className={Styles.Navbar_Container}>
          <div className={`${Styles.grid} ${Styles.Navbar_grid}`}>
            {/*  */}
            <div className={Styles.logo}><h1>CodeMonitor-lab</h1></div>
            {/*  */}
            <nav className={showMenu ? `${Styles.Menu_mobile}` :` ${Styles.Web_menu}`}>
              <ul>
                <NavLink to='/' ><li>Home</li></NavLink>
                <NavLink to='/Tech' ><li>Tech</li></NavLink>
                <NavLink to='/Fitness' ><li>Fitness</li></NavLink>
                <NavLink to='/Food' ><li>Food</li></NavLink>
                <NavLink to='/Login' ><li>Login</li></NavLink>
                <NavLink to='/Register' ><li>Register</li></NavLink>
                <NavLink to='/Register' ><li>Admin</li></NavLink>
              </ul>
            </nav>
            {/*  */}
            <div className={Styles.Nav_Hamburger}>
              <button className={Styles.menu} onClick={handleToggleMenu} >
              <GiHamburgerMenu/>
              </button>
            </div>
            {/*  */}
          </div>
        </div>
      </header>
    </>
  )
}

export default Header_2

