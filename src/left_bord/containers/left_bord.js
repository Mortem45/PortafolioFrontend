import React, { Component } from 'react'
import LeftBord from '../components/left_bord'
import MenuBtn from '../components/menu_btn'

export default class LeftBoardContainer extends Component {
  render() {
    return (
      <LeftBord>
        <MenuBtn/>
      </LeftBord>
    )
  }
}
