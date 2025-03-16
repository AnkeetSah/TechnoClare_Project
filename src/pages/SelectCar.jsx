import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdPeople } from "react-icons/io";
import { BsSuitcaseLgFill } from "react-icons/bs";
import { IoLogoNoSmoking } from "react-icons/io";

const SelectCar = () => {
  const carData = [
    {
      name: "Mini Bus",
      persons: 10,
      luggage: 9,
      image: "../../assets/images/car2.svg",
    },
    {
      name: "Luxury Car",
      persons: 4,
      luggage: 2,
      image: "../../assets/images/car1.svg",
    },
    {
      name: "SUV",
      persons: 7,
      luggage: 5,
      image: "../../assets/images/car2.svg",
    },
    {
      name: "Sedan",
      persons: 5,
      luggage: 3,
      image: "../../assets/images/car1.svg",
    },
  ];

  return (
    <div className="w-[90%] mx-auto mt-8">
      <div className="flex justify-end ">
      <h4 className="font-AfacadRegular text-sm border border-white text-white px-3 py-1 inline-flex items-center bg-black bg-opacity-40 backdrop-blur-md rounded-md">
          View All Cars <FaArrowRightLong className="ml-2" />
        </h4>
      </div>

      <div class="grid lg:grid-cols-2 gap-6 xs:grid-cols-1   p-4">
       {carData.map((car) => (
         <div class=" h-[260px] flex  ">
         <div className=" w-1/2 h-[260px]">
         <h1 className="text-2xl font-bold font-AfacadBold text-center mb-1">{car.name}</h1>
        <div className="flex gap-4 justify-center items-center font-AfacadRegular text-xl  ">
        <h1 className="text-2xl font-bold font-AfacadBold underline  mb-4  bg-amber-300 h-1 w-22 text-center"></h1>

        </div>
         <div className="flex gap-4 justify-center items-center font-AfacadRegular text-xl mb-3 "><IoMdPeople className="text-4xl" /><h1 className="text-gray-500">Persons-{car.persons}</h1></div>
         <div className="flex gap-4 justify-center items-center font-AfacadRegular text-xl mb-3 "><BsSuitcaseLgFill className="text-3xl" /><h1  className="text-gray-500">Luggage-{car.luggage}</h1></div>
         <div className="flex gap-4 justify-center items-center font-AfacadRegular text-xl mb-4 "><IoLogoNoSmoking className="text-4xl" /><h1  className="text-gray-500 -mr-3">No Smoking</h1></div>
         <div className="flex gap-4 justify-center items-center font-AfacadRegular text-xl mb-2 "><button  className="text-gray-500 py-1 px-5 border-1 border-gray-500">Book Now</button></div>
         </div>

         <div className="bg-[#ADDEE5] w-1/2 h-[260px] flex justify-center items-center relative">
           <img
             src={car.image}
             alt=""
             className="absolute -right-6 w-[800px]"
           />
           <h2 className="underline absolute bottom-6">Details</h2>
         </div>
       </div>
        )
       )}
      </div>
      
      {/* <div class="flex flex-col lg:flex-row gap-5 flex-wrap ">
       {carData.map((car) => (

         <div class="  flex-col-reverse   ">

         <div className=" w-full h-[260px]">
         <h1 className="text-2xl font-bold font-AfacadBold text-center mb-1">{car.name}</h1>
        <div className="flex gap-4 justify-center items-center font-AfacadRegular text-xl  ">
        <h1 className="text-2xl font-bold font-AfacadBold underline  mb-4  bg-amber-300 h-1 w-22 text-center"></h1>

        </div >
         <div className="flex gap-4 justify-center items-center font-AfacadRegular text-xl mb-3 "><IoMdPeople className="text-4xl" /><h1 className="text-gray-500">Persons-{car.persons}</h1></div>
         <div className="flex gap-4 justify-center items-center font-AfacadRegular text-xl mb-3 "><BsSuitcaseLgFill className="text-3xl" /><h1  className="text-gray-500">Luggage-{car.luggage}</h1></div>
         <div className="flex gap-4 justify-center items-center font-AfacadRegular text-xl mb-4 "><IoLogoNoSmoking className="text-4xl" /><h1  className="text-gray-500 -mr-3">No Smoking</h1></div>
         <div className="flex gap-4 justify-center items-center font-AfacadRegular text-xl mb-2 "><button  className="text-gray-500 py-1 px-5 border-1 border-gray-500">Book Now</button></div>
         </div>

         <div className="bg-[#ADDEE5] w-full  h-[200px] rounded-2xl flex justify-center items-center mb-4 relative ">
           <img
             src={car.image}
             alt=""
             className="absolute  w-[240px]"
           />
           <h2 className="underline absolute bottom-6">Details</h2>
         </div>

       </div>


        )
       )}
      </div>
       */}
      
      
      

    </div>
  );
};

export default SelectCar;
