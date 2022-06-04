import logo from './logo.svg';
import './App.css';
import { Hero } from './components/Hero/Hero';
import { Services } from './components/Services/Services';
function App() {
  return (
    <div className="App">
      <Hero/>
      <Services/>
    </div>
  );
}

export default App;
