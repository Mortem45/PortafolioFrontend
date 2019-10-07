import React from 'react'
import {  useTranslation, withTranslation } from 'react-i18next'

const NavMenu = (props) => {
    const { t } = useTranslation()
  return (
    <nav className='nav_menu__container'>
      <ul className='nav_menu'>
        <li className='nav_menu__item'>
          <a href='#home'>{t('menu.home')}</a>
          <span>01</span>
        </li>
        <li className='nav_menu__item'>
          <a href='#about-me'>{t('menu.about_me')}</a>
          <span>02</span>
        </li>
        <li className='nav_menu__item'>
          <a href='#skills'>{t('menu.skills')}</a>
          <span>03</span>
        </li>
        <li className='nav_menu__item'>
          <a href='#portfolio'>{t('menu.portfolio')}</a>
          <span>04</span>
        </li>
        <li className='nav_menu__item'>
          <a href='#contactMe'>{t('menu.contact_me')}</a>
          <span>05</span></li>
      </ul>
      <ul className='nav_menu'>
        <li className='nav_menu__item'>
          <a href='#home'>{t('menu.home')}</a>
          <span>01</span>
        </li>
        <li className='nav_menu__item'>
          <a href='#about-me'>{t('menu.about_me')}</a>
          <span>02</span>
        </li>
        <li className='nav_menu__item'>
          <a href='#skills'>{t('menu.skills')}</a>
          <span>03</span>
        </li>
        <li className='nav_menu__item'>
          <a href='#portfolio'>{t('menu.portfolio')}</a>
          <span>04</span>
        </li>
        <li className='nav_menu__item'>
          <a href='#contactMe'>{t('menu.contact_me')}</a>
          <span>05</span></li>
      </ul>
    </nav>
  )
}
export default withTranslation()(NavMenu)
