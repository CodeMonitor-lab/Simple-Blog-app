import React from 'react'
import Styles from './Cards.module.css'
import ReadMore from '../../../assets/ReadMore.jpg'

const Cards = () => {
  return (
 <>
  <main className={Styles.Card_container} >
    <section className={Styles.Card_section}>
      <article className={Styles.Card_article}>
        <img src={ReadMore} alt="" />
        <h1 className= {Styles.Card_tittle} >How to host a Next.js app in Production on an Ubuntu VPS</h1>
        <p className={Styles.Card_para}>Learn how to deploy a Next.js application in a production environment on an Ubuntu VPS with this comprehensive guide. Follow step-by-step instructions to set up NGINX, PM2, and configure your Next.js app for seamless hosting.</p>
        <button className={Styles.card_btn}>Read</button>
      </article>
      {/*  */}
      <article className={Styles.Card_article}>
        <img src={ReadMore} alt="" />
        <h1 className= {Styles.Card_tittle} >How to host a Next.js app in Production on an Ubuntu VPS</h1>
        <p className={Styles.Card_para}>Learn how to deploy a Next.js application in a production environment on an Ubuntu VPS with this comprehensive guide. Follow step-by-step instructions to set up NGINX, PM2, and configure your Next.js app for seamless hosting.</p>
        <button className={Styles.card_btn}>Read</button>
      </article>
      {/*  */}
      <article className={Styles.Card_article}>
        <img src={ReadMore} alt="" />
        <h1 className= {Styles.Card_tittle} >How to host a Next.js app in Production on an Ubuntu VPS</h1>
        <p className={Styles.Card_para}>Learn how to deploy a Next.js application in a production environment on an Ubuntu VPS with this comprehensive guide. Follow step-by-step instructions to set up NGINX, PM2, and configure your Next.js app for seamless hosting.</p>
        <button className={Styles.card_btn}>Read</button>
      </article>
    </section>
  </main>
 </>
  )
}

export default Cards
