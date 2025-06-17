import deliv from '../assets/moto.png'

const Delivery = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10">
          
          <div className="text-center lg:text-left max-w-xl">
            <h1 className="text-[#15225b] font-bold text-3xl md:text-4xl mb-4">
              Delivery Express
            </h1>
            <p className="text-gray-700 text-base md:text-lg font-medium leading-relaxed">
              Contamos con un servicio de delivery para llevar nuestros productos a la puerta de tu casa.
              <br />
              Realizamos envíos a Villa Regina y alrededores.
            </p>
          </div>

          <div className="flex-shrink-0">
            <img
              src={deliv}
              alt="Delivery"
              className="w-52 md:w-64 lg:w-72 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delivery;