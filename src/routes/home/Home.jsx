import React from "react";
import Banner from "../../components/banner/Banner";
import Header from "../../components/header/Header";
import About from "../../components/about/About";
import InfoCard from "../../components/infoCard/InfoCard";
import Section from "../../components/section/Section";
// import Conditions from "../../components/conditions/Conditions";

function Home() {
  return (
    <div className="home">
      <Header />
      <Banner />
      <About />
      {/* <Conditions /> */}
      <InfoCard />
      <Section />
      {/* <Carousel/> */}
    </div>
  );
}

export default Home;
