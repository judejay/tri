import { useRef } from 'react';

import gsap from 'gsap'; // <-- import GSAP
import { useGSAP } from '@gsap/react'; // <-- import the hook from our React package

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
                x: 200,
                y: -50,

              
              
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