
const Products = () => {
    return (
      <section className="max-w-5xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 bg-white shadow-lg rounded-lg overflow-hidden">
          
          <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Tequeños</h2>
            <p className="text-gray-600 text-lg">
              Los tequeños son una deliciosa especialidad venezolana, hechos con queso o de jamon y queso, envueltos en una masa crujiente. Son ideales para compartir en reuniones y celebraciones. ¡No hay quien se resista a su sabor!
            </p>
          </div>
  
          <div>
            <img 
              src="/compote.jpg" 
              alt="Tequeños deliciosos" 
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default Products;
  