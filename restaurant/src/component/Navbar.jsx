import './Navbar.css';

import React from 'react'

const Navbar = () => {
  return (
    <div className="navBar" id="nv">
      <nav>
      <i className="bi bi-justify" onclick="alert('heelo')" id="hamMenu" />
      <ul>  
        <li>
          <a href="?page=home">HOME </a>
        </li>
        <li>
          <a href="?page=menu">MENU </a>
        </li>
        <li>
          <a href="?page=ourstory">OUR STORY</a>
        </li>
        <li>
          <a href="?page=contactus">CONTACT US </a>
        </li>
      </ul>
    </nav>
    </div>
  )
}

export default Navbar
