import { FaWhatsapp, FaHome, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-yellow-400 to-red-500 text-white py-10 px-6 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Título y mensaje */}
        <div>
          <h2 className="text-3xl font-bold mb-2">Sabores de Venezuela</h2>
          <p className="text-2xl">Listo para hacer tu pedido...</p>
        </div>

        {/* Botón WhatsApp */}
        <div className="flex flex-col items-center md:items-start">
          <p className="text-lg font-semibold mb-2 flex items-center">
            <FaWhatsapp className="mr-2 size-8 text-white font-bold" /> 
            <a 
              href="https://wa.me/5492984792639?text=Hola,%20quiero%20hacer%20un%20pedido"
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#ef2f2f] px-2 py-3 rounded-2xl last:underline hover:text-red-800 transition"
            >
              Click aquí
            </a>
          </p>
        </div>

        {/* Info adicional */}
        <div className="text-xl space-y-2">
          <p className="flex items-center justify-center md:justify-start">
            <FaMapMarkerAlt className="mr-2" /> Villa Regina, Argentina
          </p>
          <p className="flex items-center justify-center md:justify-start">
            <FaEnvelope className="mr-2" /> Dev Luis Enrique Diaz
          </p>
          <p className="flex items-center justify-center md:justify-start">
            <FaHome className="mr-2" />
            <a href="/" className="text-2xl text-[#15225b] font-bold underline hover:text-gray-200 transition">Home</a>
          </p>
        </div>
      </div>

      <div className="mt-8 border-t border-white/30 pt-4 text-center text-base opacity-80">
        © Sabores de Venezuela 2024
      </div>
    </footer>
  );
};

export default Footer;
