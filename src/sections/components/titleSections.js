import React from 'react'


const Title = (props) => (
  <div className='services_title'>
    <h2 className='services_title_sup'>{props.title_sup}<span>{props.title_inf}</span></h2>
    <h2>{props.title_sup}<span>{props.title_inf}</span></h2>
  </div>
)

export default Title
