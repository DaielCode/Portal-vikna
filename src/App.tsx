import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import HowWeWork from './components/HowWeWork';
import Calculator from './components/Calculator';
import PopularModels from './components/PopularModels';
import CtaBanner from './components/CtaBanner';
import Benefits from './components/Benefits';
import WhyUs from './components/WhyUs';
import Portfolio from './components/Portfolio';
import B2B from './components/B2B';
import OrderMeasurement from './components/OrderMeasurement';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <HowWeWork />
        <Calculator />
        <PopularModels />
        <CtaBanner />
        <Benefits />
        <WhyUs />
        <Portfolio />
        <B2B />
        <OrderMeasurement />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
