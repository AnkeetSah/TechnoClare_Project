import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import MoreBtn from './MoreBtn';
import { tours } from '../../TourData/data';

gsap.registerPlugin(ScrollTrigger);

const Places = ({ limit }) => {
  useEffect(() => {
    // Animating each place item on scroll
    const placeItems = document.querySelectorAll('.place-item');
    placeItems.forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
          },
        }
      );
    });
  }, []);

  return (
    <div>
      <div className="flex xs:justify-center gap-6 mt-10 flex-wrap h-auto mb-14">
        {/* Conditional rendering based on the limit */}
        {tours.slice(0, limit || tours.length).map((places, index) => (
        <Link to={`/tour/${places.id}`}>
          <div key={index} className="place-item flex flex-col gap-4 xs:mb-2 lg:mb-0">
            <div
              className="h-[400px] w-[285px] shadow-xl"
              style={{ borderRadius: '30px' }}
            >
              <img
                style={{ borderRadius: '30px' }}
                className="w-full h-[355px]"
                src={places.img}
                alt=""
              />
              <div className="flex justify-between gap-2 w-[95%] mx-auto px-2 mt-2">
                <div>
                  <h3 className="text-[#083C44] font-semibold">
                    Rs.{places.price}/day
                  </h3>
                </div>
                <div className="flex">
                  <span>
                    <i className="ri-calendar-line"></i> Everyday
                  </span>
                  <span className="ml-2 flex justify-center items-center">
                    <i className="ri-group-fill"></i> 2-20
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h1 className="font-MosafinSemiBold w-[285px] text-3xl text-transparent bg-gradient-to-b from-[#0E515B] via-[#0E515B] to-[#454545] bg-clip-text text-center">
                {places.PackageName}
              </h1>
            </div>
          </div>
         </Link>
        ))}
      </div>

      {tours.limit ? <MoreBtn />:''}
    </div>
  );
};

export default Places;
