import React from 'react';
import About from '../About/About';
// import Contact2 from '../Contacting/Contacting';
// import { Link } from 'react-router-dom';
import Header from "../Header/Header";
import Prices from '../Prices/Prices';
import Services from '../Services/Services';
// import Contact2 from '../Contacting/Contacting';
import Contacting from '../Contacting/Contacting';
import Project from '../Project/Project';
import ContactHolder from '../ContactHolder/ContactHolder';
// import Project from '../Project/Project';
// import Particles from "react-particles-js";


const Home = () => {
  return (
    <div>
      <Header></Header>
      <About></About>
      <Services></Services>
      <Project></Project>
      <Prices></Prices>
      <ContactHolder></ContactHolder>
    </div>
  );
};

export default Home;