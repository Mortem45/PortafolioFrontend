import React,{ Component } from 'react'
import Section from '../components/section'
import WOW from 'wowjs'

export default class SectionContainer extends Component {
  componentDidMount() {
    const wow = new WOW.WOW()
    wow.init()
  }
 render() {
   return(
     <Section>

     </Section>
   )
  }
 }
