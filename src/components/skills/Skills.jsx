import React from 'react'
import './scills.css'

export default function Skills() {
  return (
    <section className="section skills" id='skills'>
        <div className="skills__container">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical level</span>
            <div className="skills__data">
                <ul className="data__list frontend">
                    <li className="list__item"><i className="icon-checkmark"></i> HTML</li>
                    <li className="list__item"><i className="icon-checkmark"></i> CSS</li>
                    <li className="list__item"><i className="icon-checkmark"></i> JavaScript</li>
                    <li className="list__item"><i className="icon-checkmark"></i> Bootstrap/Tailwind</li>
                    <li className="list__item"><i className="icon-checkmark"></i> React</li>
                    <li className="list__item"><i className="icon-checkmark"></i> Material-UI</li>
                </ul>
                <ul className="data__list backend">
                    <li className="list__item"><i className="icon-checkmark"></i> SQL/MySQL</li>
                    <li className="list__item"><i className="icon-checkmark"></i> Git</li>
                    <li className="list__item"><i className="icon-checkmark"></i> PHP (beginner level)</li>
                    <li className="list__item"><i className="icon-checkmark"></i> Node Js/Express (beginner level)</li>
                    <li className="list__item"><i className="icon-checkmark"></i> Python (beginner level)</li>
                    <li className="list__item"><i className="icon-checkmark"></i> WordPress/Joomla</li>
                </ul>
            </div>
        </div>
    </section>
  )
}
