import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Teams from './components/Teams'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Teams />
      <Footer />
    </div>
  );
}

export default App;
