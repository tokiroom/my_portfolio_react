import React from 'react'
import "./about.css"
import MyFoto from "./avatar.jpg"
import CV from "./sv.pdf"

export default function About() {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My introduction</span>
        <div className="about__container">
            <img src={MyFoto} alt="My foto" className="about__img" />
            <div className="about__data">
                <div className="data__item">
                    <i className='icon-star-half'></i>
                    <h3>Experience</h3>
                    <span>3 Years Working</span>
                </div>
                <div className="data__item">
                    <i className='icon-paste'></i>
                    <h3>Completed</h3>
                    <span>31+ Project</span>
                </div>
                <div className="data__item">
                    <i className='icon-bubbles3'></i>
                    <h3>Support</h3>
                    <span>Online 24/7</span>
                </div>
                <a href={CV} className="btn about__button" download>Download CV <i className='icon-file-text2'></i></a>
            </div>
        </div>
    </section>
  )
}
