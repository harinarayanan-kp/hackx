import React,{useState} from 'react'
// import { FiMenu } from "react-icons/fi";
// import { VscClose } from "react-icons/vsc";

const Navbar = () => {
    const[nav,setNav]=useState(false)

    const handleNav =()=>{
        setNav(!nav)
    }
  return (
    <div className='text-white px-4 py-5 flex justify-between items-centre mx-auto max-w-[1240px] h-20'>
        <h1 className=' w-full text-xl font-bold text-[#00df9a] '>netmeds</h1>
        <ul className='hidden md:flex text-gray-400'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Home</li>
            <li className='p-4'>Home</li>

        </ul>
        {/* <div onClick={handleNav} className='block md:hidden'>
            {nav ? <VscClose size={20}/> : <FiMenu size={20}/>}
      
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-500': 'fixed left-[-100%]'}>
            <ul className='pt-24 p-4 uppercase'>
                <li className='p-4 border-b border-gray-600'>Home</li>
                <li className='p-4 border-b border-gray-600'>Company</li>
                <li className='p-4 border-b border-gray-600'>Resources</li>
                <li className='p-4 border-b border-gray-600'>About</li>
                <li className='p-4 border-b border-gray-600'>Contact</li>
            </ul>
        </div> */}
    </div>
   
  )
}

export default Navbar