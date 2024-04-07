import React from 'react'

const Cards = () => {
  return (
    <div className='w-full py-[2rem] '>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8 h-[20%]'>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 '>
        <h2 className='text-2xl font-light text-center py-2 text-gray-400 pt-3'>Awaiting Collection</h2>
        <p className='text-center text-3xl font-semibold'>10</p>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10'>
        <h2 className='text-2xl font-light text-center py-2 text-gray-400 pt-3'>Completed</h2>
        <p className='text-center text-3xl font-semibold'>12</p>
        </div>
   

        
        </div>

    </div>
  )
}

export default Cards