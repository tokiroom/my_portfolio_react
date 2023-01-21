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
                <div className="data__wrapper">
                    <div className="data__item">
                        <i className='icon-star-half'></i>
                        <h3 className='item__title'>Experience</h3>
                        <span className='item__discription'>3+ Years</span>
                    </div>
                    <div className="data__item">
                        <i className='icon-paste'></i>
                        <h3 className='item__title'>Completed</h3>
                        <span className='item__discription'>31+ Project</span>
                    </div>
                    <div className="data__item">
                        <i className='icon-bubbles3'></i>
                        <h3 className='item__title'>Support</h3>
                        <span className='item__discription'>Online 24/7</span>
                    </div>
                </div>
                <p className="about__info">
                    Frontend developer, I created web pages with UI/UX user interface, I have years of experience and many clients are happy with the projects carried out.
                </p>
                
                <a href={CV} className="btn about__button" download>Download CV <i className='icon-file-text2'></i></a>
            </div>
        </div>
    </section>
  )
}
