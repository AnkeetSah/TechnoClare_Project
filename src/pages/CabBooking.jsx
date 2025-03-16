import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import BackLink from "../components/BackLink";
import Button from "@mui/material/Button";

// Import step components
import Cabs from "./Cabs";
import SelectCar from "./SelectCar";
import FinalDetails from "./FinalDetails";

const steps = ["Enter details", "Select a car", "Final details"];
const stepComponents = [<Cabs />, <SelectCar />, <FinalDetails />];

export default function CabBooking() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevStep) => prevStep - 1);
    }
  };

  return (
    <div className="px-6 py-[95px] min-h-screen">
      <BackLink />

      {/* Stepper with scroll support for mobile */}
      <div className="w-full overflow-x-auto">
        <Box sx={{ width: "100%", margin: "auto" }}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label, index) => (
              <Step key={index}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </div>

      {/* Step Content */}
      <Box>{stepComponents[activeStep]}</Box>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-6 mt-6">
        <button
          type="button"
          className="bg-gray-500 cursor-pointer hover:bg-gray-700 active:scale-95 transition-all duration-200 ease-in-out text-white font-bold py-2 px-6 rounded-full shadow-lg"
          disabled={activeStep === 0}
          onClick={handleBack}
          style={{ zIndex: 10 }}
        >
          Back
        </button>

        <button
          type="button"
          className="bg-blue-500 cursor-pointer hover:bg-blue-700 active:scale-95 transition-all duration-200 ease-in-out text-white font-bold py-2 px-6 rounded-full shadow-lg"
          onClick={handleNext}
          style={{ zIndex: 10 }}
        >
          {activeStep === steps.length - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
}
