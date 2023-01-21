import React from 'react'
import {useState} from 'react'
import './navbar.css'

export default function Navbar() {
const [Toggle, showMenu] = useState(false) 
  return (
    <div className='navbar'>
        <div className={Toggle ? "navbar__container show-menu" : "navbar__container"}>
            <a href="index.html" className="brand">
                <span className="sait-name">Tokiroom</span>
                {/* <img src="" alt="logo" className="logo" /> */}
            </a>
            <button className="toggle-nav" onClick={() => showMenu(!Toggle)}> <span></span> </button>
            <nav className="nav__menu flex">
                <a href="#home" className="nav__link active-link"><i className='icon icon-home'></i>Home</a>
                <a href="#about" className="nav__link"><i className='icon icon-user'></i>About</a>
                <a href="#skills" className="nav__link"><i className='icon icon-profile'></i>Skills</a>
                <a href="#services" className="nav__link"><i className='icon icon-briefcase'></i>Services</a>
                <a href="#portfolio" className="nav__link"><i className='icon icon-stack'></i>Portfolio</a>
                <a href="#contact" className="nav__link"><i className='icon icon-compass' disabled></i>Contact</a>
            </nav>
        </div>       
    </div>
  )
}
