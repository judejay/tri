//import { useRef } from 'react';
import gsap from 'gsap'; 
import { useGSAP } from '@gsap/react'; 
import './App.css';
import GsapScrollTrigger from './GsapScrollTrigger';

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

<>
<div className=' flex items-center' id='circle'>
            
            <section className='h-[60vh] flex items-center justify-center'>
             <div className="triangle ml-1"></div>
             <div className="triangle ml-1"></div>
             <div className="triangle ml-1"></div>
             <div className="triangle ml-1"></div>
             <div className="triangle ml-1"></div>
             <div className="triangle ml-1"></div>
          </section>
        </div>
                     <GsapScrollTrigger />
                     </>
    );
}