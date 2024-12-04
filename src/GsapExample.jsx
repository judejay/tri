import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GsapExample = () => {

useGSAP(() => {
    gsap.to('#box', {
      scrollTrigger: {
        trigger: '#box',
        start: 'top 90%',
      },
      x: 400,
      opacity: 1,
      duration: 3,

     ease: 'power2.inOut',
    });
  }, []);

  return (
    <div>
      <div className='h-[100vh] bg-blue-500 flex justify-center items-center'>
        <p className='text-7xl'>Section 1</p>
      </div>
      <div className='h-[100vh] flex items-center'>
        <div id='box' className='w-80 h-80 opacity-0 bg-red-500 rounded'></div>
      </div>
      <div className='h-[100vh] bg-blue-500 flex justify-center items-center'>
        <p className='text-7xl'>Section 3</p>
      </div>
    </div>
  );
};

export default GsapExample;