import React, { useEffect } from "react";
import { LiaMapMarkerSolid } from "react-icons/lia";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

const Explore = () => {
  useEffect(() => {
    // Animate "Want to Explore" section
    gsap.fromTo(
      ".want_to_explore", 
      { opacity: 0, y: 50 }, 
      {
        opacity: 1,
        y: 0,
        duration: 1.5, // Duration for the animation
        scrollTrigger: {
          trigger: ".want_to_explore", 
          start: "top 75%", // Start when it reaches 75% from the top
          end: "top 25%", // End when it reaches 25% from the top
          scrub: true, // Smooth animation as the user scrolls
        },
      }
    );

    // GSAP ScrollTrigger Animations for other sections
    gsap.fromTo(
      ".tour", 
      { opacity: 0, y: 50 }, 
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".tour",
          start: "top 75%", // Start animation when element reaches 75% from the top of the viewport
          end: "top 25%", // End animation when element reaches 25% from the top
          scrub: true, // Smooth animation based on scroll
        },
      }
    );

    gsap.fromTo(
      ".car", 
      { opacity: 0, y: 50 }, 
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".car",
          start: "top 75%", 
          end: "top 25%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".bus", 
      { opacity: 0, y: 50 }, 
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".bus",
          start: "top 75%", 
          end: "top 25%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="relative">
      <div className="want_to_explore flex flex-col justify-center lg:items-start xs:items-center lg:pl-[260px] pt-5 relative xs:mb-10 lg:mb-[140px]">
        <div className="leading-none xs:space-y-[-10px] lg:space-y-[-20px]">
          <h2 className="font-RabsurRegular text-5xl lg:text-8xl text-[#0E515B] leading-none lg:text-left">
            Want to
          </h2>
          <h1 className="font-RabsurRegular text-8xl lg:text-[250px] text-[#0E515B] leading-none">
            Explore
          </h1>
        </div>
        <img
          src="../../../assets/images/Vector (1).svg"
          className="lg:h-36  absolute lg:right-[250px] xs:hidden sm:flex sm:h-24 sm:right-[160px] sm:top-[70px] lg:block lg:top-52 "
          alt=""
        />
        <LiaMapMarkerSolid className="text-5xl font-bold absolute xs:right-34 sm:right-[150px] lg:right-[244px] text-[#0E515B] xs:top-5 lg:top-40" />
      </div>

      <div className="flex gap-32 justify-center flex-wrap mb-36">
        {/* Tour Block */}
        <div className="tour xs:h-[338px] xs:w-[350px]  lg:h-[338px] sm:w-[554px] bg-gradient-to-b from-[#C7E1E5] to-[#fff] relative shadow-md rounded-3xl">
          <div className="leading-none pl-8 pt-8">
            <h1 className="font-RabsurRegular text-transparent bg-clip-text bg-gradient-to-b from-[#0E515B] to-[#454545] text-6xl">
              Book
            </h1>
            <h1 className="font-RabsurRegular text-transparent bg-clip-text bg-gradient-to-b from-[#0E515B] to-[#454545] text-6xl">
              Tour
            </h1>
          </div>
          <button className="bg-[#84b0b7] h-[41px] font-RabsurRegular font-medium text-2xl px-5 rounded-2xl shadow-md text-white ml-8 mt-3">
            Book Now
          </button>
          <img
            src="../../../assets/images/tour.svg"
            className="absolute bottom-2"
            alt=""
          />
        </div>

        {/* Car Block */}
       <Link  to="/cabBooking">
       <div className="car xs:h-[338px] xs:w-[350px] lg:h-[338px] sm:w-[554px] bg-gradient-to-b from-[#C7E1E5] to-[#fff] shadow-md relative rounded-3xl">
          <div className="leading-none pl-8 pt-8">
            <h1 className="font-RabsurRegular text-transparent bg-clip-text bg-gradient-to-b from-[#0E515B] via-[#0E515B] to-[#454545] text-6xl">
              Rent a
            </h1>
            <h1 className="font-RabsurRegular text-transparent bg-clip-text bg-gradient-to-b from-[#0E515B] via-[#0E515B] to-[#454545] text-6xl">
              Car
            </h1>
          </div>
          <h3 className="font-MosafinBold text-2xl pl-3 mt-3">₹699/- per hour</h3>
          <button className="bg-[#84b0b7] h-[41px] font-RabsurRegular font-medium text-2xl px-5 rounded-2xl shadow-md text-white ml-3 mt-2">
            Book Now
          </button>
          <img
            src="../../../assets/images/car.svg"
            className="absolute xs:-right-3 lg:-right-7 xs:w-[350px] lg:w-[440px] -bottom-15"
            alt=""
          />
        </div>
        </Link>

        {/* Bus Block */}
        <div className="bus xs:h-[538px] xs:w-[350px] lg:h-[538px] sm:w-[554px] lg:w-[850px] bg-gradient-to-b from-[#C7E1E5] to-[#fff] rounded-3xl shadow-md relative">
          <div className="leading-none pl-9 pt-8">
            <h1 className="font-RabsurRegular text-transparent bg-clip-text bg-gradient-to-b from-[#0E515B] via-[#0E515B] to-[#454545] text-7xl">
              Rent or Book a
            </h1>
            <h1 className="font-RabsurRegular text-transparent bg-clip-text bg-gradient-to-b from-[#0E515B] via-[#0E515B] to-[#454545] xs:text-6xl lg:text-9xl">
              Bus
            </h1>
          </div>
          <h3 className="font-MosafinBold text-2xl ml-9">₹299/- per hour</h3>
          <button className="bg-[#84b0b7] h-[41px] font-RabsurRegular font-medium text-2xl px-5 rounded-2xl shadow-md text-white ml-9 mt-2">
            Rent Now
          </button>
          <img
            src="../../../assets/images/bus.svg"
            className="absolute w-[90%] lg:-right-32 lg:-bottom-14 lg:h-[400px]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Explore;
