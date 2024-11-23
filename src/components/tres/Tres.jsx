import React from 'react'
import hamb1 from '../../assets/tres1.png';
import hamb2 from '../../assets/tres.png';
import hamb3 from '../../assets/tres2.png';

const Tres = () => {
  return (
    <section className='text-center items-center max-w-5xl mx-auto px-8 mt-12 md:px-6 mb-10'>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className='flex flex-col justify-center xl:pr-14'>
                <h1 className='text-3xl font-bold text-gray-600'>Rica Torta tres Leches</h1>
                <p className='text-gray-800 mt-4 text-justify'>
                    Bizcocho bañado en tres leches: leche evaporada,
                    leche condensada y crema de leche.
                    Decoradas con crema de leche y espolvoreada
                    con canela. <span className='font-bold'>Deliciosa!</span>
                </p>
            </div>
        <div className='mt-8'>
            <img src={hamb1} alt='hamb' className='w-full rounded-3xl h-52'/>
            <p className='text-gray-950 mt-4 font-bold'>Crema Leche</p>
        </div>
        <div className='mt-8'>
            <img src={hamb2} alt='hamb' className='w-full rounded-3xl h-52' />
            <p className='text-gray-950 mt-4 font-bold'>Leche Condensada</p>
        </div>
        <div className='mt-8'>
            <img src={hamb3} alt='hamb' className='w-full rounded-3xl h-52' />
            <p className='text-gray-950 mt-4 font-bold'>Leche Evaporada</p>
        </div>
        </div>
    </section>
  )
}

export default Tres