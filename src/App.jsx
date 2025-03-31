import './App.css'
import Boton from './components/Boton'
import Delivery from './components/Delivery'
import Footer from './components/footer/Footer'
import Frecuente from './components/Frecuente/Frecuente'
import Hero from './components/Hero/Hero'
import Navar from './components/Navar/Navar'
import PaymentMethods from './components/PaymentMethods/PaymentMethods'
import ShoppingCart from './components/ShoppingCart/ShoppingCart'
import TextSlider from './components/slide/TextSlider'
import Menu from './components/menu/Menu' 

function App() {
  return (
    <main className="overflow-x-hidden">
      <div id='home'>
      <Navar />
      </div>
      <Hero />
      <TextSlider />
      <div id='menu'>
      <Menu />
      </div>
      <div id='shoppingcart'>
      <ShoppingCart />
      </div>
      <PaymentMethods />
      <Delivery />
      <Frecuente />
      <div id='footer'>
      <Footer />
      </div>
      <Boton />
    </main>
  )
}

export default App
