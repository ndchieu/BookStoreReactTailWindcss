import React from 'react'
import Hero from '../components/Hero.jsx'
import NewArrivals from '../components/NewArrivals.jsx'
import About from '../components/About.jsx'
import PopulatorBooks from '../components/PopulatorBooks.jsx'
import Features from '../components/Features.jsx'
import Footer from '../components/Footer.jsx'
const Home = () => {
    return (
        <>
            <Hero />
            <NewArrivals />
            <About />
            <PopulatorBooks />
            <Features />
            <div className='bg-white max-padd-container'>
                <Footer />
            </div>
        </>
    )
}

export default Home
