import React from 'react'


const MenuBtn = (props) => (
  <div className="menu_btn">
    <div className="menu_btn__container">
        <div className="menu_btn__text word" style={{ opacity: 1 }}>
          <span className="letter in">m</span>
          <span className="letter in">e</span>
          <span className="letter in">n</span>
          <span className="letter in">u</span>
          </div>
        <div className="menu_btn__text word" style={{ opacity: 1 }}>
          <span className="letter out">m</span>
          <span className="letter out">e</span>
          <span className="letter out">n</span>
          <span className="letter out">u</span>
        </div>
    </div>
  </div>
)

export default MenuBtn
