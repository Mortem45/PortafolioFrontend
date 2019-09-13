import React from 'react'
import './contactme-form.css'
import './button.css'

const ContactMeForm = (props) => (
  <div className='contact_us__formWrap'>
    <form className='form' id='contact-form'>
      <div className='form-group'>
        <label className='form-label js-hide-label'>NAME</label>
        <input className='form-control' name='name' id='contact_us_name' placeholder='Name'  required=''/>
      </div>
      <div className='form-group'>
        <label className='form-label js-hide-label'>E-MAIL</label>
        <input className='form-control' name='email' type='email' id='contact_us_email' placeholder='E-mail'  pattern='^\S+@\S+\.\S+$' required=''/>
      </div>
      <div className='form-group'>
        <label className='form-label js-hide-label'>MESSAGE THEME</label>
        <input className='form-control' name='subject' id='contact_us_subject' placeholder='Message theme' />
      </div>
      <div className='form-group'>
        <label className='form-label js-hide-label'>MESSAGE</label>
        <textarea className='form-control' id='contact_us_message' name='message' placeholder='How can we help you' ></textarea>
      </div>
      <div className='text-center'>
        <button className='services_btn  fadeInLeft' id='stat_contactUs_btn' type='submit'>SEND</button>
      </div>
    </form>
  </div>
)

export default ContactMeForm
