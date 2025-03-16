import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";
import { IoMdCalendar, IoMdPeople } from "react-icons/io";
import { BsCashStack } from "react-icons/bs";

const FinalBooking = () => {
  const [license, setLicense] = useState(null);

  const handleFileChange = (event) => {
    setLicense(event.target.files[0]);
  };

  return (
    <div className="w-[90%] mx-auto mt-8 p-6 bg-gray-900 text-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Booking Confirmation</h2>

      <div className="grid lg:grid-cols-2 gap-6 items-center">
        {/* Car Image */}
        <div className="bg-[#ADDEE5] rounded-lg p-4 flex justify-center items-center">
          <img src="../../assets/images/car1.svg" alt="Selected Car" className="w-80" />
        </div>

        {/* Booking Details (Static) */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Luxury Car</h3>
          <p className="flex items-center gap-2"><IoMdCalendar /> <strong>From:</strong> 20th March 2025</p>
          <p className="flex items-center gap-2"><IoMdCalendar /> <strong>To:</strong> 25th March 2025</p>
          <p className="flex items-center gap-2"><IoMdPeople /> <strong>People:</strong> 4</p>
          <p className="flex items-center gap-2 text-green-400"><BsCashStack /> <strong>Total Amount:</strong> $550</p>
        </div>
      </div>

      {/* Upload Driving License */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg text-center">
        <label className="cursor-pointer flex items-center gap-3 justify-center bg-gray-700 p-3 rounded-lg text-gray-300 hover:bg-gray-600">
          <FaUpload className="text-xl" /> Upload Driving License
          <input type="file" className="hidden" onChange={handleFileChange} accept="image/*,application/pdf" />
        </label>
        {license && <p className="mt-2 text-sm">{license.name}</p>}
      </div>

      {/* Pay Button */}
      <div className="mt-6 text-center">
        <button className="bg-green-500 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-green-600">
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default FinalBooking;
