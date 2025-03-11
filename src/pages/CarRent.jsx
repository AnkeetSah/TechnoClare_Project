import { Stepper } from "@mui/material";
import React from "react";

const steps = ["Ride Info", "Select Car", "Final Details"];

const CarRent = () => {
  return (
    <div>
      <Box sx={{ width: "60%", margin: "auto", mt: 2, textAlign: "center" }}>
        <Stepper>
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </div>
  );
};

export default CarRent;
