import React from 'react'
import './sections.css'

const Section = (props) => (
  <section id={props.id} className="wow section services animated" data-wow-delay="0.2s" data-wow-duration="1s">
    <div className="wow wrapper animated" data-wow-delay="0.5s">
      {props.children}
    </div>
  </section>
)

export default Section
