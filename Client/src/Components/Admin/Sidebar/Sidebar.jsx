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
                <NavLink to='/Admin/Dashboard'><li>Dashboard</li></NavLink>
                <NavLink to='/Admin/Catagory'><li>Catagory</li></NavLink>
                <NavLink to='/'  ><li>All Posts</li></NavLink>
                <NavLink to='/'  ><li>Manage Posts</li></NavLink>
                <NavLink to='/'  ><li>Settings</li></NavLink>
            </div>
        </div>
    </main>
  )
}

export default Sidebar
