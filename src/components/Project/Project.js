import React from 'react';
import { Link } from 'react-router-dom';
import city from '../../images/city.png';
import emaJohn from '../../images/emaJohn.png';
import cruiseQueen from '../../images/cruiseQueen.png';
import travelManagement from '../../images/travelManagement.png';
// import github from '../../images/github.png';

const Project = () => {
    return (
        <div className="about">
             <div className="container">
                <div className="common">
                    <h1 className="main-header">
                    MOST RECENT PROJECTS
                    </h1>
                    <div className="main-content">
                        What Kind of Projects you're looking for???
                        <p>Here are some Example projects for you.</p>
                    </div>
                    <div className="commonBorder">

                    </div>
                </div>
                <br/>
                <br/>
            <div className="row projectCustom d-flex">
                <div className="">
                <a href="https://city-travel-c339d.web.app/">  <img className="" src={city} alt="" />
                </a>
                <p>Project Details will be uploaded soon</p>

                </div>
               <div className="">
               <a href="https://ema-john-online-shopping-complex.netlify.app/">  <img className="" src={emaJohn} alt="" />
                </a>
               </div>
                <div className="">
                <a href="https://mhp0720.github.io/cruise-ticket/">  <img className="" src={cruiseQueen} alt="" />
                </a>
                </div>
                <div className="">
                <a href="https://travel-management-71d3b.web.app/">  <img className="" src={travelManagement} alt="" />
                </a>
                </div>

            </div>
            <br />
            <br />
            <br />
            
        </div>
        </div>
    );
};

export default Project;