import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const MoreBtn = () => {
  const btnRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      btnRef.current,
      { opacity: 0, scale: 0 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: btnRef.current,
          start: 'top 90%',
          end: 'top 50%',
          scrub: true, // Smooth reverse animation
          toggleActions: 'play reverse play reverse',
        },
      }
    );
  }, []);

  return (
    <div > {/* Ensure scrollable space */}
      <div ref={btnRef} className="text-center mb-5">
        <Link
          to="/tour"
          className="px-8 py-2 bg-[#e1f6f9] font-MosafinSemiBold text-[#0E515B rounded-full font-semibold text-2xl hover:bg-[#b8ecf4] hover:text-[#1b3639] transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 inline-flex items-center justify-center gap-2"
        >
          More
        </Link>
      </div>
    </div>
  );
};

export default MoreBtn;
