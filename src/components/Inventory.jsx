import React from 'react'
import Tile from './Tile'
const Inventory = () => {
  return (
    <div className='text-black'>
        <div className=' max-w-[1300px] flex flex-col bg-gradient-to-r from-green-100 to-slate-50 items-center h-[1200px] mx-auto'>
          <div className=''></div>
        <div className='mt-[96px] bg-black max-w-[1100px] w-full h-full rounded-3xl  bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 '>
          <h1 className='text-xl font-light text-gray-600 text-center mt-12'>Dashboard</h1>
      <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        </div>
        
        </div>
        
    </div>
  )
}

export default Inventory