import React from 'react'
import './contactme.css'

const ContactMe = (props) => (
  <section id={props.id} className='wow section services contact_us' data-section-name={props.dataName} data-wow-delay='0.2s' data-wow-duration='1s'>
    <div className='wrapper'>
      <div className='contact_us__bgText__grey'>{props.title}</div>
      <div className='contact_us__bgText'>{props.title}</div>
      <div className='contact_us__bgImg'></div>
      <div className='contact_us_bgTreangle'></div>
      {props.children}
    </div>
  </section>
)

export default ContactMe
