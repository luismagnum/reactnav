import React from 'react'
import deliv from '../assets/moto.png'

const Delivery = () => {
  return (
    <section className="bg-[#f1d06b]">
        <div className='flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5 mx-4 mb-8'>
      <img src={deliv} alt='img2'width={400}/>
      <div className='space-y-4 lg:pt-0 mx-4'>
        <h1 className='text-[#36180d] font-bold text-3xl text-start'>Delivery Express</h1>
        <p className='text-base mt-4 md:text-xl text-[#36180d] font-medium text-justify'>
        "Contamos con un servicio de delivery, para llevar nuestros productos a la puerta de tu casa.
        Realizamos envios a Villa Regina y alrededores."
        </p>
        </div>
      </div>
    </section>
  )
}

export default Delivery;