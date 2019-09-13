import React, { Component } from 'react'
import RightBord from '../components/right_bord'
import LenguWrap from '../../utils/components/lenguage_wrap'
import NumPageWrapCount from '../components/numPageWrap'
import NumberItem from '../components/number_item'
import ContactMe from '../../utils/components/contact_me'

export default class RightBordContainer extends Component {
  render() {
    return (
      <RightBord>
        <LenguWrap/>
        <NumPageWrapCount>
          <NumberItem numPage={'01'}/>
          <NumberItem numPage={'02'}/>
          <NumberItem numPage={'03'}/>
          <NumberItem numPage={'04'}/>
          <NumberItem numPage={'05'}/>
        </NumPageWrapCount>
        <ContactMe />
      </RightBord>
    )
  }
}
