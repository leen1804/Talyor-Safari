import React from "react";
import Header from "./components/Navbar/Header";
import Hero from "./components/HeroSection /Hero"; //  Hero component
import GlobalStyles from './Global Styles';
import About from "./components/About/About";
import Founders from './components/Founders/Founders'; 
import SectionWithCards from './components/SectionWithCards/SectionWithCards';
import MasonryGallery from './components/MasonryGallery/MasonryGallery';
import Testimonial  from './components/Testimonial/Testimonial';
import Footer from  './components/Footer/Footer';
import { ThemeProvider } from 'styled-components';
import theme from './theme.js';
function App() {
  return (
  
    <>
      <Header />
      <Hero />
    
      <About /> 
      <Founders />
      <SectionWithCards/>
      <MasonryGallery />
     
      <Testimonial/>
      <Footer/>
    </>
    
  );
}

export default App;
