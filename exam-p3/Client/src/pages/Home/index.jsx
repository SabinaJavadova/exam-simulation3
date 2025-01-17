import React from 'react'
import style from "./index.module.scss"
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <>
  <Helmet>
    <title>Home Page</title>
  </Helmet>
    <div className={style["letter"]}>
    <div className={style["words"]}>

    <p>Spring / Summer Collection 2017</p>
    <h3>Get up to 30% Off New Arrivals</h3>
    <div className="button">

    <button>SHOP NOW</button>
    </div>
    </div>
    </div>

    </>
  )
}

export default Home