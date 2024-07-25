import React from 'react'
import imag5 from '../../assets/imag5.png'


const Mini = () => {
  return (
    <div>
      <div>
        <div className='container max-w-5xl mx-auto px-10 md:px-4 py-2 md:mt-10'>
            <div className='flex flex-col-reverse lg:flex-row'>
                <div className='lg:pr-10 space-y-2'>
                    <div className='text-base text-gray-800 font-medium md:text-base'>50 unidades</div>
                    <div className='text-3xl text-gray-600 font-bold'>Mini-Tequeños</div>
                    <div className='text-base text-gray-800 font-medium mt-2'>Ideales para fiestas y reuniones.</div>
                    <div className='text-justify'>
                        <p className='text-base text-gray-800 font-medium mt-4'>Congelados y listos para freir.</p>
                        <p className='text-base text-gray-800 font-medium mt-4'>Instrucciones para cocinar,</p>
                        <p className='text-base text-gray-800 font-medium mt-4'>Los sirves calienticos.</p>
                        <button className='text-center items-center text-white bg-primary hover:bg-primaryDark font-bold px-3 py-2 rounded mt-6 mb-10 duration-500'>
                        <a href="https://wa.me/542984792639?text=Hola quiero hacer un pedido" target="_blank">WhatsApp</a>
                        </button>
                    </div>
                </div>
                <div className='flex-shrink-0 lg:ml-auto mb-4 lg:mb-0'>
                    <img src={imag5} alt='survey'  className='w-80 mx-auto md:w-[300px] rounded-lg'/>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Mini
