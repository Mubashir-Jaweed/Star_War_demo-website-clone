import React from 'react'
import Hero from '../components/Hero'
import Latest from '../components/Latest'
import Platform from '../components/Platform'

const Home = () => {
  return (
    <div className='home'>
       <Hero/>
       <Latest/>
       <Platform/>
    </div>
  )
}

export default Home
