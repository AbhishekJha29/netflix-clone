import React from 'react'
import { CiCircleInfo, CiPlay1 } from 'react-icons/ci'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-[vw] aspect-video absolute text-white pt-[18%] p-12'>
      <h1 className='text-3xl font-bold'>{title}</h1>
      <p className='w-1/3 mt-4'>{overview}</p>
      <div className='flex mt-8 '>
        <button className='flex items-center px-6 py-2 bg-white text-black rounded-md hover:bg-opacity-80'>
           <CiPlay1 size="24px"/>
           <span className='ml-1'>play</span>
          </button>
        <button className='ml-1 mx-2 flex items-center px-6 py-2 bg-gray-500 bg-opacity-50 bg-white text-black rounded-md'>
          <CiCircleInfo size="24px"/>
          <span className='ml-1'>Watch More</span>
          </button>
      </div>
    </div>
  )
}

export default VideoTitle
