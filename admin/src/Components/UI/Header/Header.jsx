import React from 'react'
import Styles from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <main className={Styles.Navbar_items}>
        <section className={Styles.Header_links}>
        <ul className={Styles.links}>
          <NavLink><li>Home</li></NavLink>
          <NavLink><li>About</li></NavLink>
          <NavLink><li>About</li></NavLink>
          <NavLink><li>About</li></NavLink>
        </ul>
        </section>
      </main>
    </>
  )
}

export default Header
