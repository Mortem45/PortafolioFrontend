import React from 'react'
import './menu.css'

const Menu = (props) => (
  <header className="nav_container">
    {props.children}
  </header>
)

export default Menu
