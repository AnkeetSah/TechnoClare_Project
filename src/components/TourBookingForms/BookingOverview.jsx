import React from "react";
import { useSelector } from "react-redux";
import { FaRegCalendarDays } from "react-icons/fa6";
import { LuClock4 } from "react-icons/lu";
import dayjs from "dayjs";

const BookingOverview = () => {
  // Access visitDate, visitTime, and people from Redux
  const visitDate = useSelector((state) => state.tourBooking.visitDate);
  const visitTime = useSelector((state) => state.tourBooking.visitTime);
  const people = useSelector((state) => state.tourBooking.people);

  // Format date and time
  const formattedDate = visitDate ? dayjs(visitDate).format("ddd, DD MMM YYYY") : "Not Selected";
  const formattedTime = visitTime ? dayjs(visitTime).format("hh:mm A") : "Not Selected";

  // Calculate total price dynamically
  const totalPrice = people.reduce((total, person) => total + person.price * person.Number, 0);

  return (
    <>
      {/* --------------------------------Booking Details Card Div Start----------------------------------- */}
      <div className="lg:w-[40%]  rounded-xl border border-gray-400 p-4 lg:h-[440px]">
        <h2 className="font-sans font-bold text-left text-ticket">Your Tickets Overview</h2>

        {/* ---------------------Top Layer Start------------------------------ */}
        <div className="flex gap-3 mt-4 border-b border-gray-200 pb-2">
          <img
            src="/assets/images/1431610.jpg"
            className="h-[70px] rounded-[5px]"
            alt="Event"
          />
          <div>
            <h3 className="font-bold text-[#263238] mb-1">Wine tasting In Tuscany</h3>
            <div className="flex gap-1 items-center">
              <FaRegCalendarDays className="text-orange-400" />
              <p className="text-[#263238]">{formattedDate}</p>
            </div>
            <div className="flex gap-1 items-center">
              <LuClock4 className="text-orange-400" />
              <p className="text-[#263238]">{formattedTime}</p>
            </div>
          </div>
        </div>
        {/* ---------------------Top Layer End------------------------------ */}

        {/* ------------------------------Middle layer Start----------------------------------- */}
        <div className="border-b border-gray-200 py-5">
          {people.map((person, index) => (
           
              <div className="flex justify-between p-2 py-3" key={index}>
                <div className="flex gap-1 items-center">
                  <h3 className="rounded-full font-semibold bg-blue-200 w-6 h-6 flex items-center justify-center text-ticket">
                    {person.Number}
                  </h3>
                  <h3 className="text-gray-400">{person.type}</h3>
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-ticket">
                    ₹{(person.price * person.Number).toFixed(2)}
                  </h3>
                </div>
              </div>
            
          ))}
        </div>
        {/* ------------------------------Middle layer End----------------------------------- */}

        {/* ------------------------Bottom Layer Start---------------------------- */}
        <div className="flex justify-between py-3">
          <h2 className="font-sans font-bold text-left text-ticket">Total Price</h2>
          <h2 className="font-sans font-bold text-left text-orange-400">₹{totalPrice.toFixed(2)}</h2>
        </div>

        <div className="flex gap-3">
          <button className="text-[#0E515B] font-semibold cursor-pointer rounded-3xl w-full py-2 bg-gradient-to-b from-[#86d2dd] via-[#85d7e1] to-[#c5ebf0]">
            Make the Payment
          </button>
        </div>
        {/* ------------------------Bottom Layer End---------------------------- */}
      </div>
      {/* --------------------------------Booking Details Card Div End----------------------------------- */}
    </>
  );
};

export default BookingOverview;
