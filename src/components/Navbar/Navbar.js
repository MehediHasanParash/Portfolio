import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
 

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-danger" href="#">Mehedi Hasan</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{ color: 'red' }}/>
   </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link ml-5 text-success" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ml-5 text-white" href="#">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ml-5 text-white" href="#">Resume</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ml-5 text-white disabled" href="#" tabindex="-1" aria-disabled="true">Blogs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ml-5 text-white" href="#">Contact Me</a>
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