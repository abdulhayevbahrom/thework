import React from 'react'
import Banner from '../../components/banner/Banner'
import Header from "../../components/header/Header"
import About from '../../components/about/About'
import InfoCard from '../../components/infoCard/InfoCard'
import Section from '../../components/section/Section'
import HomeCarousel from '../../components/homeCarousel/HomeCarousel'
import Crousel11 from '../../components/crousel11/Carousel11'

function Home() {
    return (
        <div className='home'>
            <Crousel11 />
            <HomeCarousel />
            <Header />
            <Banner />
            <About />
            <InfoCard />
            <Section />
            {/* <Carousel/> */}
        </div>
    )
}

export default Home
