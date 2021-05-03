
import React from 'react';
import emailjs from 'emailjs-com';
import facebook from '../../images/facebook (1).png';
import linkedin from '../../images/linkedin.png';
import github from '../../images/github.png';
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
        <div className="header-wrapper">

        <div className=" main-info">
            <form className="contact-form mt-5" onSubmit={sendEmail}>
                <input type="hidden" name="contact_number" />
                <label className="text-warning">Name</label>
                <br />
                <input style={{width: '350px'}} type="text" name="user_name" />
                <br />
                <label className="text-warning">Email</label>
                <br />
                <input style={{width: '350px'}}  type="email" name="user_email" />
                <br />
                <label className="text-warning">Message</label>
                <br />
                <textarea style={{width: '350px', height: '200px'}}  name="message" />
                <br />
                <input className="btn-main-offer" type="submit" value="Send" />
            </form>


            <div className="bg-warning">
            <a href="https://www.facebook.com/profile.php?id=100016267038950"> <img style={{height: '50px'}} src={facebook} alt=""/> </a>
             <a href="https://www.linkedin.com/in/mehedi-hasan-parash-568181211/"> <img style={{height: '50px'}} src={linkedin} alt=""/> </a>
             <a href="https://github.com/MHP0720?tab=repositories"> <img style={{height: '50px'}} src={github} alt=""/> </a>
            </div>
            <br/>
            <br/>
            <br/>
        </div>
        </div>
        
    );
};

export default Contact;