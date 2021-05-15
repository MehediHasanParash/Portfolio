import React from 'react';
import dummy from '../../images/dummy.jpg';

const About = () => {
    return (
        <div className="about">
            <div className="container">
                <div className="common">
                    <h1 className="main-header">
                        About Me                    </h1>
                    <p className="main-content">
                        I'm Mehedi Hasan Parash. Junior Mern Stack Developer. I build websites and applications with the latest technologies that work as hard as you, achieve results that you want, and generate a return on your investment.
                    </p>
                    <div className="commonBorder">

                    </div>
                </div>
                <div className="row h-650 align-center">
                    <div className="col-6">
                        <div className="about-img">
                            <img src={dummy} alt="" className="img-fluid" />      
                        </div>
                    </div>
                    <div className="col">
                        <div className="about-info">
                            <h1>Hi There</h1>
                            <div className="about-info-1">
                                <p>I've been developing website since 2021. I build websites and applications with the latest technologies that work as hard as you, achieve results that you want, and generate a return on your investment.</p>
                                <div className="about-info-2">
                                    <p> Let me help you grow your business by developing beautifull websites.</p>
                                </div>
                                <div className="info-contacts">
                                    <div className="row">
                                        <div className="col-6">
                                            <strong>
                                                Name
                                            </strong>
                                            <p>
                                                Mehedi Hasan Parash
                                            </p>
                                        </div>
                                        <div className="col-6">
                                            <strong>Email:</strong>
                                            <p>mehediparash0720@gmail.com</p>
                                        </div>
                                        <div className="col-6">
                                            <strong>
                                                Phone
                                            </strong>
                                            <p>
                                                01716012075                
                                            </p>
                                        </div>
                                        <div className="col-6">
                                            <strong>Linkedin:</strong>
                                            <p>https://www.linkedin.com/in/mehedi-hasan-parash</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;