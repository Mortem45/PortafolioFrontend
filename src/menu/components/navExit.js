import React from 'react'

const NavExit = (props) => (
  <div className='nav-btn__exid' onClick={props.closeMenu}>
    <span className='modal_close_wrap'>
      <span className='modal_close_leftLine'></span>
      <span className='modal_close_rightLine'></span>
    </span>
  </div>
)

export default NavExit
