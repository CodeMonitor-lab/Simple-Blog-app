import React from 'react'
import {Header,Footer,Header_2} from '../index'
import Styles from './AppLayoute.module.css'
import { Outlet } from 'react-router-dom'

const AppLayoute = () => {
  return (
    <main className={Styles.layoute_container} >
       <Header_2/>
     <section className={Styles.app_layoute}>
       {/* <Header/> */}
      <Outlet/>
     </section>
      <Footer/>
    </main>
  )
}

export default AppLayoute
