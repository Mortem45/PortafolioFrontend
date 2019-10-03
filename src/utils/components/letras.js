import React from 'react'
import './letras.css'

const Letras = (props) => (
  <div className='letras'>
    <div>
      <h2 className='opacity'>{props.title_inf}</h2>
      <h2 className='title'>{props.title_sup}</h2>
      <h2 className='opacity'>{props.title_inf}</h2>
    </div>
    <div>
      <h2 className='opacity'>{props.title_sup}</h2>
      <h2 className='title'> {props.title_inf}</h2>
      <h2 className='opacity'>{props.title_sup}</h2>
    </div>
  </div>
)

export default Letras
