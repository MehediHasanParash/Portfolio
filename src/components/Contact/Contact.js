
import React from 'react';
import emailjs from 'emailjs-com';
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
            <form className="contact-form main-info" onSubmit={sendEmail}>
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
            <br/>
            <br/>
            <br/>
             <Link to=""> <img style={{height: '80px'}} src="" alt=""/> </Link>
        </div>
    );
};

export default Contact;