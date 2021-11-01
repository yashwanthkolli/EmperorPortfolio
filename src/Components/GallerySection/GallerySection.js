import React, { useState } from 'react'
import 'aos'

import image1 from '../../Assets/GallerySection/1.png'
import image2 from '../../Assets/GallerySection/2.png'
import image3 from '../../Assets/GallerySection/3.PNG'
import image4 from '../../Assets/GallerySection/4.png'
import image5 from '../../Assets/GallerySection/5.png'
import image6 from '../../Assets/GallerySection/6.png'
import image7 from '../../Assets/GallerySection/7.png'
import image8 from '../../Assets/GallerySection/8.png'
import image9 from '../../Assets/GallerySection/9.png'
import image10 from '../../Assets/GallerySection/10.png'

import './GallerySection.Styles.scss'

const GallerySection = () => {
    const [images, setImages] = useState([image2, image3, image4, image5, image6, image7, image8, image9, image10])
    const [selectedImage, setSelectedImage] = useState(image1)

    const handleClick = async (e) => {
        const selImage = document.getElementById('selected-image')
        const heading =document.getElementById('heading')
        const selImg = document.getElementById('selected-img')
        selImage.style.opacity = 0
        selImage.style.filter = 'blur(5px)'
        e.target.style.opacity = 0
        e.target.style.filter = 'blur(5px)'
        heading.style.zIndex = -1
        selImg.style.filter = 'brightness(100%)'
        await setTimeout(() => {
            const currentImage = [selectedImage]
            setSelectedImage(images[e.target.id])
            const newArray = images.slice(0, e.target.id).concat(currentImage).concat(images.slice(parseInt(e.target.id) + 1, 9)) 
            setImages(newArray)
            
        selImage.style.opacity = 1
        selImage.style.filter = 'blur(0px)'
        e.target.style.opacity = 1
        e.target.style.filter = 'blur(0px)'
        }, 300)
    }

    return (
        <div className='gallery-section'>
            <div className='scroll scroll-top-right scroll-dark'>Recent Work</div>
            {/*<div data-aos="fade-up" data-aos-duration="1000">
                <h1 className='heading'>GALLERY</h1>
                <div className='underline'></div>
            </div>*/}
            <div className='gallery-container' data-aos="fade-up" data-aos-duration="1000"s>
                <div className='selected-image' id='selected-image'>
                    <img src={selectedImage} alt='selectedGalleryImage' id='selected-img' />
                    <h1 className='heading' id='heading'>GALLERY</h1>
                </div>
                <div className='gallery'>
                {
                    images.map((imag, index) => <img key={index} onClick={handleClick} className='gallery-image' id={index} src={imag} alt={index} />)
                }
                </div>
            </div>
        </div>
    )
}

export default GallerySection