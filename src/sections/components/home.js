import React from 'react'
import './home.css'

const Home = props => (
  <section
    id={props.id}
    className='section home_slider'
    data-section-name={props.dataName}
  >
    <div className='wrapper'>
      <div className='home_slider__bg'></div>
      <div className='wrap_line__cont'>
        <div className='wrap_line__item anim_slideStart'></div>
        <div className='wrap_line__item'></div>
        <div className='wrap_line__item anim_slide'></div>
        <div className='wrap_line__item'></div>
        <div className='wrap_line__item anim_slideStart'></div>
      </div>
      <h3 className='home_slider__bgTextEvox'>MORTEM45</h3>
      <h3 className='home_slider__bgText'>MORTEM45</h3>
      <h3 className='home_slider__bgTextSub'>DEVELOPER</h3>
      <div className='home_slider__bgTextSubpre'>
        <h4>full stack </h4>
      </div>
      <div className='home_slider__bgImage'></div>
    </div>
  </section>
)

export default Home
