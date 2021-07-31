import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineDown } from 'react-icons/ai'
import { scroller } from 'react-scroll'
import 'aos'

import logoPng from '../../Assets/logo.png'
import logoWebp from '../../Assets/logo.webp'

import './LandingSection.Styles.scss'

const LandingSection = () => {
    const location = useLocation()

    useEffect(() => {
        if (location.hash) {
            scrollTo(location.hash.slice(1))
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
        }
    }, [location])

    const scrollTo = (section) => {
        scroller.scrollTo(section, {
            duration: 800,
            delay: 0,
            offset: 50,
            smooth: 'easeInOutQuart'
        })
    }

    return (
        <div className='landing-section'>
            <div className='logo-container'>
                <picture>
                    <source type="image/webp" srcset={logoWebp} />
                    <source type="image/png" srcset={logoPng} />
                    <img src={logoPng} alt="Emperor" />
                </picture>
            </div>
            <div className='text' data-aos="fade-up" data-aos-duration="1000" data-aos-delay='100'>
                <div className='welcome'>WELCOME TO EMPEROR</div>
                <div className='heading'>We are a creative group of well experienced people who provide marine and industrial services at compitative prices.</div>
                <Link className='nav-option' to='/#contact-us-section'>
                    <button className='button'>Contact Us</button>
                </Link>
            </div>
            <Link className='nav-option' to='/#about-us-section'>
                <div className='scroll scroll-buttom-right scroll-light'>
                    <span className='scroll-icon'><AiOutlineDown /></span> SCROLL DOWN
                </div>
            </Link>
        </div>
    )
}

export default LandingSection