import React from 'react'
import Styles from './Hero_Section.module.css'
import Hero from '../../../assets/Home.jpg'

const Hero_Section = ({text,para}) => {
  para = "Welecome to CodeMonitor-lab"
  text = "Hello I am FullStack Developer and building a modern look Scalabale,easy to maintain and best User experience Website"

  return (
     <main className={Styles.Hero_container} >
      <section className={Styles.Hero_section}>
       <article className={Styles.Hero_article}>
       <h1>{para}</h1>
        <p>{text}</p>
        <button type="submit" className={Styles.Hero_button}>Explore</button>
       </article>
      </section>
      <section className={Styles.Hero_img} >
        <img src={Hero} alt="" />
      </section>
     </main>
  )
}

export default Hero_Section
