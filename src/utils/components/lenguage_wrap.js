import React from 'react'
import './lenguage_wrap.css'

const LenguWrap = props => (
  <div className='local_wrap'>
    <span id='ES' onClick={props.changeLangES} className='local_item' >ES</span>
    <span id='EN' onClick={props.changeLangEN} className='local_item lenguage'>EN</span>
  </div>
)

export default LenguWrap
