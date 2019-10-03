import React from 'react'
import './list.css'

const List = (props) => {
  return (
    <div className='services_list__wrap'>
    <ul className='services_list'>
      <li className='services_list_line'><span>01</span>BACK END</li>
      <li className='services_list_line'><span>02</span>WEB SERVICES</li>
      <li className='services_list_line'><span>03</span>DATA BASES</li>
    </ul>
    <ul className='services_list'>
      <li className='services_list_line'><span>04</span>OAUTH</li>
      <li className='services_list_line'><span>05</span>SERVERS</li>
      <li className='services_list_line'><span>06</span>MICRO SERVICES</li>
    </ul>
  </div>
  )
}

export default List
