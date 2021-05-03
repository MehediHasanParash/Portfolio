import React from 'react';
import Typed from "react-typed";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import practice2 from '../../images/practice2.png';
// import Facebook from "../../images/Facebook.png";
// import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header-wrapper">



            <div class="container px-5 main-info">
                <div class="row">
                    <div class="col">
                    <div class="col-sm-12 p-5 ">
                    <h1 className="text-warning bg-dark">Hello, It's <br /> MEHEDI HASAN PARASH</h1>
                            <h3 className="text-light bg-info">JUNIOR WEB DEVELOPER</h3>
                            <Typed
                                className="typed-text bg-dark"
                                strings={["PORTFOLIO", "MEHEDI HASAN", "REACT DEVELOPER"]}
                                typeSpeed={40}
                                backSpeed={60}
                                loop
                            />
                            <p className="text-white bg-info">
                            I've been developing website since 2021. I build websites and applications with the latest technologies that work as hard as you, achieve results that you want, and generate a return on your investment. Let me help you grow your business by developing beautifull websites.
                            </p>
                            <br/>
                            <br/>
                            <a href="https://drive.google.com/uc?export=download&id=1_79QYcxzFJwx5mXz3te0RTZsFAxd_j5X" className="btn-main-offer"><FontAwesomeIcon icon={faDownload} style={{ color: 'orange' }} /> DOWNLOAD CV</a></div>
                    </div>
                    <div class="col">
                        <div class="p-2 ">
                            <img style={{ height: '400px' }} src={practice2} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Header;