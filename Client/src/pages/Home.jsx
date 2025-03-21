import React from 'react'
import Styles from '../Styles/Home.module.css'
import { Hero_Section} from '../Components/index'
import {Login,SignUp} from '../pages/index'

const Home = () => {
    return (
        <div>
            <div className={Styles.Home_Container}>
                <div className={Styles.Hero_Section}>
                <Hero_Section />
                </div>
                <div className={Styles.login_Section}>
                </div>
            </div>
        </div>
    )

}

export default Home
