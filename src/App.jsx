import { useRef } from 'react';

import gsap from 'gsap'; 
import { useGSAP } from '@gsap/react'; 

gsap.registerPlugin(useGSAP);

export default function App() {
    const container = useRef();

    useGSAP(
        () => {            
            gsap.fromTo('#hi',
              {
                x:100
              },              
              {
                rotation:360,
                repeat: -1, 
                yoyo: true,
                duration: 2,              
                x: 450,
                y: -50,
                ease: "power2.out"                 
              }); 
        },
        { scope: container }
    ); 

    return (
        <div ref={container} className="app">
           <div id="hi" className="text-3xl font-bold underline">            
                 Hello World!
           </div>

        </div>
    );
}