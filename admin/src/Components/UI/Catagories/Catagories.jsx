import React from 'react'
import Styles from './Catagories.module.css'
import images from '../../../assets/Home.jpg'
import images2 from '../../../assets/rainbow.jpg'
import images3 from '../../../assets/ReadMore.jpg'

const Catagories = () => {
  const data = {
     heading : "Contribution of General blogs",
     para:"Hello I am FullStack Developer and building a modern look Scalabale,easy to maintain and best User experience WebsiteI am FullStack Developer and building a modern look Scalabale,easy to maintain and best User experience Website"
  }

  return (
  <>
  <main className={Styles.Catagories_Container}>
  <section className={Styles.Image_Section}>
        {/* <h1>Catagories</h1> */}
        <img src={images} className={Styles.Food} alt="" />
        <img src={images2} className={Styles.Fitness} alt="" />
        <img src={images3} className={Styles.Tech} alt="" />
        <img src={images3} className={Styles.Tech} alt="" />
      </section>
    <section className={Styles.Catagories_Section}>
      <article className={Styles.Catagories_Article} >
        <h1 className={Styles.Catagory_h1} >{data.heading}</h1>
        <p className={Styles.Catagories_para} >{data.para}</p>
        <button className={Styles.AllBlogs_btn} type="submit">Read Blogs</button>
      </article>
    </section>
      {/*  */}
  </main>
  </>
  )
}

export default Catagories
