import React from 'react'
import imag3 from '../../assets/imag3.png'
import imag4 from '../../assets/imag4.png'

const Empanadas = () => {
  return (
    <div className='container  px-6 mt-8 mb-10 ml-0'>
        <h3 className='text-3xl text-gray-600 font-bold text-center mt-5 mb-10'>Nuestras Empanadas</h3>
    <div className='flex items-center justify-center'>
        <div className='grid grid-cols-1 md:grid-cols-3'>
        <div className='lg:ml-auto mt-4 mb-4 lg:mb-0'>
        <img src={imag4} alt='survey'  className='w-72 mx-auto md:w-[280px] rounded-lg'/>
    </div>
     <div class="bgblue flex items-center justify-center">
       <div class="card">
       <p className='text-white'>Las empanadas venezolanas son una deliciosa y tradicional comida que se disfruta en todo el país.
        Hechas de una masa de harina de maíz, se rellenan con una variedad de ingredientes que incluyen carne mechada, pollo, queso.
        Las empanadas se fríen hasta obtener una textura crujiente.
        </p>
       </div>
    </div>
    <div className=' lg:ml-auto mt-4 mb-4'>
        <img src={imag3} alt='survey'  className='w-72 mx-auto md:w-[350px] rounded-lg'/>
    </div>
    </div>
    </div>
   </div> 
  )
}

export default Empanadas