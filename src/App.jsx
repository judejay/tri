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
                repeat: -1, 
                yoyo: true,
                duration: 2,              
                ease: "power2.out"   ,
                stagger: 0.5,
                       
              }); 
        },[]
       // { scope: container }
    ); 

    return (
      <div className='h-[100vh] flex items-center'>

             <div className="triangle ml-1"></div>
             <div className="triangle ml-1"></div>
             <div className="triangle ml-1"></div>
             <div className="triangle ml-1"></div>
             <div className="triangle ml-1"></div>
             <div className="triangle ml-1"></div>




        </div>
    );
}