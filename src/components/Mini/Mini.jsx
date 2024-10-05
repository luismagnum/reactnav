import React from 'react'
import imag5 from '../../assets/imag5.png'


const Mini = () => {
  return (
    <div>
      <div>
        <div className='container max-w-5xl mx-auto px-10 md:px-4 py-2 md:mt-10 mb-8'>
            <div className='flex flex-col-reverse lg:flex-row'>
                <div className='lg:pr-10 space-y-2'>
                    <div className='text-xl text-gray-800 font-medium md:text-base'>50 unidades</div>
                    <div className='text-3xl text-gray-600 font-bold'>Mini-Tequeños</div>
                    <div className='text-xl text-gray-800 font-medium mt-2'>Ideales para fiestas y reuniones.</div>
                    <div className='text-justify'>
                        <p className='text-base md:text-2xl text-gray-800 font-medium mt-4'>Congelados y listos para freir.</p>
                        <p className='text-base md:text-2xl text-gray-800 font-medium mt-4'>Instrucciones para cocinar,</p>
                        <p className='text-base md:text-2xl text-gray-800 font-medium mt-4'>Los sirves calienticos.</p>
                    </div>
                </div>
                <div className='flex-shrink-0 lg:mx-auto mb-4 lg:mb-0'>
                    <img src={imag5} alt='survey'  className='w-80 mx-auto md:w-[260px] rounded-lg'/>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Mini