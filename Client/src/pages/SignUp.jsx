import {useState,useEffect} from 'react'
import Styles from '../Styles/SignUp.module.css'
import {NavLink} from 'react-router-dom'
import LoginImage from '../assets/Login.png'
import {toast} from 'react-toastify'
import axios from 'axios'

const SignUp = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const SignUpValidation = (event)=>{
    if(!name.trim() && !email.trim() && !password.trim()){
      toast.warn('All Filed Required')
      return false
    }
    if(!name.trim()){
      toast.warn('Name Required')
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

  // handle Submit my form
  const handleOnSubmitSignUp = async(event)=>{
    event.preventDefault();
    if(SignUpValidation()){
      return;
    }
    const userData ={
      name,
      email,
      password,
    }
    try{
      const response = await axios.post(`http://127.0.0.1:8000/signup`,userData)
      if(response.status === 201){
        toast.success("SignUp Sucess");      
      }

    }catch(error){
      console.log(error)
      if(error.response){
        const status = error.response.status;
        if(status=== 409){
          toast.warn('User already Exists')
        }
        else if(status === 500){
          toast.error("Internal-Server-Error!");
        }
        else if(status === 422){
          // console.log(error.data.message)
          
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
          <form onSubmit={handleOnSubmitSignUp} className={Styles.Form}>
            <h1 className={Styles.heading1} >{'<<<'}Create an Account{'>>>'}</h1>
            <input value={name} onChange={((event)=>setName(event.target.value))} type="text" name="name" placeholder='Name' />
            <input value={email} onChange={((event)=>setEmail(event.target.value))} type="email" name="email" placeholder='Email' />
            <input value={password} onChange={((event)=>setPassword(event.target.value))} type="password" name="password" placeholder='Password' />
            <NavLink to='/Login'><li>Already have an account!</li></NavLink>
            <button className={Styles.Login_Button} type="submit">Register</button>
          </form>
        </div>
      </section>
      {/* image */}
      <div className={Styles.Login_Image}>
        <img src={LoginImage} alt="" />
      </div>
    </main>
  </>

)
}

export default SignUp
