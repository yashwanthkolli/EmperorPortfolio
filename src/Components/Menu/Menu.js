import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { scroller } from 'react-scroll'
import { FiMail, FiPhone, FiFacebook, FiTwitter, FiLinkedin } from 'react-icons/fi'

import './Menu.Styles.scss'

const Menu = () => {
    const [open, setOpen] = useState(false)
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
    
    const handleClick = () => {
        const menuCheckbox = document.getElementById('checkbox')
        menuCheckbox.checked = !menuCheckbox.checked
        setOpen(menuCheckbox.checked)
        console.log(menuCheckbox.checked)
    }

    window.addEventListener('scroll', () => {
        const menu = document.getElementsByClassName('menu')[0]
        menu.classList.remove('visible')
        menu.classList.add('invisible')
        
        const menuCheckbox = document.getElementById('checkbox')
        menuCheckbox.checked = false
        setOpen(false)
    })

    return (
        <>
            <input id='checkbox' type='checkbox' className='checkbox' />
            <div className='menu-button' onClick={() => handleClick()}>
                <div className='icon-container'>
                    <span className={`menu-icon line-1 ${open ? null : 'animaiton'}`}>&nbsp;</span>
                    <span className={`menu-icon line-2 ${open ? null : 'animaiton'}`}>&nbsp;</span>
                    <span className={`menu-icon line-3 ${open ? null : 'animaiton'}`}>&nbsp;</span>
                </div>
            </div>
            <div className={`menu ${open ? 'visible' : 'invisible'}`}>
                <div className='menu-items'>
                    <Link className='menu-option' to='/#about-us-section'><span>About Us</span></Link>
                    <Link className='menu-option' to='/#services-section'><span>Services</span></Link>
                    <Link className='menu-option' to='/#gallery-section'><span>Gallery</span></Link>
                    <Link className='menu-option' to='/#map-section'><span>Location</span></Link>
                    <Link className='menu-option' to='/#contact-us-section'><span>Contact Us</span></Link>
                </div>
                <div className='menu-details'>
                    <div className='text'> Pellentesque lectus est, condimentum eu scelerisque vulputate, faucibus a magna. Proin faucibus quam a mattis aliquam. Vivamus non porta libero. Fusce vulputate, nisl </div>
                    <div className='links'>
                        <FiMail className='link' />
                        <FiPhone className='link' />
                        <FiFacebook className='link' />
                        <FiTwitter className='link' />
                        <FiLinkedin className='link' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu
