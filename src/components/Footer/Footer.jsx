import React from 'react'
import Social from '../social/Social'
import './footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <h1 className="footer__title">Tokiroom</h1>
                <ul className="footer__list">
                    <li><a className="footer__link" href="#about">About</a></li>
                    <li><a className="footer__link" href="#portfolio">Projects</a></li>
                    <li><a className="footer__link" href="#testimonal">Testimonials</a></li>
                </ul>
                <div className="footer__social">
                    <Social />
                </div>
                <div className="footer__copywriting">
                    <p>&#169; Tokiroom 2022. All rights reserved.</p>
                </div>
            </div>
        </footer>

    )
}
