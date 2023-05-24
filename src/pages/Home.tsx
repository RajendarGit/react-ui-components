import React from 'react'
import Content from '../components/Content'
import Poster from '../components/Poster';

const Text = "Lorem ipsum dolor sit amet, consectetur adip. Cum societes, nascetur ridiculus mus, sed diam nonumy eirmod tempor";

const Home = () => {
  return (
    <div className='container-section'>
      <Content
      title="Welcome"
      content={Text}
      />
      <Content
      title="Welcome"
      content={Text}
      reverse={true}
      />
      {/* <Poster/> */}
    </div>
  )
}

export default Home