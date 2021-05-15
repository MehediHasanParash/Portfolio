import React from 'react';
import Typed from "react-typed";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaFacebookF, FaTwitter, FaLinkedin, FaPinterest, FaInstagram } from "react-icons/fa";
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import dummy from '../../images/dummy.jpg';
import Particles from "react-particles-js";
import { Link } from 'react-router-dom';


const Header = () => {
  
  return (
    <div style={{ backgroundColor: '#242d3f' }}>
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="header-content">
                <div className="header-section">
                  <ul className="header-ul">
                    <li>
                      <a href="https://www.facebook.com/profile.php?id=100016267038950">                      <FaFacebookF />
                    </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/mehedi-hasan-parash/"><FaLinkedin />
                      </a>                    
                    </li>
                    <li>
                      <a href="https://www.instagram.com/mehedihasanparash/"><FaInstagram />
                      </a>
                    </li>
                    
                    <li>
                      <a href=""><FaTwitter /></a>
                    </li>
                    <li>
                      <a href=""><FaPinterest />
                      </a>
                    </li>
                  </ul>
                  <h1 className="text-white">Hello, It's <br /> MEHEDI HASAN PARASH</h1>
                  <h3 className="text-warning">JUNIOR MERN DEVELOPER</h3>
                  <Typed
                    className="typed-text"
                    strings={["PORTFOLIO", "MEHEDI HASAN", "REACT DEVELOPER"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                  />
                  <br/>
                  <br/>
                  <div className="header-buttons">
                    <a href="https://drive.google.com/uc?export=download&id=1_79QYcxzFJwx5mXz3te0RTZsFAxd_j5X" className="button button-outline">
                    <FontAwesomeIcon icon={faDownload} style={{ color: 'orange' }} /> Download CV</a>
                    &nbsp;&nbsp;&nbsp;
                    <Link to="/about" className="button button-smart">About Me</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="header-img">
              <img src={dummy} alt=""  />             
               </div>
            </div>
          </div>
        </div>
      </header>
      {/* <main style={{ backgroundColor: '#242d3f', width: '100%', height: '610px' }} className="row d-flex align-items-center">
        <div className="col-md-6 offset-md-1">
          <div>
            <Particles
              params={{
                particles: {
                  number: {
                    value: 50,
                    density: {
                      enable: true,
                      value_area: 200
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
            />
            <h1 className="text-warning">Hello, It's <br /> MEHEDI HASAN PARASH</h1>
            <h3 className="text-light">JUNIOR MERN DEVELOPER</h3>
            <Typed
              className="typed-text"
              strings={["PORTFOLIO", "MEHEDI HASAN", "REACT DEVELOPER"]}
              typeSpeed={40}
              backSpeed={60}
              loop
            />
          </div>

        </div>



        <div className="col-md-4">
          <Particles
            params={{
              particles: {
                number: {
                  value: 30,
                  density: {
                    enable: true,
                    value_area: 200
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
          />
          <img style={{ marginTop: '50px', width: '100%', height: '300px' }} src={practice2} alt="" className="img-fluid" />

        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div style={{ display: 'inlineBlock' }} className="col-md-4 offset-md-1 mb-5">
          <a href="https://drive.google.com/uc?export=download&id=1_79QYcxzFJwx5mXz3te0RTZsFAxd_j5X" className="btn-main-offer "><FontAwesomeIcon icon={faDownload} style={{ color: 'orange' }} /> DOWNLOAD CV</a>
        </div> */}

      {/* <p className="text-white">
//                 I've been developing website since 2021. I build websites and applications with the latest technologies that work as hard as you, achieve results that you want, and generate a return on your investment. Let me help you grow your business by developing beautifull websites.
//                 </p> */}


      {/* </main> */}
    </div>
  );
};

export default Header;