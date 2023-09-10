import React from 'react'
import Banner from '../../components/banner/Banner'
import Header from "../../components/header/Header"
import About from '../../components/about/About'
import InfoCard from '../../components/infoCard/InfoCard'
import Section from '../../components/section/Section'
import HomeCarousel from '../../components/homeCarousel/HomeCarousel'
import Questions from '../../components/questions/Questions'

function Home() {
  return (
    <div className='home'>
      <Header />
      <Banner />
      <About />
      <InfoCard />
      <Section />
      <HomeCarousel />
      <Questions />
    </div>
  )
}

export default Home;
