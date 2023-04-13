import React from "react";
import NavBar from "../Component/NavBar";
import SliderComponent from "../Component/Carousel";
import Hero from "../Component/Hero";
import Footer from "../Component/Footer";







function Accueil() {
  return (
    <div>
      <NavBar/>
      <SliderComponent/>
      <Hero/>
      <Footer/>
      
    </div>
  );
}

export default Accueil;
