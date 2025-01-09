import React from 'react'
import './PriceStyle.css'

const Price = () => {
  return (
    <div className='mb-10'>
      <h3 className='text-3xl text-gray-600 font-bold text-center mt-5 mb-8'>Precios</h3>
    <div className='flex justify-center'>
    <div className='grid grid-cols-1 md:grid-cols-3 md:gap-8'>
      <div className="card">
        <div className="content">
          <div className="title">Empanadas</div>
          <div className="price">$18000</div>
          <div className="description">
            Hechas con harina de maiz.
             Carne esmechada con queso.
             Pollo esmechado con queso.
             Cordon blue. Rellenas de pollo
             queso y jamon.
          </div>
        </div>
        <button className='mt-4'>
        <a href="https://wa.me/542984792639?text=Hola quiero hacer un pedido" target="_blank"><span className='text-2xl text-primary  hover:text-primaryDark font-bold'>Encargar</span></a>
        </button>
      </div>
      <div className="card">
        <div className="content">
          <div className="title">Tequeños</div>
          <div className="price">$12000</div>
          <div className="description">
            Hechos con harina de trigo.
             Son cocinados en aceite.
             Rellenos de queso o
             Rellenos de queso y jamon.
             *Incluyen salsa de ajo*.
          </div>
        </div>
        <button className='mt-4'>
        <a href="https://wa.me/542984792639?text=Hola quiero hacer un pedido" target="_blank"><span className='text-2xl text-primary  hover:text-primaryDark font-bold'>Encargar</span></a>
        </button>
      </div>
      <div className="card">
        <div className="content">
          <div className="title">MiniTequeños</div>
          <div className="price">$19000</div>
          <div className="description">
          Hechos con harina de trigo.
            Cantidad 50 minitequeños.
            Ideales para fiestas y reuniones.
            Con un tamaño de 3cm.
            Vienen congelados para freir.
          </div>
        </div>
        <button className='mt-4'>
        <a href="https://wa.me/542984792639?text=Hola quiero hacer un pedido" target="_blank"><span className='text-2xl text-primary  hover:text-primaryDark font-bold'>Encargar</span></a>
        </button>
      </div>
      <div className="card">
        <div className="content">
          <div className="title">Combos</div>
          <div className="price">$24000</div>
          <div className="description">
          COMBO FAMILIAR que contiene:
             8 empanadas surtidas carne y pollo.
             10 tequeños de queso. 
             2 salsa de ajo.
             Ideal para 4 personas.
          </div>
        </div>
        <button className='mt-4'>
        <a href="https://wa.me/542984792639?text=Hola quiero hacer un pedido" target="_blank"><span className='text-2xl text-primary  hover:text-primaryDark font-bold'>Encargar</span></a>
        </button>
      </div>
      <div className="card">
        <div className="content">
          <div className="title">Combos</div>
          <div className="price">$16000</div>
          <div className="description">
          COMBO TROPICAL que contiene:
             6 empanadas surtidas carne y pollo.
             6 tequeños de queso. 
             1 salsa de ajo.
             Ideal para 3 personas.
          </div>
        </div>
        <button className='mt-4'>
        <a href="https://wa.me/542984792639?text=Hola quiero hacer un pedido" target="_blank"><span className='text-2xl text-primary  hover:text-primaryDark font-bold'>Encargar</span></a>
        </button>
      </div>
      <div className="card">
        <div className="content">
          <div className="title">Combos</div>
          <div className="price">$14000</div>
          <div className="description">
          MINI COMBO que contiene:
          3 empanadas surtidas carne y pollo.
          3 tequeños de queso. 
          1 salsa de ajo.
          Ideal para 2 personas.
          </div>
        </div>
        <button className='mt-4'>
        <a href="https://wa.me/542984792639?text=Hola quiero hacer un pedido" target="_blank"><span className='text-2xl text-primary hover:text-primaryDark font-bold'>Encargar</span></a>
        </button>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Price
