import React from 'react'
import { Link } from 'react-router-dom'

const HomesBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-5'>

        <Link className='text-white text-[7vw] uppercase border-3 border-white rounded-full px-8 pt-5 mb-3 leading-[5.25vw] hover:text-lime-400 hover:border-lime-400 ' to='/work' >
          Work
        </Link>

        <Link className='text-white text-[7vw] uppercase border-3 border-white rounded-full px-8 pt-5 mb-3 leading-[5.25vw] hover:text-lime-400 hover:border-lime-400 ' to='/agency' >
          Agency
        </Link>

    </div>
  ) 
}

export default HomesBottomText