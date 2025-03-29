import React from 'react'
import Styles from './Sidebar.module.css'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
      <main className={Styles.Admin_Sidebar} >
        <div className={Styles.Sidebar_heading}>
        <h1>Dashboard</h1>
        </div>
        <div className={Styles.Sidebar_Section}>
            <div className={Styles.Sidebar_links}>
                <NavLink><li>Dashboard</li></NavLink>
                <NavLink><li>Catagory</li></NavLink>
                <NavLink><li>All Posts</li></NavLink>
                <NavLink><li>Manage Posts</li></NavLink>
                <NavLink><li>Settings</li></NavLink>
            </div>
        </div>
    </main>
  )
}

export default Sidebar
