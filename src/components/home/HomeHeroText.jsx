import React from 'react'
import Videos from './Videos'

const HomeHeroText = () => {
  return (
     <div className='text-white font-[font1] pt-3 text-center '>
        <div className='text-[9.5vw] flex items-center justify-center uppercase leading-[8.5vw] '>The spark for</div>
        <div className='text-[9.5vw] flex items-center justify-center uppercase leading-[8.5vw] '>
            all 
            <div className='-mt-6 w-[16vw] h-[7vw] rounded-full overflow-hidden '><Videos/> </div> 
            things
        </div>
        <div className='text-[9.5vw] flex items-center justify-center uppercase leading-[8.5vw] '>creative</div>
    </div>
  )
}

export default HomeHeroText