import React from 'react'
import { useParams, Link } from 'react-router-dom'
import servicesData from '../../Assets/ServicesSection/Services.Data'
import Menu from '../Menu/Menu'

import logoPng from '../../Assets/logo.png'
import logoWebp from '../../Assets/logo.webp'

import './ServicePage.Styles.scss'

const ServicePage = () => {
    const { serviceName } = useParams()
    const service = servicesData.find(service => service.url === serviceName)

    return (
        <div className='service-page'>
            <Menu />
            <Link to='/#services-section' className='logo-container'>
                <picture>
                    <source type="image/webp" srcSet={logoWebp} />
                    <source type="image/png" srcSet={logoPng} />
                    <img src={logoPng} alt="Emperor" />
                </picture>
            </Link>
            <div className='content'>
                <div className='images-container'>
                    <img className='img-2' src={service.img2} alt={service.name} />
                </div>
                <div className='text'>
                    <h1>{service.name}</h1>
                    <p>{service.info}</p>
                </div>
            </div>
            <Link to='/#services-section'><div className='scroll scroll-dark scroll-buttom-right'>Services</div></Link>
            <div className='footer'></div>
        </div>
    )
}

export default ServicePage