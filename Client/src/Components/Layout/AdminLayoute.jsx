import React from 'react'
import {Sidebar,Navbar} from '../index'
import {Dashboard} from '../../pages/index'
import {Admin} from '../../pages/index'
import { Outlet } from 'react-router-dom'
import Styles from './AdminLayoute.module.css'

const AdminLayoute = () => {
  return (
    <main className={Styles.AdminLayoute} >
         <Sidebar/>
         <section>
         <Navbar/>
         <Dashboard/>
         </section>
    </main>
  )
}

export default AdminLayoute
