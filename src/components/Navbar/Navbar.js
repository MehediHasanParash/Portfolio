import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faIdBadge, faBlog, faPhone, faFile } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import logo from '../../images/logo.jpg';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand text-danger" href="#"> <img style={{height: '50px', width: '100px', border: '1px solid red', borderRadius: '20%'}} src={logo} alt=""/></a> 
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{ color: 'red' }} />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-auto">
            <li className="nav-item">
              <Link to="/home" className="nav-link ml-5 text-success" aria-current="page">
                <FontAwesomeIcon icon={faHome} style={{ color: 'red' }} /> Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/project" className="nav-link ml-5 text-white">
                <FontAwesomeIcon icon={faFile} style={{ color: 'red' }} /> Projects</Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link ml-5 text-white">
                <FontAwesomeIcon icon={faIdBadge} style={{ color: 'red' }} /> services</Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link ml-5 text-white">
                <FontAwesomeIcon icon={faBlog} style={{ color: 'red' }} /> Blog</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link ml-5 text-white">
                <FontAwesomeIcon icon={ faPhone} style={{ color: 'red' }} /> Contact Me</Link>
            </li>
          </ul>
          {/* <form className="d-flex ml-auto">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;