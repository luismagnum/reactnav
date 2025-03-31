import React from 'react'
import deliv from '../assets/moto.png'

const Delivery = () => {
  return (
    <section className="bg-[#f1d06b]">
        <div className='flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5 mx-4 mb-8'>
      <img src={deliv} alt='img2'width={400}/>
      <div className='space-y-4 lg:pt-0 mx-4'>
        <h1 className='text-[#36180d] font-bold text-3xl text-start'>Delivery Express</h1>
        <p className='text-base md:text-xl text-[#36180d] font-medium text-justify'>
         "Descubre la comodidad de nuestro servicio de delivery de comida, 
         que lleva nuestras comidas directamente a tu puerta. 
         Ofrecemos una amplia variedad de opciones para todos los gustos, 
         con entregas rápidas y un proceso de pedido sencillo. 
         ¡Disfruta de la mejor comida sin salir de casa!".
        </p>
        </div>
      </div>
    </section>
  )
}

export default Delivery;