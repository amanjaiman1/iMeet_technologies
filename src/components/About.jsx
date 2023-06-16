import React from 'react'
import Card from '../sub-containers/Cards'

const About = () => {
  return (
    <div className="card-container items-center justify-center flex p-5 h-[40vh]">
      <Card title="Card 1" description="Description 1" />
      <Card title="Card 2" description="Description 2" />
      <Card title="Card 3" description="Description 3" />
    </div>
  )
}

export default About