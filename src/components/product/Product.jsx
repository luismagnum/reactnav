import React from 'react'
import tuno from '../../assets/tequeone.png'
import tdos from '../../assets/tdos.png'
import ttres from '../../assets/ttres.png'
import tcuatro from '../../assets/tcuatro.png'

const Product = () => {
  return (
    <div>
        <div className='container max-w-5xl mx-auto px-4 mb-10'>
            <h3 className='text-3xl text-gray-600 font-bold text-center mt-5 mb-8'>Nuestros Tequeños</h3>
            <div className='md:grid md:grid-cols-4 md:grid-rows-2 md:gap-6 space-y-6 md:space-y-0'>
                
            <div className='relative lg:col-span-2 lg:row-span-2 rounded-lg overflow-hidden'>
                <div className='absolute bottom-0 pl-4 pb-4 text-black font-bold z-20'>
                    
                </div>
                <img src={tuno} alt='survey' className='w-full h-full object-cover'/>
            </div>
            <div className='relative md:col-span-2 md:h-40 rounded-lg overflow-hidden'>
                <div className='absolute bottom-0 pl-4 pb-4 text-black font-bold z-20'>
                    
                </div>
                <img src={tdos} alt='survey' className='w-full h-full object-cover'/>
            </div>
            <div className='relative rounded-lg overflow-hidden'>
                <div className='absolute bottom-0 pl-4 pb-4 text-black font-bold z-20'>
                    
                </div>
                <img src={ttres} alt='survey' className='w-full h-full object-cover'/>
            </div>
            <div className='relative rounded-lg overflow-hidden'>
                <div className='absolute bottom-0 pl-4 pb-4 text-black font-bold z-20'>
                    
                </div>
                <img src={tcuatro} alt='survey' className='w-full h-full object-cover'/>
            </div>   
            </div>
        </div>
    </div>
  )
}

export default Product