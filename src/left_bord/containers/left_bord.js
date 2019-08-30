import React, { Component } from 'react'
import LeftBord from '../components/left_bord'
import MenuBtn from '../components/menu_btn'
import SocialWrap from '../../utils/components/social_wrap'
import Logo from '../../utils/components/logo'

export default class LeftBoardContainer extends Component {
  render() {
    return (
      <LeftBord>
        <Logo />
        <MenuBtn />
        <SocialWrap />
      </LeftBord>
    )
  }
}
