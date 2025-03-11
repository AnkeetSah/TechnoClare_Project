import React, { useState } from "react";
import BackLink from "../components/BackLink";
import { Box, Stepper, Step, StepLabel, Button } from "@mui/material";
import { FaRegCalendarDays } from "react-icons/fa6";
import { LuClock4 } from "react-icons/lu";

import FirstForm from "../components/TourBookingForms/FirstForm";
import PaymentPage from "../components/TourBookingForms/PaymenPage";
const steps = ["Step 1", "Step 2", "Step 3"];

const Booking = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

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
    <div className="px-6 py-[95px]  min-h-screen">
      <BackLink />

      <div className="h-auto">
      <Box sx={{ width: "90%", margin: "auto", mt: 2, textAlign: "center" }}>
       
       {/* -------------------------Stepper Start----------------------- */}
        <Box sx={{ width: "60%", margin: "auto", mt: 2, textAlign: "center" }}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label, index) => (
              <Step key={index}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
         {/* -------------------------Stepper end----------------------- */}
    
         {/* --------------------------Main div Start------------------------------- */}
        <Box className="flex justify-between flex-wrap xs:gap-5 lg:gap-0 xs:flex-col lg:flex-row  " sx={{ mt: 4, width: "100%" }}>

         {/*  ----------------------Form Div Start---------------------------------- */}
          <div className="lg:w-[47%] xs:w-full  ">
            
            <FirstForm/>
           
          </div>
         {/*  ----------------------Form Div End---------------------------------- */}


         {/* --------------------------------Booking Details Card Div Start----------------------------------- */}
          <div className="lg:w-[40%] rounded-xl border border-gray-400 p-4 lg:h-[440px]">
            <h2 className="font-sans font-bold text-left text-ticket">
              Your Tickets Overview
            </h2>

            {/* ---------------------Top Layer Start------------------------------ */}
            <div className="flex gap-3 mt-4 border-b border-gray-200 pb-2">
              <img
                src="../../public/assets/images/1431610.jpg"
                className="h-[70px] rounded-[5px]"
                alt=""
              />
              <div>
                <h3 className="font-bold text-[#263238] mb-1">
                  Wine tasting In Tuscany
                </h3>
                <div className="flex gap-1 items-center ">
                  <FaRegCalendarDays className="text-orange-400" />
                  <p className="text-[#263238]">FRI, 23 DEC 2025</p>
                </div>
                <div className="flex gap-1 items-center">
                  {" "}
                  <LuClock4 className="text-orange-400" />
                  <p className="text-[#263238]">7:00 AM</p>
                </div>
              </div>
            </div>
             {/* ---------------------Top Layer End------------------------------ */}

               {/* ------------------------------Middle layer Start----------------------------------- */}
            <div className=" border-b border-gray-200 py-5">
              {members.map((e) => (
                <div className="flex justify-between p-2  py-3 ">
                  <div className="flex gap-1 items-center">
                    <h3 className="rounded-full font-semibold bg-blue-200 w-6 h-6 flex items-center justify-center text-ticket">
                      {e.number}
                    </h3>

                    <h3 className="text-gray-400">{e.description}</h3>
                  </div>

                  <div>
                    <h3 className="font-sans font-semibold text-ticket">
                      ₹{e.price}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
            {/* ------------------------------Middle layer End----------------------------------- */}
      

            {/* ------------------------Bottom Layer Start---------------------------- */}
            <div className="flex justify-between py-3">
              <h2 className="font-sans font-bold text-left text-ticket">
                Total Price
              </h2>
              <h2 className="font-sans font-bold text-left text-orange-400">
                ₹14790.00
              </h2>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleBack}
                className={`text-[#0E515B] font-semibold rounded-3xl w-[40%] py-2 
    bg-gradient-to-b from-[#86d2dd] via-[#85d7e1] to-[#c5ebf0] 
    ${activeStep === 0 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
              >
                Back
              </button>

              <button
                className="text-[#0E515B] font-semibold cursor-pointer rounded-3xl w-full py-2 bg-gradient-to-b from-[#86d2dd] via-[#85d7e1] to-[#c5ebf0]"
                onClick={handleNext}
                variant="contained"
                color={activeStep === steps.length - 1 ? "success" : "primary"}
              >
                {activeStep === steps.length - 1
                  ? "Make the Payement"
                  : "Go to the Next Step"}
              </button>
            </div>
             {/* ------------------------Bottom Layer End---------------------------- */}
          </div>
          {/* --------------------------------Booking Details Card Div End----------------------------------- */}
        
        </Box>
            {/* --------------------------Main div End-------------------------------------------------- */}
        
      </Box>
      </div>
    </div>
  );
};

export default Booking;
