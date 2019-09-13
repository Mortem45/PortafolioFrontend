import React from 'react'
import './contactme-footer.css'

const ContactMeFooter = (props) => (
  <ul className='contact_us__leftWrap'>
    <li className='contact_us__leftWrap_title'>
      <h3>if you already arrived here</h3>
      <h4>contact me</h4>
    </li>
    <li className='contact_us__leftWrap_text'>
      <p>

      </p>
    </li>
    <li className='contact_us__leftWrap_mail'>
      <ul className='contact_us__SubleftWrap'>
        <li>
          <h6>MY PHONE NUMBER</h6><a href='tel:+50235240325'>+502 35240325</a>
        </li>
        <li>
          <h6>WRITE TO ME</h6><a href='mailto:ste45_007@hotmail.com'>ste45_007@hotmail.com</a>
        </li>
        <li>
          <h6>ADDRESS</h6>
          <p>Guatemala, Guatemala</p>
        </li>
      </ul>
    </li>
  </ul>
)

export default ContactMeFooter
