import React,{ Component } from 'react'
import Menu from '../components/menu'
import WOW from 'wowjs'
import Logo from '../../utils/components/logo'
import SocialWrap from '../../utils/components/social_wrap'
import ContactMe from '../../utils/components/contact_me'
import LenguWrap from '../../utils/components/lenguage_wrap'

export default class MenuContainer extends Component {
  componentDidMount() {
    const wow = new WOW.WOW()
    wow.init()
  }
 render() {
   return(
     <Menu>
       <Logo/>
       <LenguWrap/>
       <SocialWrap />
       <ContactMe/>
     </Menu>
   )
  }
 }
