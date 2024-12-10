import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);



const GsapScrollTrigger = () => {
  // TODO: Implement the gsap scroll trigger
  const scrollRef = useRef(null);
  useGSAP(
    () => {
      // get all the boxes in the scrollRef
      const boxes = gsap.utils.toArray(scrollRef.current.children);
    

      boxes.forEach((box) => {
        let rank = boxes.indexOf(box) +1;
        let sinRank = Math.sin(rank);
        let cosRank = Math.cos(rank);
        let tanRank = Math.tan(rank);
        gsap.to(box, {
          x: 50 * (sinRank + 4.5),
          y: 50 * (cosRank + 4.5),
          rotation: 360* cosRank + 180,
          borderRadius: "100%",
          scale: 0.5 * tanRank,
          scrollTrigger: {
            trigger: box,
            start: "bottom bottom", // when the bottom of the box hits the bottom of the viewport
            end: "top 10%", // end when the top of the box hits 20% from the top of the viewport
            scrub: true, // scrubbing makes the animation smooth
          },
          ease: "power1.inOut",
        });
      }
      );
    }
    , { scope: scrollRef }
  );


  return (
    <main>
      <div className="w-full h-[70vh] flex justify-center items-center flex-col">
        <p className="text-center text-gray-500">
          Scroll down to see the animation
        </p>

        <svg
          className="animate-bounce mt-5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="blue"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5" />
          <path d="M5 12l7 7 7-7" />
        </svg>
      </div>
     

      <div className="mt-20 w-full h-screen" ref={scrollRef}>
        <div
          id="tri-pink"
          className="triangle"
        />
        <div
          id="tri-orange"
          className=" triangle"
        />
        <div
          id="tri-blue"
          className="triangle"
        />
        <div
          id="tri-green"
          className="triangle"
        />
        <div
          id="tri-red"
          className="triangle"
        />
        <div
          id="tri-yellow"
          className="triangle"
        />
      </div>
    </main>
  );
};

export default GsapScrollTrigger;
