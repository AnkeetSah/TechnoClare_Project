import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import BackLink from "../components/BackLink";
import Button from "@mui/material/Button";

// Import the components properly
import CabBooking1 from "./CabBooking1"; // Make sure it's a React component
import SelectCar from "./SelectCar"; // Create this component if not already
import FinalDetails from "./FinalDetails"; // Create this component if not already

const steps = ["Enter details", "Select a car", "Final details"];
const stepComponents = [<CabBooking1 />, <SelectCar />, <FinalDetails />];

export default function CabBooking() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="px-6 py-[95px] h-screen">
      <BackLink />

      <Box sx={{ width: "70%", margin: "auto" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      {/* Content Based on Active Step */}
      <Box >
        {stepComponents[activeStep]}
      </Box>

      {/* Navigation Buttons */}
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Button
          color="inherit"
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mr: 1 }}
        >
          Back
        </Button>
        <Box sx={{ flex: "1 1 auto" }} />
        <Button onClick={handleNext} variant="contained">
          {activeStep === steps.length - 1 ? "Finish" : "Next"}
        </Button>
      </Box>
    </div>
  );
}
