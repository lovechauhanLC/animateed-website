import React from 'react'
import Videos from '../components/home/Videos'
import HomeHeroText from '../components/home/HomeHeroText'
import HomesBottomText from '../components/home/HomesBottomText'

const Home = () => {
  return (
    <div>

      <div className='h-screen w-screen fixed'>
        <Videos/>
      </div>

      <div className='h-screen w-screen overflow-hidden relative flex flex-col justify-between'>
        <HomeHeroText/>
        <HomesBottomText/>
      </div>

    </div>
  )
}

export default Home
