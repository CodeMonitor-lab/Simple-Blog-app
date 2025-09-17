import React from 'react'
import Styles from '../../Styles/Admin.module.css'
// import { Sidebar } from '../../Components/index'
import useAuth from '../../Context/AuthContext'

const Admin = () => {
  const {
    isAuthanticated,
    setIsAuthanticated,
    loadding,
    setLoading
  } = useAuth()

  const AdminLogin = (event)=>{
    console.log("Login Sucess")
    if(!isAuthanticated){
      
    }
  }
  const AdminLogout = ()=>{
    if(isAuthanticated){
      console.log("Logout..")
    }
  }

  return (
    <>
      <h1>Admin login page</h1>
      <p>Please Login to access Dashboard</p>
      <main className={Styles.Admin_Containe}>
        {loadding ? (<p>Loadding</p>) : (<>
        {!isAuthanticated ? (
          <button type="submit" onClick={AdminLogin} >Login</button>
        ) : (
          <button type="submit" onClick={AdminLogout} >Logout</button>
        ) }
        </>
      ) }

      </main>
    </>
  )
}

export default Admin
