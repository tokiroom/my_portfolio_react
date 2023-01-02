import React from 'react'
import Social from '../social/Social'
import handSVG from "./waving-hand.svg"


import "./home.css"
export default function Home() {
  return (
    <section className="home section" id='home'>
        <div className="home__container">
            <div className="home__social">
                <Social/>
            </div>
            <div className="home__data">
                <h1 className="home__title">Oleksandr Kotliar <img src={handSVG} alt="" /></h1>
                <h3 className="home__subtitle">Web Developer</h3>
                <p className="home__description">I'm resourceful web developer from Ukraine, and I'm very passionate and dedicated to my work.</p>
                <a href="#contact" className="btn home__button">Say Hello <i className='icon icon-compass'></i></a>
            </div>
            <div className="home__img"></div>
        </div>
    </section>
  )
}
