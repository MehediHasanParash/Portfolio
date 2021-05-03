import React from 'react';
import { Link } from 'react-router-dom';
import cityTravel from '../../images/cityTravel.png';
import emaJohn from '../../images/emaJohn.png';
import cruiseQueen from '../../images/cruiseQueen.png';
import travelManagement from '../../images/travelManagement.png';
import github from '../../images/github.png';

const Project = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
            <h1 className="text-danger">MOST RECENT PROJECTS</h1>
            <br />
            <br />
            <br />
            <div>
                <a href="https://city-travel-c339d.web.app/">  <img style={{
                    height:
                        '200px', width: '300px', margin: '5px', border: '3px solid red', borderRadius: '5px', justifyContent: 'center'
                }} src={cityTravel} alt="" />
                </a>
                <a href="https://ema-john-online-shopping-complex.netlify.app/">  <img style={{
                    height:
                        '200px', width: '300px', margin: '5px', border: '3px solid red', borderRadius: '5px', justifyContent: 'center'
                }} src={emaJohn} alt="" />
                </a>
                <a href="https://mhp0720.github.io/cruise-ticket/">  <img style={{
                    height:
                        '200px', width: '300px', margin: '5px', border: '3px solid red', borderRadius: '5px', justifyContent: 'center'
                }} src={cruiseQueen} alt="" />
                </a>
                <a href="https://travel-management-71d3b.web.app/">  <img style={{
                    height:
                        '200px', width: '300px', margin: '5px', border: '3px solid red', borderRadius: '5px', justifyContent: 'center'
                }} src={travelManagement} alt="" />
                </a>

            </div>
            <br />
            <br />
            <br />
            <a href="https://github.com/MHP0720?tab=repositories">
            <button className="btn-main-offer"> <img style={{ height: '20px' }} src={github} alt="" /> view more in github</button>    
            </a>    
        </div>
        </div>
    );
};

export default Project;