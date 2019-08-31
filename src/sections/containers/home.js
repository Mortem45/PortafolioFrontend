import React,{ Component } from 'react'
import Home from '../components/home'
import WOW from 'wowjs'

export default class HomeContainer extends Component {
  componentDidMount() {
    const wow = new WOW.WOW()
    wow.init()
  }
 render() {
   return (
     <Home>

     </Home>
   )
  }
 }
