import React from 'react'
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white'>
      <div className='md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#fffffff19] py-7 '>
        <h1 className='lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5'>
        <span className='text-teal-400'>Listo </span>
        para hacer tu pedido
        </h1>
        <div className='flex flex-wrap'>
          <button className='bg-primary hover:bg-primaryDark duration-500 px-4 py-2.5 
          rounded-md text-white font-bold w-full'>
            <a href="https://wa.me/542984792639?text=Hola quiero hacer un pedido" target="_blank">WhatsApp</a>
          </button>
        </div>
      </div>
      <div className='flex justify-center items-center py-6'>
      <button className='flex gap-4 mx-32'>
            <a className="text-teal-500 text-4xl hover:text-teal-800 " href="https://wa.me/542984792639?text=Hola quiero hacer un pedido " target="_blank"><FaWhatsappSquare /></a>
            <a className="text-teal-500 text-4xl hover:text-teal-800" href="https://www.facebook.com/profile.php?id=100063541335021" target="_blank"><FaFacebookSquare /></a>
            <a className="text-teal-500 text-4xl hover:text-teal-800" href="https://www.instagram.com/saboresdevenezuela2020?igshid=NjlwNzlyMDk2Mg==" target="_blank"><FaInstagramSquare /></a>
          </button>
      </div>
      <div className='text-center items-center'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center items-center justify-center pt-2 text-gray-400 text-sm scroll-pb-8'>
        <span>@Sabores de Venezuela 2024<br></br>
        Dev Luis E. Diaz</span>
        <div className='flex items-center justify-center mx-auto'>
            <button className='grid grid-cols-1'>
              <a className='flex text-center text-teal-500 font-semibold text-2xl hover:text-teal-800 mb-16' href='./'>HOME</a>
            </button>
        </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer