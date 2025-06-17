import { FaClock } from "react-icons/fa";

const Horario = () => {
  return (
    <section className="max-w-xl mx-auto p-6 mt-6">
      <div className="bg-white shadow-2xl rounded-lg p-6 text-center border-t-4 border-yellow-500">
        <div className="flex items-center justify-center mb-4 text-yellow-600 text-4xl">
          <FaClock />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-[#15225b]  mb-2">Horario de Atención</h2>
        <p className="text-gray-800 text-lg">
          De <span className="font-semibold">Martes a Sábado</span><br />
          De <span className="font-semibold">8:00 PM</span> a <span className="font-semibold">11:00 PM</span>
        </p>
      </div>
    </section>
  );
};

export default Horario;