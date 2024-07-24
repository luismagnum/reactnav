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
          <button className='bg-teal-400 hover:bg-teal-700 duration-500 px-5 py-2.5 font-[Poppins]
          rounded-md text-white font-bold md:w-auto w-full'>
            <a href="https://wa.me/542984792639?text=Hola quiero hacer un pedido" target="_blank">WhatsApp</a>
          </button>
        </div>
      </div>
      <div className='flex flex-row items-center justify-center ml-20 md:ml-14 gap-2'>
      <button className='flex border-2 p-2 ml-8 rounded-full text-white gap-4'>
            <a className="text-teal-500 text-4xl hover:text-teal-800 " href="https://wa.me/542984792639?text=Hola quiero hacer un pedido " target="_blank"><FaWhatsappSquare /></a>
            <a className="text-teal-500 text-4xl hover:text-teal-800" href="https://www.facebook.com/profile.php?id=100063541335021" target="_blank"><FaFacebookSquare /></a>
            <a className="text-teal-500 text-4xl hover:text-teal-800" href="https://www.instagram.com/saboresdevenezuela2020?igshid=NjlwNzlyMDk2Mg==" target="_blank"><FaInstagramSquare /></a>
          </button>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm scroll-pb-8'>
        <span>@Sabores de Venezuela 2024<br></br>
        Dev Luis E. Diaz</span>
        <div className='flex items-center justify-center mx-auto'>
            <button className='grid grid-cols-1'>
              <a className='flex text-center text-teal-500 font-semibold text-2xl hover:text-teal-800 mb-16' href='./'>HOME</a>
            </button>
          </div>
      </div>
    </footer>
  )
}

export default Footer