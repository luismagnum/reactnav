import React from 'react'
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import whatsap from '../../assets/whatsapp-fill.svg';
import logo from '../../assets/logo.svg'


const Footer = () => {
  return (
    <div className='bg-primary'>
      <div className="flex flex-col md:flex-row justify-center items-center text-center mx-auto mt-0 py-4 mb-4">
                <span>
                    <img src={logo} alt='' width={50}/>
                </span>
      <h1 className="text-[#36180d] text-2xl md:text-3xl font-bold mb-4 text-center m-4">Sabores de Venezuela</h1>
      </div>
      <div className='md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#36180d] py-4 '>
        <h1 className='ml-4 md:ml-20 lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5'>
        <span className='text-primary'>Listo
        para hacer tu pedido...</span>
        </h1>
        <div className='flex items-center justify-center mx-2'>
        <button className="inline-block font-semibold tracking-wide border-none justify-center text-center bg-primary hover:text-teal-500 duration-300 px-3 py-2 font-[Poppins] rounded-lg md:mr-20 md:rounded-md  md: text-white w-full md:w-auto">
        <a href="https://wa.me/542984792639?text=Hola quiero hacer un pedido" target="_blank" className="flex items-center justify-center space-x-2">
        <img src={whatsap} alt="what" width="25px" height="25px" className='flex-shrink-0'/>
        <span className='text-[#36180d] hover:text-white font-bold sm:text-sm md:text-xl'>Click aqui</span>
        </a>
        </button>
        </div>
      </div>
      <div className='flex justify-center items-center py-6'>
      <button className='flex gap-4 justify-center md:mx-32'>
            <a className="text-[#36180d] text-4xl hover:text-primaryDark" href="https://wa.me/542984792639?text=Hola quiero hacer un pedido " target="_blank"><FaWhatsappSquare /></a>
            <a className="text-[#36180d] text-4xl hover:text-primaryDark" href="https://www.facebook.com/profile.php?id=100063541335021" target="_blank"><FaFacebookSquare /></a>
            <a className="text-[#36180d] text-4xl hover:text-primaryDark" href="https://www.instagram.com/saboresdevenezuela2020?igshid=NjlwNzlyMDk2Mg==" target="_blank"><FaInstagramSquare /></a>
          </button>
      </div>
      <div className='text-center items-center'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center items-center justify-center pt-2 text-[#36180d] font-bold text-sm pb-8'>
        <span>@Sabores de Venezuela 2024<br></br>
        Villa regina.Argentina<br></br>
        <span className='text-[#36180d'>Dev</span> Luis Enrique Diaz</span>
        <div className='flex items-center justify-center mx-auto'>
            <button className='grid grid-cols-1 mb-10'>
              <a className='flex text-center text-[#36180d] font-bold text-2xl hover:text-white' href='./'>HOME</a>
            </button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Footer