import './App.css';
import GsapScrollTrigger from './Pages/GsapScrollTrigger';
import Stagger from './Pages/Stagger';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Arrows from './Pages/Arrows';
import Home from './Pages/Home';


export default function App() {
      return (
      <div className="bg-black min-h-screen w-full">
          <Router>
            <Routes>
              <Route path="/gsapfromto" element={<Arrows />} />              
              <Route path="/stagger" element={<Stagger />} />
              <Route path="/gsapscrolltrigger" element={<GsapScrollTrigger />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
      </div>                     
    );
}