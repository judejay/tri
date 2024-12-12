//import { useRef } from 'react';
import gsap from 'gsap'; 
import { useGSAP } from '@gsap/react'; 
import './App.css';
import GsapScrollTrigger from './GsapScrollTrigger';
import Stagger from './Stagger';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Arrows from './Arrows';
import Home from './Home';

gsap.registerPlugin(useGSAP);

export default function App() {
   // const container = useRef();
    useGSAP(
        () => {            
            gsap.fromTo('.triangle',
              {
                x:500
              },              
              {
                rotation:180,
                repeat: 2, 
                yoyo: true,
                duration: 2,              
                ease: "power2.out",
                stagger: 0.5,
                onComplete: () => {
                  gsap.to('.triangle', {
                    x: 0,
                    y: 0,
                    rotation: 0,
                    duration: 1,
                    ease: "power2.in",
                    stagger: 0.2
                  });
                }
              }); 
        },[]
       // { scope: container }
    ); 

    return (

      <div className="bg-black min-h-screen w-full">
          <Router>
            <Routes>
              <Route path="/gsapto" element={<Arrows />} />              
              <Route path="/stagger" element={<Stagger />} />
              <Route path="/gsapscrolltrigger" element={<GsapScrollTrigger />} />
              <Route path="/" element={<Home />} />
            </Routes>


          </Router>

      </div>




                     
    );
}