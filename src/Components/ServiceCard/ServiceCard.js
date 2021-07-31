import React from 'react'
import 'aos'

import './ServiceCard.Styles.scss'

const ServiceCard = ({service}) => {
    return (
        <div data-aos="fade-up" data-aos-duration="1000" className='service-card' style={{backgroundImage: `linear-gradient(to bottom,rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.8)), url(${service.img1})`}}>
            <h1 className='card-heading'>{service.name}</h1>
            <div className='card-content'>
                <div className='text'>
                    <p>{service.info}</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard