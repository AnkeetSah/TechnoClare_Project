import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Places from '../components/Places_To_Visit/Places';
import Experience from '../components/Experiences/Experience';
import Explore from '../components/explore/Explore';
import Hero from '../components/Hero/Hero';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const popularPlaces = useRef(null);

  useEffect(() => {
    if (popularPlaces.current) {
      gsap.fromTo(
        popularPlaces.current,
        { x: '-100%', opacity: 0 },
        {
          x: '0%',
          opacity: 1,
          duration: 2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: popularPlaces.current,
            start: 'top 85%',
            end: 'top 50%',
            scrub: 1,
          },
        }
      );
    }
  }, []);

  return (
    <div className="bg">
      {/*---------- Hero Section Start ---------------------*/}
      <Hero />
      {/*---------- Hero Section End ---------------------*/}

      {/*--------- Places Section Start --------------------*/}
      <div className="max-w-screen-xl mx-auto px-7 mt-8">
        <h1
          ref={popularPlaces}
          className="text-[#0E515B] text-4xl font-bold relative inline-block mb-6 font-MosafinExtraBold"
        >
          Popular Places To Visit
          <span className="absolute left-0 xs:-bottom-1 bottom-0 w-[70%] h-[2px] lg:top-12 bg-[#3EE5FF]"></span>
        </h1>
        <Places limit={4} /> {/* Add the Places component here */}
      </div>
      {/*--------- Places Section End --------------------*/}

      {/*---------------------Explore Section ----------------------------*/}
      <Explore />
      {/*---------------------Explore Section ----------------------------*/}

      {/*------------Experiences-----------------*/}
      <Experience />
      {/*------------Experiences-----------------*/}
    </div>
  );
};

export default Home;