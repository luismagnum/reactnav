import React from 'react';

// Asegúrate de actualizar las rutas según donde guardes las imágenes en tu proyecto
import mercadoPagoLogo from '../../assets/mercado_pago.png';
import visaLogo from '../../assets/Visa_Logo.png';
import masterCardLogo from '../../assets/mastercard_logo.png';
import debitLogo from '../../assets/debit_card.png';
import creditLogo from '../../assets/credit_card.png';
import transferLogo from '../../assets/transfer.png';

const PaymentMethods = () => {
  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold text-center mb-4">Métodos de Pago</h2>
      <div className="flex flex-wrap justify-center gap-4">
        <img src={visaLogo} alt="Visa" className="h-12 w-auto" />
        <img src={masterCardLogo} alt="MasterCard" className="h-12 w-auto" />
        <img src={transferLogo} alt="Transferencias" className="h-12 w-auto" />
        <img src={debitLogo} alt="Débito" className="h-12 w-auto" />
        <img src={mercadoPagoLogo} alt="Mercado Pago" className="h-12 w-auto" />
      </div>
    </div>
  );
};

export default PaymentMethods;
