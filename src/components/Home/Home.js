import React from 'react';
import { Link } from 'react-router-dom';
import Header from "../Header/Header";
// import Particles from "react-particles-js";


const Home = () => {
  return (
    <div>
      {/* <Particles
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "star",
              stroke: {
                width: 6,
                color: "#f9ab00"
              }
            }
          }
        }}
      /> */}
      <Header></Header>
    </div>
  );
};

export default Home;