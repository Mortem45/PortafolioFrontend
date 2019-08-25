import React, { Component } from "react";
import RightBord from "../components/right_bord";
import LenguWrap from "../components/lenguage_wrap";
import NumPageWrapCount from "../components/numPageWrap";
import NumberItem from "../components/number_item";
import ContactMe from '../components/contact_me'

export default class RightBordContainer extends Component {
  render() {
    return (
      <RightBord>
        <LenguWrap />
        <NumPageWrapCount>
          <NumberItem />
          <NumberItem />
          <NumberItem />
          <NumberItem />
          <NumberItem />
        </NumPageWrapCount>
        <ContactMe />
      </RightBord>
    );
  }
}
