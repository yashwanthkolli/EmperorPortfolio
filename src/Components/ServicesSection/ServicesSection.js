import React from 'react'
import 'aos'

import servicesData from '../../Assets/ServicesSection/Services.Data'
import ServiceCard from '../ServiceCard/ServiceCard'

import './ServicesSection.Styles.scss'

const ServicesSection = () => {
    return (
        <div className='services-section'>
            <div className='scroll scroll-top-left scroll-light'>
                <span>What We Do</span>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
                <h1 className='heading'>OUR SERVICES</h1>
                <div className='underline'></div>
            </div>
            <h1 className='heading-secondary' data-aos="fade-up" data-aos-duration="1000">Industrial Services</h1>
            <div className='cards-container'>
                {
                    servicesData.slice(0, 5).map((service) => <ServiceCard key={service.id} service={service} />)
                }
            </div>
            <h1 className='heading-secondary' data-aos="fade-up" data-aos-duration="1000">Marine Services</h1>
            <div className='cards-container container-2'>
                {
                    servicesData.slice(5, 8).map((service) => <ServiceCard key={service.id} service={service} />)
                }
            </div>
            <div className='scroll scroll-light scroll-buttom-right'>We Love What We Do</div>
        </div>
    )
}

export default ServicesSection