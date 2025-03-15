import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import BackLink from "../components/BackLink";
import Button from "@mui/material/Button";

// Import the components properly
import Cabs from "./Cabs"; // Make sure it's a React component
import SelectCar from "./SelectCar"; // Create this component if not already
import FinalDetails from "./FinalDetails"; // Create this component if not already

const steps = ["Enter details", "Select a car", "Final details"];
const stepComponents = [<Cabs />, <SelectCar />, <FinalDetails />];

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
        <Stepper activeStep={activeStep} alternativeLabel>
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
      <div className="flex justify-center gap-6">
        <Button
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{
            bgcolor: "#ea2a30",
            color: "white",
            fontSize: "1.2rem",
            fontWeight: "600",
            borderRadius: "25px",
            width: "180px",
            py: "12px",
            "&:hover": { bgcolor: "#d1262a" },
          }}
        >
          Back
        </Button>

        <Button
          onClick={handleNext}
          sx={{
            bgcolor: "#D4F8FE",
            color: "black",
            fontSize: "1.2rem",
            fontWeight: "600",
            borderRadius: "25px",
            width: "180px",
            py: "12px",
            "&:hover": { bgcolor: "#bcecf1" },
          }}
        >
          {activeStep === steps.length - 1 ? "Finish" : "Next"}
        </Button>
      </div>
    </div>
  );
}
