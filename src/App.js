import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Informatik from './Pages/Informatik';
import Schwingen from './Pages/Schwingen';
import Steckbrief from './Pages/Steckbrief';
import Kontakt from './Pages/Kontakt';


function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Steckbrief" element={<Steckbrief/>}/>
            <Route path="/Informatik" element={<Informatik/>}/>
            <Route path="/Schwingen" element={<Schwingen/>}/>
            <Route path="/Kontakt" element={<Kontakt/>}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
