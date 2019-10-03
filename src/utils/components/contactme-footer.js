import React from 'react'
import {  useTranslation, withTranslation } from 'react-i18next';

import './contactme-footer.css'

const ContactMeFooter = (props) =>{
  const { t } = useTranslation()
  return (
    <ul className='contact_us__leftWrap'>
      <li className='contact_us__leftWrap_title'>
        <h3>{t('contactfooter.slogan_sup')}</h3>
        <h4>{t('contactfooter.slogan_inf')}</h4>
      </li>
      <li className='contact_us__leftWrap_text'>
        <p>

        </p>
      </li>
      <li className='contact_us__leftWrap_mail'>
        <ul className='contact_us__SubleftWrap'>
          <li>
            <h6>{t('contactfooter.callme')}</h6>
            <a href='tel:+50235240325'>{t('contactfooter.callme_ans')}</a>
          </li>
          <li>
            <h6>{t('contactfooter.writeme')}</h6>
            <a href='mailto:ste45_007@hotmail.com'>{t('contactfooter.writeme_ans')}</a>
          </li>
          <li>
            <h6>{t('contactfooter.address')}</h6>
            <p>{t('contactfooter.address_ans')}</p>
          </li>
        </ul>
      </li>
    </ul>
  )
}
export default withTranslation()(ContactMeFooter)
