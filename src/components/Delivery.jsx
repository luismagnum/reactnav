import React from 'react'
import deliv from '../assets/deliveryfood.png'

const Delivery = () => {
  return (
    <div>
        <div className='flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5 mx-4 mb-8'>
      <img src={deliv} alt='img2'width={600}/>
      <div className='space-y-4 lg:pt-14 mx-4'>
        <h1 className='text-gray-600 font-bold text-3xl text-start'>Delivery Express</h1>
        <p className='text-base md:text-xl text-gray-800 font-medium text-justify'>
         "Descubre la comodidad de nuestro servicio de delivery de comida, 
         que lleva nuestras comidas directamente a tu puerta. 
         Ofrecemos una amplia variedad de opciones para todos los gustos, 
         con entregas rápidas y un proceso de pedido sencillo. 
         ¡Disfruta de la mejor comida sin salir de casa!".
        </p>
        </div>
      </div>
    </div>
  )
}

export default Delivery