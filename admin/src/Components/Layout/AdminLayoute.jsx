import React from 'react'
import { Outlet } from 'react-router-dom'
import {Sidebar,Navbar} from '../index'
// Admin
import {Dashboard} from '../../pages/Admin/index'
import Styles from './AdminLayoute.module.css'

const AdminLayoute = () => {
  return (
    <main className={Styles.AdminLayoute} >
         <Sidebar/>
         {/*  */}
         <section>
         <Navbar/>
         {/* <Dashboard/> */}
         <Outlet />
         </section>
    </main>
  )
}

export default AdminLayoute
