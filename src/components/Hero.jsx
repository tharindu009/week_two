import React from 'react'
import bgimage from '../assets/images/desktop/image-interactive.jpg'

const Hero = () => {
    return (
        <div className='container py-5 items-justify-center item-align-center'>

            <div className='img-container'>
                <img className='img-fluid' src={bgimage} alt="" />
                <div className='img-text p-5'>
                    <h2 className='header2'>THE LEADER IN INTERACTIVE VR</h2>
                    <p className="font-weight-light">
                        Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe.
                        Our award-winning creations have transformed businesses through digital experiences that bind to their brand.
                    </p>
                </div>
            </div>


        </div>
    )
}

export default Hero