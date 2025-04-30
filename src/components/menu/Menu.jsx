import logo from "../../assets/logo.svg";

const menuItems = [
  {
    id: 1,
    name: "Tequeños",
    description: "Rellenos de queso y de Jamon con Queso 12u.",
    price: "$12.000",
    image: "/teque.jpg",
  },
  {
    id: 2,
    name: "Mas Tequeños",
    description: "Rellenos de queso y de Jamon con Queso 24u y 2 salsas de ajo.",
    price: "$24.000",
    image: "/teque.jpg",
  },
  {
    id: 3,
    name: "Empanadas",
    description: "Rellenas de carne y de pollo con queso 12u.",
    price: "$20.000",
    image: "/empa.jpg",
  },
  {
    id: 4,
    name: "MiniCombo",
    description: "2 empanadas de carne 2 empanadas de pollo 4 tequeños 1 salsa ajo",
    price: "$18.000",
    image: "/combomini.jpg",
  },
  {
    id: 5,
    name: "Combo Tropical",
    description: "2 empanadas de carne 2 empanadas de pollo 4 tequeños 1 salsa ajo",
    price: "$20.000",
    image: "/combotro.jpg",
  },
  {
    id: 6,
    name: "Combo Familiar",
    description: "4 empanadas de carne 4 empanadas de pollo 10 tequeños 2 salsa ajo",
    price: "$28.000",
    image: "/combofa.jpg",
  },
  {
    id: 7,
    name: "Maxi Combo",
    description: "6 empanadas de carne 6 empanadas de pollo 6 tequeños 2 salsa ajo",
    price: "$30.000",
    image: "/maxi.jpg",
  },
  {
    id: 8,
    name: "Tequeño Fiestero",
    description: "50 mini tequeños de queso congelados listos para freir",
    price: "$22.000",
    image: "/mini.jpg",
  },
];

export default function Menu() {
  return (
    <section className="bg-[#fff]">
    <div className="max-w-4xl mx-auto mt-6 p-4">
    <div className="flex flex-col md:flex-row justify-center items-center text-center mx-auto mb-6">
        <span>
            <img src={logo} alt='' width={50}/>
        </span>
        <h1 className="text-[#15225b] text-2xl md:text-3xl font-bold mb-4 text-center m-4">Nuestro Menu</h1>
    </div>

      <div className="space-y-4">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center bg-gray-100 p-4 rounded-lg shadow-md space-x-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 rounded-md"
            />

            <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>

              <p className="text-gray-800 font-bold sm:ml-4">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}
