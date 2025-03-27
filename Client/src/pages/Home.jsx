import React from 'react'
import Styles from '../Styles/Home.module.css'
import { Hero_Section,Catagories,Cards} from '../Components/index'
import {Login,SignUp} from '../pages/index'

const Home = () => {
    return (
        <>
            <main className={Styles.Home_Container}>
                <div className={Styles.Hero_section}>
                <Hero_Section />
                </div>
                {/*  */}
                <section className={Styles.Catagories_Section} >
                <h1>Blog Catagories</h1>
                <Catagories/>
                </section>
                {/*  */}
                <section className={Styles.Recently_Cards}>
                <h1>Recently Posts</h1>
                <Cards/>
                </section>
            </main>
        </>
    )

}

export default Home
