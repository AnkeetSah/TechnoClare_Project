import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useEffect(() => {
    // Animate "5+ Years Experience"
    gsap.fromTo(
      ".experience-years", 
      { opacity: 0, y: 50 }, 
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".experience-years",
          start: "top 75%",
          end: "top 25%",
          scrub: true,
        },
      }
    );

    // Animate "2000+ Happy Customers"
    gsap.fromTo(
      ".experience-customers", 
      { opacity: 0, y: 50 }, 
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".experience-customers",
          start: "top 75%",
          end: "top 25%",
          scrub: true,
        },
      }
    );

    // Animate "150+ Vehicles"
    gsap.fromTo(
      ".experience-vehicles", 
      { opacity: 0, y: 50 }, 
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".experience-vehicles",
          start: "top 75%",
          end: "top 25%",
          scrub: true,
        },
      }
    );

    // Animate "19+ Guides"
    gsap.fromTo(
      ".experience-guides", 
      { opacity: 0, y: 50 }, 
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".experience-guides",
          start: "top 75%",
          end: "top 25%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className='lg:h-[165px] xs:h-auto xs:py-5 lg:py-0 flex justify-evenly flex-wrap bg-[#f7efef] mb-40'>
      {/* Experience Years Section */}
      <div className='experience-years flex flex-col justify-center items-center xs:mb-5 lg:mb-0'>
        <h1 className='font-MosafinBold font-black text-6xl text-mygreen'>
          5+
        </h1>
        <h3 className='text-mybrown text-center font-AfacadSemiBold text-2xl leading-none'>
          Years <br /> Experience
        </h3>
      </div>

      {/* Happy Customers Section */}
      <div className='experience-customers flex flex-col justify-center items-center xs:mb-5 lg:mb-0'>
        <h1 className="text-6xl font-MosafinBold font-bold text-mygreen">
          2000+
        </h1>
        <h3 className='text-mybrown w-full font-MosafinSemiBold text-2xl text-left'>
          Happy Customers
        </h3>
      </div>

      {/* Vehicles Section */}
      <div className='experience-vehicles flex flex-col justify-center items-center xs:mt-5 lg:mt-0'>
        <h1 className='text-6xl text-mygreen font-bold font-MosafinBold'>
          150+
        </h1>
        <h3 className='text-mybrown font-MosafinSemiBold w-full text-2xl text-left'>
          Vehicles
        </h3>
      </div>

      {/* Guides Section */}
      <div className='experience-guides flex flex-col justify-center items-center xs:mt-5 lg:mt-0'>
        <h1 className='text-6xl text-mygreen  font-bold font-MosafinBold'>
          19+
        </h1>
        <h3 className='text-mybrown font-MosafinSemiBold w-full text-2xl text-left'>
          Guides
        </h3>
      </div>
    </div>
  );
};

export default Experience;
