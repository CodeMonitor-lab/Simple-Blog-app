import React, { useState } from 'react'
import {Login,SignUp} from '../Components/index'

const Register = () => {
  const [Show,setShow] = useState(false)
  const togglehandle =()=>{
    setShow(!Show);
  }
  return (
    <div>
      <Login/>
    </div>
  )
}

export default Register
