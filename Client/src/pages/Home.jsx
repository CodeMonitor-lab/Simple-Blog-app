import React from 'react'
import Styles from '../Styles/Home.module.css'
import { Hero_Section,Cards} from '../Components/index'
import {Login,SignUp} from '../pages/index'

const Home = () => {
    return (
        <div>
            <div className={Styles.Home_Container}>
                <div className={Styles.Hero_Section}>
                <Hero_Section />
                <h1>Releted Post</h1>
                <Cards/>
                </div>
                <div className={Styles.login_Section}>
                </div>
            </div>
        </div>
    )

}

export default Home
