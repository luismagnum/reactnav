import React from 'react'
import hamb1 from '../../assets/tres1.png';
import hamb2 from '../../assets/tres.png';
import hamb3 from '../../assets/tres2.png';

const Tres = () => {
  return (
    <section className='container mt-10 px-10'>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className='flex flex-col justify-center xl:pr-14'>
                <h1 className='text-3xl font-bold text-gray-600'>Rica Torta tres Leches</h1>
                <p className='text-gray-800 mt-4'>
                    Bizcocho bañado en tres leches: leche evaporada,
                    leche condensada y crema de leche.
                </p>
                <p className='text-base text-gray-900 mt-1'>
                    Decoradas con crema de leche y espolvoreada
                    con canela. <span className='font-semibold'>Deliciosa!</span>
                </p>
                <button className='w-fit mt-4 bg-[#2194f2] px-4 py-2
                rounded-lg hover:text-white transform duration-300'>
                <a href="https://wa.me/542984792639?text=Hola quiero hacer un pedido de torta" target="_blank">Encargar</a>
                </button>
            </div>
        <div>
            <img src={hamb1} alt='hamb' className='w-full rounded-3xl h-56'/>
            <p className='text-gray-950 mt-4'>Crema Leche</p>
        </div>
        <div>
            <img src={hamb2} alt='hamb' className='w-full rounded-3xl h-56' />
            <p className='text-gray-950 mt-4'>Leche Condensada</p>
        </div>
        <div>
            <img src={hamb3} alt='hamb' className='w-full rounded-3xl h-56' />
            <p className='text-gray-950 mt-4'>Leche Evaporada</p>
        </div>
        </div>
    </section>
  )
}

export default Tres