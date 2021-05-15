import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Services = () => {
    const [state] = React.useState([
        { id: 1, icon: "FaGithub", heading: "Web Development", text: " Lorem ipsum dolor sit amet consectetur\ adipisicing elit. Architecto, dolorem!" },
        { id: 2, icon: "FaGithub", heading: "Web Design", text: " Lorem ipsum dolor sit amet consectetur\ adipisicing elit. Architecto, dolorem!" },
        { id: 3, icon: "FaGithub", heading: "React Development", text: " Lorem ipsum dolor sit amet consectetur\ adipisicing elit. Architecto, dolorem!" },
        { id: 4, icon: "FaGithub", heading: "Front End Development", text: " Lorem ipsum dolor sit amet consectetur\ adipisicing elit. Architecto, dolorem!" },
        { id: 5, icon: "FaGithub", heading: "Back End Development", text: " Lorem ipsum dolor sit amet consectetur\ adipisicing elit. Architecto, dolorem!" },
        { id: 6, icon: "FaGithub", heading: "Git Control", text: " Lorem ipsum dolor sit amet consectetur\ adipisicing elit. Architecto, dolorem!" },
    ])
    return (
        <div className="services">
            <div className="container">
                <div className="services-header">
                    <div className="common">
                        <h3 className="heading">
                            SERVICES
                    </h3>
                        <h1 className="main-header">
                            My Services
                    </h1>
                        <p className="main-content">
                        Services that I provide. Find  services that you need and buy here. To buy any services please contact via email and stay connected with me.       
                                      </p>
                        <div className="commonBorder">

                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="services-box">
                                <FaGithub className="commonIcons" />
                                <div className="services-box-header">
                                    Web Development                                        </div>
                                <div className="services-box-p">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque nisi eum voluptas omnis eligendi in iste error consectetur exercitationem recusandae?
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="services-box">
                                <FaGithub className="commonIcons" />
                                <div className="services-box-header">
                                Front End Development                                        </div>
                                <div className="services-box-p">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque nisi eum voluptas omnis eligendi in iste error consectetur exercitationem recusandae?
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="services-box">
                                <FaGithub className="commonIcons" />
                                <div className="services-box-header">
                                Back End Development                                        </div>
                                <div className="services-box-p">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque nisi eum voluptas omnis eligendi in iste error consectetur exercitationem recusandae?
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;