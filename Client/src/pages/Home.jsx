import React from 'react'
import Styles from '../Styles/Home.module.css'
import { Hero_Section } from '../Components/index'

const Home = () => {
    return (
        <div>
            <div className={Styles.Home_Container}>
                <Hero_Section />
                <h1 className={Styles.Home_Section} >Home page</h1>
            </div>
        </div>
    )

}

export default Home
