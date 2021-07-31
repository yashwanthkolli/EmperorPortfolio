import React from 'react'
import { FiMail, FiPhone, FiFacebook, FiTwitter, FiLinkedin } from 'react-icons/fi'

import './ContactUsSection.Styles.scss'

const ContactUsSection = () => {
    return (
        <>
            <div className='contact-us-section'>
                <div className='scroll scroll-top-left scroll-light'>Reach Out To Us</div>
                <div  data-aos="fade-up" data-aos-duration="1000">
                    <h1 className='heading'>CONTACT US</h1>
                    <div className='underline'></div>
                </div>
                <div className='content' data-aos="fade-up" data-aos-duration="1000">
                    <div className='address'>
                        <h3>Where To Find Us</h3>
                        <p>8C8W+4XW - Industrial AreaIndustrial Area 13, <br />Sharjah, United Arab Emirates</p>
                    </div>
                    <div className='contact'>
                        <div className='mail'>
                            <h3>Mail Us At</h3>
                            <p>hello@mail.com</p>
                        </div>
                        <div className='phone'>
                            <h3>Call Us At</h3>
                            <p>+971 50 382 8962</p>
                        </div>
                    </div>
                </div>
                <div className='links'>
                    <FiMail className='link' />
                    <FiPhone className='link' />
                    <FiFacebook className='link' />
                    <FiTwitter className='link' />
                    <FiLinkedin className='link' />
                </div>
            </div>
            <div className='footer'></div>
        </>
    )
}

export default ContactUsSection