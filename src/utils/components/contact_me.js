import React from 'react'
import {  useTranslation, withTranslation } from 'react-i18next'
import './contact_me.css'

const ContactMe = props => {
  const { t } = useTranslation()
  return (
    <div className='call_back'>
      <a href='#contactMe' className='open_modal call_back__callBtn'>{t('titles.contact')}</a>
    </div>
  )
}
export default withTranslation()(ContactMe)
