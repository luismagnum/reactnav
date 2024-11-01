import React from 'react'
import Marquee from 'react-fast-marquee'

const Scroll = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center bg-[#181818] text-neutral-200'>
        <div className='w-[85%] flex flex-col p-4'>
            <div className='flex space-y-2 flex-col text-center mb-2'>
                <span className='text-xl font-bold'>
                    Te Ofrecemos
                </span>
            </div>
            <Marquee autoFill pauseOnClick>
               <div className='bg-[#202020] m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-sky-400'>
                empanadas
                </div>
                <div className='bg-[#202020] m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-purple-700'>
                tequeños
                </div>
                <div className='bg-[#202020] m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-orange-700'>
                combos
                </div>
                <div className='bg-[#202020] m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-sky-500'>
                postres
                </div>
                <div className='bg-[#202020] m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-yellow-500'>
                salsa ajo
                </div>
                <div className='bg-[#202020] m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-green-500'>
                mini tequeños
                </div>      
            </Marquee>
        </div>
    </div>
    )
}

export default Scroll