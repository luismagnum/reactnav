import React from 'react'
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import whatsap from '../../assets/whatsapp-fill.svg';


const Footer = () => {
  return (
    <div className='bg-gray-900 text-white'>
      <div className='md:flex md:justify-between md:items-center sm:px-12 px-4 bg-gray-900 py-7 '>
        <h1 className='ml-4 md:ml-20 lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5'>
        <span className='text-primary'>Listo </span>
        para hacer tu pedido<span className='text-primary'>...</span>
        </h1>
        <div className='flex items-center justify-center mx-2'>
        <button className="inline-block font-semibold tracking-wide border-none justify-center text-center bg-gray-500 hover:text-teal-500 duration-300 px-3 py-2 font-[Poppins] rounded-xl md:mr-20 md:rounded-md  md: text-white w-full md:w-auto">
        <a href="https://wa.me/542984792639?text=Hola quiero hacer un pedido" target="_blank" className="flex items-center justify-center space-x-2">
        <img src={whatsap} alt="what" width="30px" height="30px" className='flex-shrink-0'/>
        <span className='font-bold sm:text-sm md:text-xl'>Click aqui</span>
        </a>
        </button>
        </div>
      </div>
      <div className='flex justify-center items-center py-6'>
      <button className='flex gap-4 mx-32'>
            <a className="text-primary text-4xl hover:text-primaryDark" href="https://wa.me/542984792639?text=Hola quiero hacer un pedido " target="_blank"><FaWhatsappSquare /></a>
            <a className="text-primary text-4xl hover:text-primaryDark" href="https://www.facebook.com/profile.php?id=100063541335021" target="_blank"><FaFacebookSquare /></a>
            <a className="text-primary text-4xl hover:text-primaryDark" href="https://www.instagram.com/saboresdevenezuela2020?igshid=NjlwNzlyMDk2Mg==" target="_blank"><FaInstagramSquare /></a>
          </button>
      </div>
      <div className='text-center items-center'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center items-center justify-center pt-2 text-gray-400 text-sm pb-8'>
        <span>@Sabores de Venezuela 2024<br></br>
        Dev Luis Enrique Diaz</span>
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