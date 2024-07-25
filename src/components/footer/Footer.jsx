import React from 'react'
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='bg-gray-900 text-white'>
      <div className='md:flex md:justify-between md:items-center sm:px-12 px-4 bg-gray-900 py-7 '>
        <h1 className='ml-4 lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5'>
        <span className='text-primary'>Listo </span>
        para hacer tu pedido
        </h1>
        <div className='flex items-center justify-center'>
          <button className='text-center items-center md:mr-2 px-6 py-3 rounded-md text-white bg-primary hover:bg-primaryDark font-bold '>
            <a href="https://wa.me/542984792639?text=Hola quiero hacer un pedido" target="_blank"><span className='text-base text-white font-bold'>WhatsApp</span></a>
          </button>
        </div>
      </div>
      <div className='flex justify-center items-center py-6'>
      <button className='flex gap-4 mx-32'>
            <a className="text-primary text-4xl hover:text-primaryDark " href="https://wa.me/542984792639?text=Hola quiero hacer un pedido " target="_blank"><FaWhatsappSquare /></a>
            <a className="text-primary text-4xl hover:text-primaryDark" href="https://www.facebook.com/profile.php?id=100063541335021" target="_blank"><FaFacebookSquare /></a>
            <a className="text-primary text-4xl hover:text-primaryDark" href="https://www.instagram.com/saboresdevenezuela2020?igshid=NjlwNzlyMDk2Mg==" target="_blank"><FaInstagramSquare /></a>
          </button>
      </div>
      <div className='text-center items-center'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center items-center justify-center pt-2 text-gray-400 text-sm scroll-pb-8'>
        <span>@Sabores de Venezuela 2024<br></br>
        Dev Luis E. Diaz</span>
        <div className='flex items-center justify-center mx-auto'>
            <button className='grid grid-cols-1'>
              <a className='flex text-center text-primary font-semibold text-2xl hover:text-primaryDark mb-20' href='./'>HOME</a>
            </button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Footer