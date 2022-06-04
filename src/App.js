import logo from './logo.svg';
import './App.css';
import { Hero } from './components/Hero/Hero';
import { Services } from './components/Services/Services';
import { Domain } from './components/Domain/Domain';
import { About } from './components/About/About';
import { Sponsors } from './components/Sponsors/Sponsors';
import { Pricing } from './components/Pricing/Pricing';
import { Testimonials } from './components/Testimonials/Testimonials';
function App() {
  return (
    <div className="App">
      <Hero/>
      <Services/>
      <Domain/>
      <About/>
      <Sponsors/>
      <Pricing/>
      <Testimonials/>
    </div>
  );
}

export default App;
