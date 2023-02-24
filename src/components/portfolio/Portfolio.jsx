import {React, useState} from 'react'
import "./portfolio.css"

export default function Portfolio() {
    const portfolioItem = [
        {
            id: '1',
            сategory: 'Sait',
            name: 'Konstruct',
            img: '../img/projects/construct.jpg',
            link: 'https://tokiroom.github.io/konstruct/?version=f36af92',
        },
        {
            id: '2',
            сategory: 'Sait',
            name: 'DudeShape',
            img: '../img/projects/construct.jpg',
            link: '/',
        },
        {
            id: '3',
            сategory: 'Parallax',
            name: 'Horizontal-parallax-scrolling',
            img: '../img/projects/horizontal-parallax.jpg',
            link: '../Horizontal-parallax-scrolling/index.html',
        },
        {
            id: '4',
            сategory: 'Parallax',
            name: 'Cool-gallery-miami',
            img: '../img/projects/cool-gallery-miami.jpg',
            link: '../Cool-gallery-miami/index.html',
        },
        {
            id: '5',
            сategory: 'Sait',
            name: 'Attorneyster',
            img: '../img/projects/attorneyster.jpg',
            link: '../Attorneyster/index.html',
        },
        {
            id: '6',
            сategory: 'Parallax',
            name: 'Creative-scroll-website',
            img: '../img/projects/creative-scroll-website.jpg',
            link: '../Creative-scroll-website/index.html',
        },
    ]
    const [portflioTab, setTab] = useState('all')
    const portfolio = portflioTab == 'all' ? portfolioItem : portfolioItem.filter(item => item.сategory == portflioTab)

    return (

        <section className="section portfolio" id='portfolio'>
            <div className="portfolio__container">
                <h2 className="section__title">Portfolio</h2>
                <span className="section__subtitle">Most recent work</span>
                <div className="portfolio__tabs">
                    <ul className="tabs__list">
                        <li className="tab_link">
                            <button className={portflioTab === "all" ? "tab_btn active" : "tab_btn"} onClick={() => setTab('all')}>All</button>
                        </li>
                        <li className="tab_link">
                            <button className={portflioTab === "Sait" ? "tab_btn active" : "tab_btn"} onClick={() => setTab('Sait')}>Sait</button>
                        </li>
                        <li className="tab_link">
                            <button className={portflioTab === "Parallax" ? "tab_btn active" : "tab_btn"} onClick={() => setTab('Parallax')}>Parallax</button>
                        </li>
                    </ul>
                </div>
                <div className="portfolio__list">
                    {portfolio.map((item) => (
                        <div className="portfolio__item" key={item.id}>
                            <div className="preview__wrap">
                                <img src={item.img} alt="Portfolio Item" className="item__preview" />
                            </div>
                            <div className="item__title">{item.name}</div>
                            <a className="portfolio__item__btn" href={item.link} target="_blank">Demo <i className="icon-arrow-right2"></i></a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
