import { SiMercadopago } from "react-icons/si"; 

export default function PaymentMethods() {
  return (
    <section className="max-w-xl mx-auto p-6 mt-6">
    <div className="bg-white shadow-2xl rounded-lg p-6 text-center border-t-4 border-yellow-500">
      <h2 className="text-2xl md:text-3xl font-bold text-[#15225b] mb-4">Medios de Pago</h2>

      <div className="flex justify-center mb-4 text-blue-900">
        <SiMercadopago className="text-7xl" /> 
      </div>

      <p className="text-lg">
        Aceptamos pagos a través de <span className="font-semibold text-blue-700">Mercado Pago</span>.
      </p>
    </div>
    </section>
  );
}
