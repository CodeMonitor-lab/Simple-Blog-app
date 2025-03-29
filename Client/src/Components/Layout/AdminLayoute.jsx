import React from 'react'
import {Dashboard} from '../index'
import {Admin} from '../../pages/index'
import { Outlet } from 'react-router-dom'
import Styles from './AdminLayoute'

const AdminLayoute = () => {
  return (
    <main className={Styles.AdminLayoute} >
      <Dashboard/>
      {/* <Admin/> */}
    </main>
  )
}

export default AdminLayoute
