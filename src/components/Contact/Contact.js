
import React from 'react';
import emailjs from 'emailjs-com';
import { FaFacebookF, FaTwitter, FaLinkedin, FaPinterest, FaInstagram } from "react-icons/fa";
// import facebook from '../../images/facebook (1).png';
// import linkedin from '../../images/linkedin.png';
// import github from '../../images/github.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import './ContactUs.css';

function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm('gmail', 'template_8ptuzkv', e.target, 'user_OEMzHzEA1YxY1SpB8lLmi')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
  e.target.reset();
}

const Contact = () => {
  return (
    <div className="contacts">        
      <div className="common">
          <h1 className="heading">
            CONTACT
                    </h1>
          <p className="main-content">
            IF YOU WANT TO CONTACT WITH ME PLEASE SEND A MAIL .
                                      </p>
          <div className="commonBorder">

          </div>
        </div>

        <div className="common form">
          <form className="contact-form mt-5" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <label className="text-warning">Name</label>
            <br />
            <input style={{height: '40px', width: '410px', border: '1px solid gray', borderRadius: '10px'}} type="text" name="user_name" />
            <br />
            <label className="text-warning">Email</label>
            <br />
            <input style={{height: '40px', width: '410px', border: '1px solid gray', borderRadius: '10px'}} type="email" name="user_email" />
            <br />
            <label className="text-warning">Message</label>
            <br />
            <textarea style={{height: '200px', width: '410px', border: '1px solid gray', borderRadius: '10px'}} name="message" />
            <br />
            <input className="button-outline" type="submit" value="Send" />
          </form>
<br/>

          {/* <div className=""> */}
            {/* <ul className="header-ul">
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
            </ul> */}
          </div>
      
      </div>
    // </div>
      // </div>
    // </div>
    // </div>

  );
};

export default Contact;