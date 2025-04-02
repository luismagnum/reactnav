import { SiMercadopago } from "react-icons/si"; 

export default function PaymentMethods() {
  return (
    <section className="bg-[#f1d06b]">
    <div className="max-w-md mx-auto shadow-lg rounded-lg p-6 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-[#36180d] mb-4">Medios de Pago</h2>

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
