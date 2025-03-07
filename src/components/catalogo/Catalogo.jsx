import { FaUtensils, FaPizzaSlice, FaCheese, FaPepperHot } from "react-icons/fa";

const combos = [
  {
    id: 1,
    image: "/combofa.jpg",
    combo: "Combo 4 personas",
    empanadas: "8 unidades",
    tequeños: "10 unidades",
    salsa: "salsa ajo x2",
  },
  {
    id: 2,
    image: "/combotro.jpg",
    combo: "Combo 3 personas",
    empanadas: "6 unidades",
    tequeños: "6 unidades",
    salsa: "Salsa ajo",
  },
  {
    id: 3,
    image: "/combomini.jpg",
    combo: "Combo 2 personas",
    empanadas: "4 unidades",
    tequeños: "4 unidades",
    salsa: "Salsa de ajo",
  },
];

const Catalogo = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Título */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800">
        Nuestros Combos
      </h2>

      {/* Grid de combos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {combos.map((combo) => (
          <div key={combo.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Imagen */}
            <img src={combo.image} alt={combo.combo} className="w-full h-56 object-cover" />

            {/* Detalles */}
            <div className="p-6">
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <FaUtensils className="text-red-500 mr-3" />
                  <span className="font-semibold">Combo:</span> {combo.combo}
                </li>
                <li className="flex items-center text-gray-700">
                  <FaPizzaSlice className="text-yellow-500 mr-3" />
                  <span className="font-semibold">Empanadas:</span> {combo.empanadas}
                </li>
                <li className="flex items-center text-gray-700">
                  <FaCheese className="text-orange-400 mr-3" />
                  <span className="font-semibold">Tequeños:</span> {combo.tequeños}
                </li>
                <li className="flex items-center text-gray-700">
                  <FaPepperHot className="text-green-500 mr-3" />
                  <span className="font-semibold">Salsa:</span> {combo.salsa}
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogo;
