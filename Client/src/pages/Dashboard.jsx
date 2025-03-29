import React from 'react'
import Styles from '../Styles/Dashboard.module.css'
import {Sidebar} from '../Components/index'

const Dashboard = () => {
  return (
    <>
    <main className={Styles.Dashboard_Container} >
         <Sidebar/>
       <h1>Dashboard</h1>
         {/* <Dashboard/> */}
     </main>
    </>
  )
}

export default Dashboard
