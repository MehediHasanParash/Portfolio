import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faIdBadge, faBlog, faPhone, faFile } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import practice2 from '../../images/practice2.png';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-danger" href="#"> <img style={{height: '35px'}} src={practice2} alt=""/> MHP</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{ color: 'red' }} />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/home" className="nav-link ml-5 text-success" aria-current="page">
                <FontAwesomeIcon icon={faHome} style={{ color: 'yellow' }} /> Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/project" className="nav-link ml-5 text-white">
                <FontAwesomeIcon icon={faFile} style={{ color: 'yellow' }} /> Projects</Link>
            </li>
            <li className="nav-item">
              <Link to="/resume" className="nav-link ml-5 text-white">
                <FontAwesomeIcon icon={faIdBadge} style={{ color: 'yellow' }} /> Resume</Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link ml-5 text-white">
                <FontAwesomeIcon icon={faBlog} style={{ color: 'yellow' }} /> Blog</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link ml-5 text-white">
                <FontAwesomeIcon icon={ faPhone} style={{ color: 'yellow' }} /> Contact Me</Link>
            </li>
          </ul>
          <form className="d-flex ml-auto">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;