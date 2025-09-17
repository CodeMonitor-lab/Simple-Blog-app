import { useState } from 'react'
// Layoutes
import {AppLayout,AdminLayoute} from './Components/index'
// Routes
import AppRoutes from './Routes/AppRoute'
// import AdminRoutes from './Routes/AdminRoutes'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'
import AppRoute from './Routes/AppRoute'

function App() {
  return (
    <>
    <AppRoute/>
    </>
  )
}

export default App
