import React, { Component } from 'react'
import WOW from 'wowjs'
import RightBord from '../../right_bord/containers/right_bord'
import LeftBord from '../../left_bord/containers/left_bord'
import HomeLayout from '../components/home_layout'
import Section from '../../sections/components/section'
import Menu from '../../menu/containers/menu'
import MenuSmall from '../../menu/containers/menu_small'
import Home from '../../sections/components/home'
import TitleSection from '../../sections/components/titleSections'
import Paragraph from '../../utils/components/paragraph'
export default class HomeContainer extends Component {
  render() {
    return (
      <HomeLayout>
        <Menu />
        <MenuSmall />
        <RightBord />
        <LeftBord />
        <Home id={'home_id'} dataName={'home'}/>
        <Section id={'about-me_id'} dataName={'about-me'}>
          <TitleSection.AboutMe/>
          <Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
          </Paragraph>
        </Section>
        <Section id={'skills_id'} dataName={'skills'}>
          <TitleSection.Skills/>
        </Section>
        <Section id={'portfolio_id'} dataName={'portfolio'}>
          <TitleSection.Skills/>
        </Section>
        <Section id={'contactMe_id'} dataName={'contactMe'}>
          <TitleSection.Skills/>
        </Section>
      </HomeLayout>
    )

  }
}
