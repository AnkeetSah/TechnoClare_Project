import React, { useState } from "react";
import BackLink from "../components/BackLink";
import { FaRegCalendarDays } from "react-icons/fa6";
import { LuClock4 } from "react-icons/lu";

import FirstForm from "../components/TourBookingForms/FirstForm";

import BookingOverview from "../components/TourBookingForms/BookingOverview";
const Booking = () => {
  

  const members = [
    {
      number: 2,
      description: "Adult (18+)",
      price: "998.0",
    },
    {
      number: 1,
      description: "Child (6-17)",
      price: "299.0",
    },
    {
      number: 2,
      description: "Infant (0-5)",
      price: "998.0",
    },
  ];

  return (
    <div className="px-6 py-[95px] min-h-screen">
      <BackLink />

      <h1 className="text-4xl font-monospace text-center ">Exciting Adventures Await – Book & Pay Now!</h1>

      <div className="h-auto lg:w-[90%] xs:w-full  mx-auto text-center">
        {/* --------------------------Main div Start------------------------------- */}
        <div className="flex justify-between flex-wrap xs:gap-5 lg:gap-0 xs:flex-col lg:flex-row mt-[90px] w-full">


          {/*  ----------------------Form Div Start---------------------------------- */}
          <div className="lg:w-[50%]  -mt-5 xs:w-full">
            <FirstForm />
          </div>
          {/*  ----------------------Form Div End---------------------------------- */}
          

          {/* --------------------------------Booking Details Card Div Start----------------------------------- */}
          <BookingOverview />
          {/* --------------------------------Booking Details Card Div End----------------------------------- */}
        </div>
        {/* --------------------------Main div End-------------------------------------------------- */}
      </div>
    </div>
  );
};

export default Booking;
