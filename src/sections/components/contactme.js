import React from 'react'
import './contactme.css'

const ContactMe = (props) => (
  <section id={props.id} className='wow section services contact_us' data-section-name={props.dataName} data-wow-delay='0.2s' data-wow-duration='1s'>
    <div className='wrapper'data-wow-delay='0.5s'>
      <div class='contact_us__bgText__grey'>contact me</div>
      <div class='contact_us__bgText'>contact me</div>
      <div class='contact_us__bgImg'></div>
      <div class='contact_us_bgTreangle'></div>
      {props.children}
    </div>
  </section>
)

export default ContactMe
