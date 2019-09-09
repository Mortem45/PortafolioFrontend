import React,{ Component } from 'react'
import Menu from '../components/menu'
import WOW from 'wowjs'
import Logo from '../../utils/components/logo'
import SocialWrap from '../../utils/components/social_wrap'
import ContactMe from '../../utils/components/contact_me'
import LenguWrap from '../../utils/components/lenguage_wrap'
import NavMenu from '../components/navMenu'
import NavExit from '../components/navExit'

export default class MenuContainer extends Component {
  closeMenu(e) {
    e.preventDefault();
    document.getElementById('menu').style.left = null
  }
 render() {
   return(
     <Menu>
       <Logo/>
       <LenguWrap/>
       <SocialWrap />
       <ContactMe/>
       <NavMenu/>
       <NavExit closeMenu={this.closeMenu}/>
     </Menu>
   )
  }
 }
