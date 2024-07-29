import './App.css'
import Delivery from './components/Delivery'
import Empanadas from './components/Empanadas/Empanadas'
import Footer from './components/footer/Footer'
import Hero from './components/Hero/Hero'
import Mini from './components/Mini/Mini'
import Navar from './components/Navar/Navar'
import Price from './components/Price/Price'
import Product from './components/product/Product'
import Scroll from './components/Scroll'
import TextSlider from './components/slide/TextSlider'

function App() {
  return (
    <main>
      <div id='home'>
      <Navar />
      </div>
      <Hero />
      <TextSlider />
      <div id= 'Empanadas'>
      <Empanadas />
      </div>
      <div id= 'product'>
        <Product />
      </div>
      <div id= 'mini'>
        <Mini />
      </div>
      <Scroll />
      <Price />
      <Delivery />
      <Footer />
    </main>
  )
}

export default App
