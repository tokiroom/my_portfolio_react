import React from 'react'
import "./social.css"

export default function Social() {
  return (
      <React.Fragment>
          <a className="social-link" href="#" target="_blank">
              <i className='icon icon-facebook2'></i>
          </a>
          <a className="social-link" href="#" target="_blank">
              <i className='icon icon-linkedin'></i>
          </a>
          <a className="social-link" href="#" target="_blank">
              <i className='icon icon-github'></i>
          </a>
      </React.Fragment>
  )
}
