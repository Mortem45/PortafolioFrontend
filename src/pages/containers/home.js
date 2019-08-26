import React, { Component } from 'react'
import RightBord from '../../right_bord/containers/right_bord'
import LeftBord from '../../left_bord/containers/left_bord'
import HomeLayout from '../components/home_layout'
import Section from '../../sections/containers/section'

export default class Home extends Component {
  render() {
    return (
      <HomeLayout>
        <RightBord />
        <LeftBord />
        <Section/>
      </HomeLayout>
    )

  }
}
