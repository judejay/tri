//import { useRef } from 'react';
import gsap from 'gsap'; 
import { useGSAP } from '@gsap/react'; 
import './App.css';

gsap.registerPlugin(useGSAP);

export default function App() {
   // const container = useRef();
    useGSAP(
        () => {            
            gsap.fromTo('.triangle',
              {
                x:100
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
      <div className='h-[100vh] flex items-center' id='circle'>
             <div className="triangle ml-1"></div>
             <div className="triangle ml-1"></div>
             <div className="triangle ml-1"></div>
             <div className="triangle ml-1"></div>
             <div className="triangle ml-1"></div>
             <div className="triangle ml-1"></div>
        </div>
    );
}