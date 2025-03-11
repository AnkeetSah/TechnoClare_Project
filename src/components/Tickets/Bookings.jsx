import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const TourList = () => {
  const componentRef = useRef(null);

  const tours = [
    {
      image: "/assets/images/1431621.jpg",
      name: "Wine tasting in Tuscany",
      date: "FRI, 23 DEC 2022",
      time: "15:00",
      paymentMethod: {
        name: "Google Pay",
        icon: "https://cdn-icons-png.flaticon.com/512/6124/6124998.png",
      },
      price: "€86.00",
      status: { name: "Upcoming", color: "text-orange-500", icon: "🟠" },
    },
    {
      image: "/assets/images/1431610.jpg",
      name: "Wine tasting in Tuscany",
      date: "FRI, 23 DEC 2022",
      time: "15:00",
      paymentMethod: {
        name: "Phone Pay",
        icon: "https://cdn.iconscout.com/icon/free/png-256/free-phonepe-logo-icon-download-in-svg-png-gif-file-formats--payment-app-application-indian-companies-pack-logos-icons-2249157.png?f=webp&w=512",
      },
      price: "€86.00",
      status: { name: "Ended", color: "text-green-500", icon: "✅" },
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      componentRef.current,
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }
    );
  }, []);

  return (
    <div className=" md:px-8" ref={componentRef}>
      <div className="block md:hidden">
        {tours.map((tour, index) => (
          <div key={index} className="w-full shadow rounded-lg  mb-4 p-4">
            <img src={tour.image} alt="Tour" className="w-full  h-40 rounded-md object-cover" />
            <h3 className="font-semibold mt-2">{tour.name}</h3>
            <p className="text-sm">📅 {tour.date} | 🕒 {tour.time}</p>
            <div className="flex items-center mt-2">
              <img src={tour.paymentMethod.icon} alt={tour.paymentMethod.name} className="w-6 h-6 mr-2" />
              <span className="font-semibold">{tour.paymentMethod.name}</span>
            </div>
            <p className="font-semibold mt-2">{tour.price}</p>
            <span className={`font-semibold ${tour.status.color}`}>{tour.status.icon} {tour.status.name}</span>
          </div>
        ))}
      </div>
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full bg-white shadow rounded-lg">
          <thead>
            <tr className="text-left bg-gray-50">
              <th className="p-4 font-semibold">Tour Name</th>
              <th className="p-4 font-semibold">Payment Method</th>
              <th className="p-4 font-semibold">Price</th>
              <th className="p-4 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {tours.map((tour, index) => (
              <tr key={index} className="border-b">
                <td className="p-4 flex flex-col md:flex-row md:items-center md:space-x-4">
                  <img src={tour.image} alt="Tour" className="w-full md:w-20 h-14 rounded-md object-cover mb-2 md:mb-0" />
                  <div>
                    <h3 className="font-semibold">{tour.name}</h3>
                    <p className="text-sm">📅 {tour.date} | 🕒 {tour.time}</p>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center font-semibold">
                    <img src={tour.paymentMethod.icon} alt={tour.paymentMethod.name} className="w-6 h-6 mr-2" />
                    {tour.paymentMethod.name}
                  </div>
                </td>
                <td className="p-4">{tour.price}</td>
                <td className="p-4">
                  <span className={`font-semibold ${tour.status.color}`}>{tour.status.icon} {tour.status.name}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TourList;
