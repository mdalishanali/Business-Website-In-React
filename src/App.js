import logo from './logo.svg';
import './App.css';
import { Hero } from './components/Hero/Hero';
import { Services } from './components/Services/Services';
import { Domain } from './components/Domain/Domain';
import { About } from './components/About/About';
function App() {
  return (
    <div className="App">
      <Hero/>
      <Services/>
      <Domain/>
      <About/>
    </div>
  );
}

export default App;
