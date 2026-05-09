import React from 'react'

const Loading = () => {
  return (
    // Changed to flex-col to stack them, added gap-6 for perfect spacing
    <div className='flex flex-col justify-center items-center h-[80vh] gap-6'>
      
      {/* Enhanced Premium Spinner */}
      <div className='relative flex justify-center items-center'>
        {/* The faint background ring */}
        <div className='absolute w-16 h-16 border-4 border-gray-800 rounded-full'></div>
        
        {/* The spinning primary colored ring */}
        <div className='w-16 h-16 border-4 border-transparent border-t-primary border-r-primary/50 rounded-full animate-spin'></div>
      </div>

      {/* Cinematic Pulsing Text */}
      <p className='text-gray-400 font-medium tracking-widest text-lg animate-pulse'>
        LOADING...
      </p>
      
    </div>
  )
}

export default Loading