import React from 'react'
import './letras.css'

const Skills = (props) => (
  <div className='letras'>
    <div>
      <h2 className='opacity'>Experien</h2>
      <h2 className='title'>Skills &amp; </h2>
      <h2 className='opacity'>Experien</h2>
    </div>
    <div>
      <h2 className='opacity'>Skills&amp;</h2>
      <h2 className='title'> Experience </h2>
      <h2 className='opacity'>Skills&amp;</h2>
    </div>
  </div>
)

const About = (props) => (
  <div className='letras'>
    <div>
      <h2 className='opacity'>Me about</h2>
      <h2 className='title'>About</h2>
      <h2 className='opacity'>Me about</h2>
    </div>
    <div>
      <h2 className='opacity'>About Me A</h2>
      <h2 className='title'> ME </h2>
      <h2 className='opacity'>About Me A</h2>
    </div>
  </div>
)

export default {
  Skills,
  About
}
