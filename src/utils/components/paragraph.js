import React from 'react'
import { Trans } from 'react-i18next'
import './paragraph.css'

const Paragraph = (props) => {
  return (
    <div className='services_title__sub'>
      <Trans><h3>{props.parr1}</h3></Trans>
      <br></br>
      <Trans><h3>{props.parr2}</h3></Trans>
    </div>
  )
}

export default Paragraph
