import React from 'react'
import { AiOutlineDown } from 'react-icons/ai'

import logo from '../../Assets/logo.png'

import './LandingSection.Styles.scss'

const LandingSection = () => {
    return (
        <div className='landing-section'>
            <div className='logo-container'>
                <img src={logo} alt='EMPEROR' />
            </div>
            <div className='text'>
                <div className='welcome'>WELCOME TO EMPEROR</div>
                <div className='heading'>We are a creative group of well experienced people who provide marine and industrial services at compitative prices.</div>
                <button className='button'>Contact Us</button>
            </div>
            <div className='scroll scroll-buttom-right scroll-light'>
                <span className='scroll-icon'><AiOutlineDown /></span> SCROLL DOWN
            </div>
        </div>
    )
}

export default LandingSection