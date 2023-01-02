import React from 'react'
import "./portfolio.css"

export default function Portfolio() {
    const portfolioItem = [
        {
            id: '1',
            name: 'Konstruct',
            img: '../img/projects/construct.jpg',
            link: '#',
        },
        {
            id: '2',
            name: 'DudeShape',
            img: '../img/projects/construct.jpg',
            link: '#', 
        }
    ]
  return (
    
      <section className="section portfolio" id='portfolio'>
          <div className="portfolio__container">
              <h2 className="portfolio__title">Portfolio</h2>
              <span className="section__subtitle">Most recent work</span>
              <div className="portfolio__list">
                  {portfolioItem.map((item) => (
                      <div className="portfolio__item" key={item.id}>
                          <img src={item.img} alt="Portfolio Item" className="item__preview" />
                          <div className="item__title">{item.name}</div>
                          <a href={item.link} className="">Demo <i className="icon-arrow-right2"></i></a>
                      </div>
                  ))}
              </div>
          </div>
      </section>
  )
}
