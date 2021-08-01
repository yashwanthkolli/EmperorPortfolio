import React, { useState, useEffect } from 'react'
import 'aos'

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
                <div data-aos="fade-up" data-aos-duration="1000">
                    <h1 className='heading'>WE ARE EMPEROR</h1>
                    <div className='underline'></div>
                </div>
                <p className='text' data-aos="fade-up" data-aos-duration="1000">{aboutUs}</p>
                <div className='img-container' data-aos="fade-up" data-aos-duration="1000">
                    <img src={aboutUsData.ourVisionImg} alt='Our Vision' />
                </div>
                <div className='our-vision'>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <h1 className='heading'>OUR VISION</h1>
                        <div className='underline'></div>
                    </div>    
                    <p className='text' data-aos="fade-up" data-aos-duration="1000">{ourVision}</p>
                </div>
            </div>
            <div className='scroll scroll-our-vision scroll-buttom-left scroll-dark'>
                We Aim At Perfection
            </div>
        </div>
    )
}

export default AboutUsSection
