import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Videos from '../components/home/Videos'
import HomeHeroText from '../components/home/HomeHeroText'
import HomesBottomText from '../components/home/HomesBottomText'

const Home = () => {


  return (
    <div className='text-white'>
      <div className='h-screen w-screen fixed'>
        <Videos/>
      </div>
      <div className='h-screen w-screen relative pb-5 overflow-hidden flex flex-col justify-between'>
        <HomeHeroText/>
        <HomesBottomText/>
      </div>
    </div>
  )
}

export default Home