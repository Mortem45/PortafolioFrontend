import React from 'react'
import './menu.css'

const Menu = (props) => (
  <header className='nav_container' id='menu'>
    {props.children}
  </header>
)

export default Menu
