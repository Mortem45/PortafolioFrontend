import React from 'react'


const NavMenu = (props) => (
  <nav className="nav_menu__container">
    <ul className="nav_menu">
      <li className="nav_menu__item">
        <a href="#services">Web development</a>
        <span>01</span>
      </li>
      <li className="nav_menu__item">
        <a href="#our-style">About me</a>
        <span>02</span>
      </li>
      <li className="nav_menu__item">
        <a href="#marketing">Skills & Experience</a>
        <span>03</span>
      </li>
      <li className="nav_menu__item">
        <a href="#project">Portfolio</a>
        <span>04</span>
      </li>
      <li className="nav_menu__item">
        <a href="#contact">Contact Me</a>
        <span>05</span></li>
    </ul>
    <ul className="nav_menu">
      <li className="nav_menu__item">
        <a href="#services_id">Web development</a>
        <span>01</span>
      </li>
      <li className="nav_menu__item">
        <a href="#our-style_id">About me</a>
        <span>02</span>
      </li>
      <li className="nav_menu__item">
        <a href="#marketing_id">Skills & Experience</a>
        <span>03</span>
      </li>
      <li className="nav_menu__item">
        <a href="#project_id">Portfolio</a>
        <span>04</span>
      </li>
      <li className="nav_menu__item">
        <a href="#contact_id">Contact Me</a>
        <span>05</span></li>
    </ul>
  </nav>
)

export default NavMenu