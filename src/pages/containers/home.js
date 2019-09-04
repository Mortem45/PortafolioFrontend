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
        <Home />
        <Section id={'services'}>
          <TitleSection.AboutMe/>
          <Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
          </Paragraph>
        </Section>
        <Section id={'our-style'}>
          <TitleSection.Skills/>
        </Section>
        <Section id={'marketing'}>
          <TitleSection.Skills/>
        </Section>
        <Section id={'project'}>
          <TitleSection.Skills/>
        </Section>
        <Section id={'aboutUs'}>
          <TitleSection.Skills/>
        </Section>
        <Section id={'contact'}>
          <TitleSection.Skills/>
        </Section>
      </HomeLayout>
    )

  }
}
