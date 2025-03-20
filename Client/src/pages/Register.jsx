import React, { useState } from 'react'
import {Login,SignUp} from '../Components/index'

const Register = () => {
  const [Show,setShow] = useState(false)
  const togglehandle =()=>{
    setShow(!Show);
  }
  return (
    <div>
      {/* <h1>Register</h1> */}
      <h1>https://www.youtube.com/watch?v=JN8I7AybR2k&t=1433s</h1>
      <Login/>
      <button onClick={togglehandle} >Toggle</button>
      {Show? "Show" : "Hide" }
    </div>
  )
}

export default Register
