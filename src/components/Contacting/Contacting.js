import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedin, FaPinterest, FaInstagram } from "react-icons/fa";
import logo from '../../images/logo.jpg';

const Contacting = () => {
    return (
        <div className="contacting">
            <div className="container">
                <div className="contactSection">
                    <div className="row justify-content-center">
                        <div className="col-6">
                            <div className="contactSection-logo">
                                <img src={logo} alt="" />
                            </div>
                            <h3 className="text-center text-danger">
                                Hello, Viewers
                            </h3>
                            <h4 className="text-center text-secondary">
                                Thanks for watching my portfolio.Thanks a lot.
                            </h4>
                            <h6 className="text-center text-white">
                                Stay connected with me.
                            </h6>
                            <ul className="contactCircles">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacting;