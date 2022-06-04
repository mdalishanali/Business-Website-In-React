import logo from './logo.svg';
import './App.css';
import { Hero } from './components/Hero/Hero';
import { Services } from './components/Services/Services';
import { Domain } from './components/Domain/Domain';
function App() {
  return (
    <div className="App">
      <Hero/>
      <Services/>
      <Domain/>
    </div>
  );
}

export default App;
