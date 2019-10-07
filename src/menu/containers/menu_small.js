import React,{ Component } from 'react'
import MenuSmall from '../components/menu_small'

export default class MenuSmallContainer extends Component {
  openMenu(e) {
    e.preventDefault()
    document.getElementById('menu').style.left = 0
  }

 render() {
   return(
     <MenuSmall openMenu={this.openMenu}/>
   )
  }
 }
