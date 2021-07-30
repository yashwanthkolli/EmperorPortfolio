import React, { useState, useEffect } from 'react'

import aboutUsData from '../../Assets/AboutUsSection/AboutUs.Data'

import './AboutUsSection.Styles.scss'

const AboutUsSection = () => {
    const [aboutUs, setAboutUs] = useState('')
    const [ourVision, setOurVision] = useState('')
    useEffect(() => {
        setAboutUs(aboutUsData.aboutUs)
        setOurVision(aboutUsData.ourVision)
    }, [])
    return (
        <div className='about-us-section'>
            <div className='scroll scroll-hello scroll-top-right scroll-dark'>
                <span>Hello there</span>
            </div>
            <div className='content'>
                <h1 className='heading'>WE ARE EMPEROR</h1>
                <div className='underline'></div>
                <p className='text'>{aboutUs}</p>
                <div className='img-container'>
                    <img src={aboutUsData.ourVisionImg} alt='Our Vision' />
                </div>
                <div className='our-vision'>
                    <h1 className='heading'>OUR VISION</h1>
                    <div className='underline'></div>
                    <p className='text'>{ourVision}</p>
                </div>
            </div>
            <div className='scroll scroll-our-vision scroll-buttom-left scroll-dark'>
                What We View
            </div>
        </div>
    )
}

export default AboutUsSection
