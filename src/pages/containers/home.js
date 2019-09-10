import React, { Component } from 'react'
import WOW from 'wowjs'
import RightBord from '../../right_bord/containers/right_bord'
import LeftBord from '../../left_bord/containers/left_bord'
import HomeLayout from '../components/home_layout'
import Section from '../../sections/components/section'
import Menu from '../../menu/containers/menu'
import MenuSmall from '../../menu/containers/menu_small'
import Home from '../../sections/components/home'
import ContactMe from '../../sections/components/contactme'
import TitleSection from '../../sections/components/titleSections'
import Paragraph from '../../utils/components/paragraph'
import List from '../../utils/components/list'
import ContactFooter from '../../utils/components/contactme-footer'
import ContactMeForm from '../../utils/components/contacteme-form'

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
           Hola soy Brandon Monterrozo, un tipo que se apasiona por el desarrollo de software, que adora los retos y no se rinde facilmente.
            Una persona autodidacta, proactivo, honesta y responsable, que cada dia se esmera en aprender algo nuevo para poder superarse
            y poder alcanzar nuevos retos.
          </Paragraph>
        </Section>
        <Section id={'skills_id'} dataName={'skills'}>
          <TitleSection.Skills/>
          <List></List>
        </Section>
        <Section id={'portfolio_id'} dataName={'portfolio'}>
          <TitleSection.Skills/>
        </Section>
        <ContactMe id={'contactMe_id'} dataName={'contactMe'}>
          <ContactMeForm/>
          <ContactFooter/>
        </ContactMe>
      </HomeLayout>
    )

  }
}
