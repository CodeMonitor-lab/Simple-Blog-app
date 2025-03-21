import React from 'react'
import Styles from '../Styles/SignUp.module.css'
import {NavLink} from 'react-router-dom'
import LoginImage from '../assets/Login.png'

const Login = () => (
  <>
    <main className={Styles.Login_Container}>
      <section className={Styles.Login_Section}>
        <div className={Styles.Login_Form}>
          <form action="#!" className={Styles.Form}>
            <h1 className={Styles.heading1} >{'<<<'}Create an Account{'>>>'}</h1>
            <input type="text" name="name" placeholder='Name' />
            <input type="email" name="email" placeholder='Email' />
            <input type="password" name="password" placeholder='Password' />
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

export default Login
