import React from 'react'
import 'aos'

import './ServiceCard.Styles.scss'
import { Link } from 'react-router-dom'

const ServiceCard = ({service}) => {
    return (
        <Link to={`/service/${service.url}`} data-aos="fade-up" data-aos-duration="1000" className='service-card'>
            <img src={service.img1} alt={service.name} />
            <h1 className='card-heading'>{service.name}</h1>
            <div className='card-content'>
                <div className='text'>
                    <p>{service.info}</p>
                </div>
            </div>
        </Link>
    )
}

export default ServiceCard