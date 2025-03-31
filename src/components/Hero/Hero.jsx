import React from 'react';
import imag2 from '../../assets/herou.png';
import survey from '../../assets/survey.jpg';
import { BsWhatsapp } from "react-icons/bs";
import { motion } from 'framer-motion';

const bgImage = {
  backgroundImage: `url(${survey})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}


const Hero = () => {
  return (
    <main style={bgImage}>
      <div className='bg-gradient-to-r from-primary to bg-primaryDark/80'>
        <div className="container text-[#36180d]">
            <section className='grid grid-cols-1 md:grid-cols-2 place-items-center min-h-[700px]'>
                <div className='space-y-8 mt-[100px] md:mt-[2px]'>
                <motion.h1
                initial={{opacity: 0, y: -100}}
                whileInView={{opacity: 1, y:0}}
                transition={{
                  duration: 0.4,
                  type: 'spring',
                  stiffness: 100,
                  delay: 1,
                  damping:10,
                }}
                className='text-5xl lg:text-7xl font-bold leading-tight uppercase'>
                    Sabores de <br/>{""}
                    <span className='
                     text-[#36180d] text-outline'>
                     Venezuela
                     </span> 
                </motion.h1>
                <motion.button
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        delay: 1,
        damping: 10,
      }}
      className="flex items-center gap-4 rounded-lg bg-[#36180d] px-6 py-3 transition-all shadow-md"
    >
      <a
        href="https://wa.me/542984792639?text=Hola quiero hacer un pedido"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 text-2xl text-[#FFC107] hover:text-white"
      >
        Encargar
        <BsWhatsapp className="text-[#FFC107] size-8 group-hover:translate-x-2 transition" />
      </a>
      </motion.button>
                </div>
                <div className='relative'>
                    <img src={imag2} alt="imagen2"
                    className='w-full  rounded-md relative z-30' />
                    <div className='absolute -top-5 left-0 z-[1]'>
                      <h1 className='text-[80px] md:text-[90px] font-bold text-red-200/10 leading-none'>Tequeños</h1>
                    </div>
                </div>
            </section>
        </div>
      </div>
    </main>
  )
}

export default Hero
