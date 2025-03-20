import React from 'react'
import Styles from '../Styles/Home.module.css'
import { Hero_Section,Login,SignUp } from '../Components/index'

const Home = () => {
    return (
        <div>
            <div className={Styles.Home_Container}>
                <Hero_Section />
                <h1 style={{color:'blueviolet',textAlign:'center',fontFamily:'sans-serif',textDecoration:'underline 0.2rem'}} >Home Page</h1>
                <Login/>
                
            </div>
        </div>
    )

}

export default Home
