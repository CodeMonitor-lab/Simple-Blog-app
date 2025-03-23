// import Styles from '../Styles/Login.module.css'
import { useState,useEffect } from 'react'
import Styles from '../Styles/SignUp.module.css'
import {NavLink} from 'react-router-dom'
import LoginImage from '../assets/Login.png'
import { toast } from 'react-toastify'
import axios from 'axios'

const Login = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
 
   const loginValidation = (event)=>{
      if(!email.trim() && !password.trim()){
        toast.warn('All Filed Required')
        return false
      }
      if(!email.trim()){
        toast.warn('Email Required');
        return false
      }
      if(!password.trim()){
        toast.warn('password Required');
        return false
      }
      return true
    }
    // handle login
    const handleOnLogin = async(event)=>{
      event.preventDefault();
      if(loginValidation()){
        return;
      }
      const loginData ={
        email,
        password,
      }
      try{
        const response = await axios.post(`http://127.0.0.1:8000/login`,loginData)
        if(response.status === 200){
          toast.success("Login Sucess");      
        }
  
      }catch(error){
        console.log(error)
        if(error.response){
          const status = error.response.status;
          if(status=== 401){
            toast.warn('Invalid email or password')
          }
          else if(status === 500){
            toast.error("Internal-Server-Error!");
          }
          else if(status === 422){
            console.log(error.response.data.message)
            
          }
          else{
            toast.error('Something went Wrong')
          }  
          // console.log(error.response.data.message)
          console.log(error)
        }else{
          toast.error('Network Error or Timeout')
        }
      }
    }

  return (
  <>
    <main className={Styles.Login_Container}>
      <section className={Styles.Login_Section}>
        <div className={Styles.Login_Form}>
          <form onSubmit={handleOnLogin} action="#!" className={Styles.Form}>
            <h1 className={Styles.heading1} >{'<<<'}Connect with us!{'>>>'}</h1>
            {/* <input type="text" name="name" placeholder='Name' /> */}
            <input type="email" name="email" placeholder='Email' />
            <input type="password" name="password" placeholder='Password' />
            <NavLink to='/Register'><li>Create an Account!</li></NavLink>
            <button className={Styles.Login_Button} type="submit">Login</button>
          </form>
        </div>
      </section>
      {/* image */}
      <div className={Styles.Login_Image}>
        <img src={LoginImage} alt="Login_banner" />
      </div>
    </main>
  </>

)

}

export default Login
