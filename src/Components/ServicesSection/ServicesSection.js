import React from 'react'

import servicesData from '../../Assets/ServicesSection/Services.Data'
import ServiceCard from '../ServiceCard/ServiceCard'

import './ServicesSection.Styles.scss'

const ServicesSection = () => {
    return (
        <div className='services-section'>
            <div className='scroll scroll-top-left scroll-light'>
                <span>What We Do</span>
            </div>
            <h1 className='heading'>OUR SERVICES</h1>
            <div className='underline'></div>
            <div className='cards-container'>
                {
                    servicesData.map((service) => <ServiceCard key={service.id} service={service} />)
                }
            </div>
            <div className='scroll scroll-light scroll-buttom-right'>We Love What We Do</div>
        </div>
    )
}

export default ServicesSection