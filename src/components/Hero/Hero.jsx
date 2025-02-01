import React, { useEffect, useRef } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { gsap } from 'gsap';

const Hero = () => {
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);
  const searchBoxRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.2 }
    );

    gsap.fromTo(
      subHeadingRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.5 }
    );

    gsap.fromTo(
      searchBoxRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1, ease: "elastic.out(1, 0.5)", delay: 0.8 }
    );

    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.8, rotate: -10 },
      { opacity: 1, scale: 1, rotate: 0, duration: 1, ease: "back.out(1.7)", delay: 1.1 }
    );
  }, []);

  return (
    <div
      className="h-screen flex items-center justify-center lg:px-6 py-10"
      style={{
        backgroundImage: `url('../../../assets/images/Home Page.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="text-center text-white w-full max-w-3xl relative">
        <h3
          ref={subHeadingRef}
          className="font-medium text-xl mb-4 font-AfacadRegular text-black relative inline-block"
        >
          <span
            className="relative z-10"
            style={{ WebkitTextStroke: '0.2px rgba(0, 0, 0, 0.2)', letterSpacing: '0.2px' }}
          >
            Explore the World Your Way!
          </span>
        </h3>

        <div ref={searchBoxRef} className="relative xs:w-[300px] sm:w-[350px] lg:w-[340px] mx-auto">
          <div className="p-0.5 rounded-3xl bg-gradient-to-b from-[#0E515B] via-[#4EA6B1] to-[#77DAE9]">
            <input
              type="text"
              className="w-full h-10 pl-10 p-2 rounded-3xl bg-white focus:outline-none placeholder-gray-400 text-gray-800"
              placeholder="Search..."
            />
          </div>
          <i className="ri-search-line absolute font-bold text-2xl bg-gradient-to-b from-[#0E515B] to-[#77DAE9] bg-clip-text text-[#0E515B] top-1 left-3"></i>
        </div>

        <h1
  ref={headingRef}
  className="
    xs:text-4xl xs:mt-1 md:mt-2 lg:mt-0 lg:text-9xl
    font-RabsurRegular text-transparent bg-clip-text
    bg-[#032024]
  "
 
>
  Wander More, Worry Less
</h1>





      </div>

      {/* Button outside content to prevent header overlap */}
      <button
        ref={buttonRef}
        className="absolute right-6 bottom-6 bg-gradient-to-r from-[#0E515B] to-[#77DAE9] hover:scale-105 transition-transform text-white p-3 rounded-full shadow-lg z-10"
      >
        <FaArrowRightLong size={20} />
      </button>
    </div>
  );
};

export default Hero;
