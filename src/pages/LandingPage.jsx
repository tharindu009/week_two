import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Hero from '../components/hero'
import Creations from '../components/Creations'
import Footer from '../components/Footer'

const LandingPage = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Creations />
            <Footer />
        </div>
    )
}

export default LandingPage