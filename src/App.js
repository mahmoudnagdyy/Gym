import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Featurs from './components/Features';
import Offer from './components/Offer';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Featurs />
      <Offer />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
