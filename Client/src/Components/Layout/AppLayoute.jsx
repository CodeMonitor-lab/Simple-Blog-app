import React from 'react'
import {Header,Footer} from '../index'
import { Outlet } from 'react-router-dom'

const AppLayoute = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default AppLayoute
