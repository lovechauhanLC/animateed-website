import React from 'react'

const Videos = () => {
  return (
    <div className='h-full w-full'>
        <video autoPlay loop muted className='h-full w-full object-cover' src="../../../public/videos/video.mp4"></video>
    </div>
  )
}

export default Videos