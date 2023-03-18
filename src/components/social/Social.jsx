import React from 'react'
import "./social.css"

export default function Social() {
  return (
      <React.Fragment>
          <a className="social-link" href="https://www.facebook.com/alexander.kotlyar.52" target="_blank">
              <i className='icon icon-facebook2'></i>
          </a>
          <a className="social-link" href="https://www.linkedin.com/in/oleksandr-kotliar-77bb92241/" target="_blank">
              <i className='icon icon-linkedin'></i>
          </a>
          <a className="social-link" href="https://github.com/tokiroom" target="_blank">
              <i className='icon icon-github'></i>
          </a>
      </React.Fragment>
  )
}
