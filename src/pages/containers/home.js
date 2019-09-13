import React, { Component } from 'react'
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
import Letras from '../../utils/components/letras'
export default class HomeContainer extends Component {
  render() {
    return (
      <HomeLayout>
        <Menu />
        <MenuSmall />
        <RightBord />
        <LeftBord />
        <Home id={'home'} dataName={'home'}/>
        <Section id={'about-me'} dataName={'about-me'}>
          <TitleSection.AboutMe/>
          <Paragraph>
           Hola soy Brandon Monterrozo, un tipo que se apasiona por el desarrollo de software, que adora los retos y no se rinde facilmente.
            Una persona autodidacta, proactivo, honesta y responsable, que cada dia se esmera en aprender algo nuevo para poder superarse
            y poder alcanzar nuevos retos.
          </Paragraph>
          <Letras.About/>
        </Section>
        <Section id={'skills'} dataName={'skills'}>
          <TitleSection.Skills/>
          <List></List>
          <Paragraph>
           Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
           when an unknown printer took a galley of type and scrambled it to make a type specimen book
          </Paragraph>
          <Letras.Skills/>
        </Section>
        <Section id={'portfolio'} dataName={'portfolio'}>
        </Section>
        <ContactMe id={'contactMe'} dataName={'contactMe'}>
          <ContactFooter/>
          <ContactMeForm/>
        </ContactMe>
      </HomeLayout>
    )

  }
}
