import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { scroller } from 'react-scroll'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { FaFax } from 'react-icons/fa'

import './Menu.Styles.scss'

const Menu = () => {
    const [open, setOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        document.body.style.overflow = 'visible'
        setOpen(false)
        const menuCheckbox = document.getElementById('checkbox')
        if(menuCheckbox) menuCheckbox.checked = false
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
    
    const handleClick = () => {
        const menuCheckbox = document.getElementById('checkbox')
        menuCheckbox.checked = !menuCheckbox.checked
        setOpen(menuCheckbox.checked)
        document.body.style.overflow = menuCheckbox.checked ? "hidden" : "visible"
    }

    return (
        <>
            <input id='checkbox' type='checkbox' className='checkbox' />
            <div className='menu-button' onClick={() => handleClick()} style={{position: open ? 'fixed' : 'absolute'}}>
                <div className='icon-container'>
                    <span className={`menu-icon line-1 ${open ? null : 'animaiton'}`}>&nbsp;</span>
                    <span className={`menu-icon line-2 ${open ? null : 'animaiton'}`}>&nbsp;</span>
                    <span className={`menu-icon line-3 ${open ? null : 'animaiton'}`}>&nbsp;</span>
                </div>
            </div>
            <div className={`menu ${open ? 'visible' : 'invisible'}`}>
                <div className='menu-items'>
                    <Link className='menu-option' to='/'><span>Home</span></Link>
                    <Link className='menu-option' to='/#about-us-section'><span>About Us</span></Link>
                    <Link className='menu-option' to='/#services-section'><span>Services</span></Link>
                    <Link className='menu-option' to='/#gallery-section'><span>Gallery</span></Link>
                    <Link className='menu-option' to='/#map-section'><span>Location</span></Link>
                    <Link className='menu-option' to='/#contact-us-section'><span>Contact Us</span></Link>
                </div>
                <div className='menu-details'>
                    <div className='text'>Our team at Emperor aim to provide niche solutions to your engineering problems. We assure you of the highest quality services, business integrity, and cooperation.</div>
                    <div className='links'>
                        <a href='mailto:info@emperoreng.com' rel='noreferrer'>
                            <FiMail className='link' />
                        </a>
                        <a href='tel:0503828962' rel='noreferrer'>
                            <FiPhone className='link' />
                        </a>
                        <a href='https://maps.app.goo.gl/KzMGdqWkogRHqBqV6' target='_blanck' rel='noreferrer'>
                            <FiMapPin className='link' />
                        </a>
                        <a href='tel:+065593065' rel='noreferrer'>
                            <FaFax className='link' />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu
