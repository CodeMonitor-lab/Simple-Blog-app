import React from 'react'
import Styles from './Hero_Section.module.css'

const Hero_Section = ({text,para}) => {
  text = "Hello I am FullStack Developer and building a modern look Scalabale,easy to maintain best User experience Website"
  para = "Welecome to CodeMonitor-lab"

  return (
     <main className={Styles.Hero_container} >
      <section className={Styles.Hero_section}>
       <article className={Styles.Hero_article}>
       <h1>{para}</h1>
        <p>{text}</p>
        <button type="submit" className={Styles.Hero_button}>Register</button>
       </article>
      </section>
     </main>
  )
}

export default Hero_Section
