import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Teams from './components/Teams'
import Footer from './components/Footer'
import InternInternalSubcons from "./components/InternInternalSubcons";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/teams" element={<Teams/>} />
        <Route exact path="/teams/dtit" element={<InternInternalSubcons/>} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
