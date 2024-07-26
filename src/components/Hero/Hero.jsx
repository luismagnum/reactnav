import React from 'react';
import imag2 from '../../assets/imag2.png';
import survey from '../../assets/survey.png';
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
        <div className="container text-white">
            {/* navbar components */}
            {/* hero section */}
            <section className='grid grid-cols-1 md:grid-cols-2 place-items-center min-h-[800px]'>
                {/* text content section */}
                <div className='space-y-8 mt-[100px] md:mt-[20px]'>
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
                     text-transparent text-outline'>
                     Venezuela
                     </span> 
                </motion.h1>
                <motion.button
                 initial={{opacity: 0, y: -100}}
                 whileInView={{opacity: 1, y:0}}
                 transition={{
                   duration: 0.5,
                   type: 'spring',
                   stiffness: 100,
                   delay: 1,
                   damping:10,
                 }}
                 className='outline-btn flex justify-center items-center gap-4 group'>
                  <a href="https://wa.me/542984792639?text=Hola quiero hacer un pedido" target="_blank"><span className='text-2xl font-bold bg-primary/70 hover:bg-primary/35 px-4 py-2.5 rounded-lg'>Encargar</span></a>
                <BsWhatsapp
                className='group-hover:translate-x-2 transition'/>
                </motion.button>
                {/* features section here */}
                <div className='bg-black/40 p-6 space-y-2 lg:max-w-[350px] !mt-[60px] mx-2'>
                <h1 className='text-xl uppercase'>Tequeños</h1>
                <p className='text-xs md:text-sm leading-loose text-justify'>
                Los tequeños son una de las delicias más emblemáticas de la gastronomía venezolana.
                Consisten en tiras de queso fresco envueltas en una masa suave y crujiente, luego fritas
                hasta alcanzar un dorado perfecto.
                </p>
                </div>
                </div>
                {/* imagen content section */}
                <div className='relative'>
                    <img src={imag2} alt="imagen1"
                    className='w-full relative z-30' />
                    <div className='absolute -top-20 left-0 z-[1]'>
                      <h1 className='text-[80px] md:text-[90px] font-bold text-cyan-200/10 leading-none'>Tequeños</h1>
                    </div>
                </div>
            </section>
        </div>
      </div>
    </main>
  )
}

export default Hero
