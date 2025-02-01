import React, { useEffect, useRef, useLayoutEffect } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { gsap } from 'gsap';

const Hero = () => {
  const component = useRef(null);
  const timeline = useRef(null);

  // Use useLayoutEffect to prevent flashing before animations
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Create timeline only once
      timeline.current = gsap.timeline({
        paused: true,
        defaults: { ease: "power3.out" }
      });

      timeline.current
        .fromTo(".hero-heading",
          { opacity: 0, y: -50 },
          { opacity: 1, y: 0, duration: 1.2 }
        )
        .fromTo(".hero-subheading",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1 },
          "-=0.8" // Overlap with previous animation
        )
        .fromTo(".hero-searchbox",
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 1, ease: "elastic.out(1, 0.5)" },
          "-=0.6"
        )
        .fromTo(".hero-button",
          { opacity: 0, scale: 0.8, rotate: -10 },
          { opacity: 1, scale: 1, rotate: 0, duration: 1, ease: "back.out(1.7)" },
          "-=0.7"
        );
    }, component);

    // Play timeline only once when component mounts
    timeline.current.play();

    return () => ctx.revert(); // Cleanup
  }, []); // Empty dependency array means this only runs once on mount

  return (
    <div
      ref={component}
      className="h-screen flex items-center justify-center lg:px-6 py-10 bg-cover bg-center"
      style={{
        backgroundImage: `url('../../../assets/images/Home Page.webp')`
      }}
    >
      <div className="text-center text-white w-full max-w-3xl relative">
        <h3 className="hero-subheading font-medium text-xl mb-4 font-AfacadRegular text-black relative inline-block">
          <span
            className="relative z-10"
            style={{ WebkitTextStroke: '0.2px rgba(0, 0, 0, 0.2)', letterSpacing: '0.2px' }}
          >
            Explore the World Your Way!
          </span>
        </h3>

        <div className="hero-searchbox relative xs:w-[300px] sm:w-[350px] lg:w-[340px] mx-auto">
          <div className="p-0.5 rounded-3xl bg-gradient-to-b from-[#0E515B] via-[#4EA6B1] to-[#77DAE9]">
            <input
              type="text"
              className="w-full h-10 pl-10 p-2 rounded-3xl bg-white focus:outline-none placeholder-gray-400 text-gray-800"
              placeholder="Search..."
            />
          </div>
          <i className="ri-search-line absolute font-bold text-2xl bg-gradient-to-b from-[#0E515B] to-[#77DAE9] bg-clip-text text-[#0E515B] top-1 left-3"></i>
        </div>

        <h1 className="hero-heading xs:text-5xl xs:mt-1 md:mt-2 lg:mt-0 lg:text-9xl font-RabsurRegular text-transparent bg-clip-text bg-[#032024]">
          Wander More, Worry Less
        </h1>
      </div>

      <button className="hero-button absolute right-6 bottom-6 bg-gradient-to-r from-[#0E515B] to-[#77DAE9] hover:scale-105 transition-transform text-white p-3 rounded-full shadow-lg z-10">
        <FaArrowRightLong size={20} />
      </button>
    </div>
  );
};

export default Hero;