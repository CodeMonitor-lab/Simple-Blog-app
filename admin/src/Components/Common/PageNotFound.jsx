import React from 'react'
import { Navigate, NavLink } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div>
      <h1 style={{color:'red',fontFamily:'sans-serif',textAlign:'center'}} > 404 Page Not Found!</h1>
      <NavLink to='/'><button type="submit">Go Back</button></NavLink>
    </div>
  )
}

export default PageNotFound
