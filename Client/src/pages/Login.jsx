import Styles from '../Styles/Login.module.css'
import {NavLink} from 'react-router-dom'
import LoginImage from '../assets/Login.png'

const Login = () => (
  <>
    <main className={Styles.Login_Container}>
      <section className={Styles.Login_Section}>
        <div className={Styles.Login_Form}>
          <form action="#!" className={Styles.Form}>
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
        <img src={LoginImage} alt="" />
      </div>
    </main>
  </>


)

export default Login
