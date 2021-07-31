import React from 'react'
import 'aos'

import './GallerySection.Styles.scss'

const GallerySection = () => {
    return (
        <div className='gallery-section'>
            <div className='scroll scroll-top-right scroll-dark'>Recent Work</div>
            <div data-aos="fade-up" data-aos-duration="1000">
                <h1 className='heading'>GALLERY</h1>
                <div className='underline'></div>
            </div>
        </div>
    )
}

export default GallerySection