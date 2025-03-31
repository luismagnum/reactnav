import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import car from '../../assets/car.png';

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  const [showError, setShowError] = useState(false); 

  const products = [
    { id: 1, name: 'Empanadas', price: 18000 },
    { id: 2, name: 'Tequeños', price: 12000 },
    { id: 3, name: 'Combo Familiar', price: 24000 },
    { id: 4, name: 'Combo Tropical', price: 16000 },
    { id: 5, name: 'Combo Mini', price: 14000 },
    { id: 6, name: 'TequeñoFiesta', price: 19000 },
  ];
  
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (productId, newQuantity) => {
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  const sendOrder = () => {
    if (cart.length === 0) {
      setShowError(true);
      setTimeout(() => setShowError(false), 2000); 
      return;
    }

    const orderText = cart
      .map(
        (product) => `${product.quantity}x ${product.name} - $${product.price * product.quantity}`
      )
      .join('\n');
    const total = calculateTotal();
    const whatsappMessage = `Pedido:\n${orderText}\nTotal: $${total}`;

    const url = `https://wa.me/542984792639?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="bg-[#f1d06b]">
    <div className="text-center items-center max-w-5xl mx-auto mt-6 px-8 md:px-6 mb-6">
      <div className="flex flex-col md:flex-row justify-center items-center text-center mx-auto mb-6">
                <span>
                    <img src={logo} alt='' width={50}/>
                </span>
      <h1 className="text-[#36180d] text-xl md:text-3xl font-bold mb-4 text-center m-4">Sabores de Venezuela</h1>
      </div>
      <h2 className="text-[#36180d] text-xl font-bold mb-6 text-center mt-2">Calcular tu pedido</h2>
      
      <div className="grid grid-cols-1 p-2 md:grid-cols-3 gap-4 mb-6">
        {products.map((product) => (
          <div key={product.id} className=" rounded-lg text-center">
            <h2 className="text-[#36180d] text-xl font-bold">{product.name}</h2>
            <p className="text-[#36180d] font-semibold">${product.price}</p>
            <button
              className="mt-2 px-4 py-2 bg-[#FFC107] text-[#36180d] font-bold rounded-lg hover:text-teal-200"
              onClick={() => addToCart(product)}
            >
              Añadir al carrito
            </button>
          </div>
        ))}
      </div>

      <div className="pt-4">
      <div className='flex flex-row ml-6'>
          <span>
            <img src={car} alt='' width={20} className='mt-1 ml-6 md:ml-28'/>
          </span>
        <h2 className="text-[#36180d] text-xl font-bold ml-2 mb-2">Carrito de Compras</h2>
        </div>
        {cart.length === 0 ? (
          <p className="text-start text-[#36180d] font-semibold ml-16 md:ml-36">El carrito está vacío</p>
        ) : (
          <ul className="space-y-4">
            {cart.map((item) => (
              <li key={item.id} className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-[#36180d] text-center md:ml-36 md:text-left">
                  {item.name} - ${item.price} x {item.quantity}
                </div>
                <div className="flex items-center mt-2 md:mr-36 md:mt-0">
                  <button
                    className="px-2 py-1 bg-red-500 text-white rounded"
                    onClick={() =>
                      item.quantity > 1
                        ? updateQuantity(item.id, item.quantity - 1)
                        : removeFromCart(item.id)
                    }
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    className="px-2 py-1 bg-green-500 text-white rounded"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4">
          <p className="text-lg font-bold text-center ">Total: ${calculateTotal()}</p>

          <div className="flex justify-center ">
            <button
              className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 w-full md:w-auto mb-10"
              onClick={sendOrder}
            >
              Enviar Pedido por WhatsApp
            </button>
          </div>

          {showError && (
            <div className="text-red-500 text-center font-bold mt-4">
              No puedes enviar un pedido con el carrito vacío.
            </div>
          )}
        </div>
      </div>
    </div>
    </section>
  );
};

export default ShoppingCart;
