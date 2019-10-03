import React from 'react'
import './contactme-form.css'
import './button.css'


const ContactMeForm = (props) => (
  <div className='contact_us__formWrap'>
    <form className='form' id='contact-form'>
      <div className='form-group'>
        <label className='form-label js-hide-label'>{props.name}</label>
        <input className='form-control' name='name' id='contact_us_name' placeholder={props.name}  required=''/>
      </div>
      <div className='form-group'>
        <label className='form-label js-hide-label'>{props.email}</label>
        <input className='form-control' name='email' type='email' id='contact_us_email' placeholder={props.email}  pattern='^\S+@\S+\.\S+$' required=''/>
      </div>
      <div className='form-group'>
        <label className='form-label js-hide-label'>{props.message_theme}</label>
        <input className='form-control' name='subject' id='contact_us_subject' placeholder={props.message_theme} />
      </div>
      <div className='form-group'>
        <label className='form-label js-hide-label'>{props.message}</label>
        <textarea className='form-control' id='contact_us_message' name='message' placeholder={props.message} ></textarea>
      </div>
      <div className='text-center'>
        <button className='services_btn  fadeInLeft' id='stat_contactUs_btn' type='submit'>{props.send}</button>
      </div>
    </form>
  </div>
)

export default ContactMeForm
