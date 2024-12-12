//import { useRef } from 'react';
import gsap from 'gsap'; 
import { useGSAP } from '@gsap/react'; 


gsap.registerPlugin(useGSAP);


const Arrows = () => {  
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
        <div className=' flex items-center justify-center mt-4' id='circle'>            
             <div className="triangle ml-1"></div>
             <div className="triangle ml-1"></div>
             <div className="triangle ml-1"></div>
             <div className="triangle ml-1"></div>
             <div className="triangle ml-1"></div>
             <div className="triangle ml-1"></div>
        </div>
    );
    };


export default Arrows;