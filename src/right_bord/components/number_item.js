import React from 'react'

const NumberItem = props => (
  <div className='numberPage_item' >
    <span className='numberPage_item__count'>{props.numPage}</span>
    <span className='numberPage_item__line'></span>
    <span className='numberPage_item__dot'></span>
  </div>
)

export default NumberItem
