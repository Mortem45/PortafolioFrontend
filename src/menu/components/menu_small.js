import React from 'react'
import './menu_small.css'

const MenuSmall = (props) => (
  <div className="small_menu" >
    <div className="small_menu_logo">MORTEM45</div>
    <div className="small_menu_btn__wrapper" onClick={props.openMenu}>
      <div className="small_menu_btn__line"></div>
      <div className="small_menu_btn__line"></div>
      <div className="small_menu_btn__line"></div>
    </div>
  </div>
)

export default MenuSmall
