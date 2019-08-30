import React,{ Component } from 'react'
import Section from '../components/section'
import TitleSection from '../components/titleSections'
import WOW from 'wowjs'

export default class SectionContainer extends Component {
  componentDidMount() {
    const wow = new WOW.WOW()
    wow.init()
  }
 render() {
   return(
     <Section>
       <TitleSection.AboutMe/>
     </Section>
   )
  }
 }
