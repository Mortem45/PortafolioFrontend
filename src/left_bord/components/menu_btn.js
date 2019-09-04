import React from 'react'


const MenuBtn = (props) => (
  <div className='menu_btn' onClick={props.openMenu}>
    <div className='menu_btn__container'>
      <div className='menu_btn__text word'>menu</div>
      <div className='menu_btn__text word'>menu</div>
    </div>
  </div>
)

export default MenuBtn
