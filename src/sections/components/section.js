import React from 'react'
import './sections.css'

const Section = (props) => (
  <section className="wow section services animated" data-wow-delay="0.2s" data-wow-duration="1s">
    <div className="wow wrapper animated" data-wow-delay="0.5s">
      {props.childrend}
    </div>
  </section>
)

export default Section
