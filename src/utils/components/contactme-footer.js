import React from 'react'
import './contactme-footer.css'

const ContactMeFooter = (props) => (
  <ul className='contact_us__leftWrap'>
    <li className='contact_us__leftWrap_title'>
      <h3>Lorem Ipsum is simply</h3>
      <h4>text of the</h4>
    </li>
    <li className='contact_us__leftWrap_text'>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and scrambled it to make a type specimen book.
         It has survived not only five centuries, but also the leap into electronic typesetting,
         remaining essentially unchanged.
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
