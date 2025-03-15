import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import BackLink from "../components/BackLink";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import placesInOdisha from "../data/places"; // Import places.js
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  HiOutlineArrowLongLeft,
  HiOutlineArrowLongRight,
} from "react-icons/hi2";

const steps = ["Ride Info", "Select a car", "Final details"];

export default function CabBooking() {
  return (
    <div className="px-6 py-[95px] h-screen">
      <BackLink />
      <Box sx={{ width: "70%", margin: "auto" }}>
        <Stepper activeStep={1} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      {/* Location Selection */}
      <div className="flex lg:gap-8 xs:gap-3 mx-auto justify-center items-center mt-16">
        {/* From Autocomplete */}
        <Autocomplete
          disablePortal
          freeSolo // Allows manual typing
          options={placesInOdisha}
          sx={{ width: 300, "& .MuiOutlinedInput-root": { borderRadius: 10 } }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="From"
              variant="outlined"
              sx={{ borderRadius: 4 }}
            />
          )}
        />

        {/* Arrows */}
        <div className="flex flex-col items-center justify-center">
          <HiOutlineArrowLongLeft className="text-4xl -mb-2 font-bold text-gray-400" />
          <HiOutlineArrowLongRight className="text-4xl -mt-2 font-bold text-gray-400" />
        </div>

        {/* To Autocomplete */}
        <Autocomplete
          disablePortal
          freeSolo // Allows manual typing
          options={placesInOdisha}
          sx={{ width: 300, "& .MuiOutlinedInput-root": { borderRadius: 10 } }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="To"
              variant="outlined"
              sx={{ borderRadius: 4 }}
            />
          )}
        />
      </div>

      {/* Date & Time Selection */}
      <div className="flex lg:gap-25 xs:gap-9 justify-center items-center mt-8">
        {/* Date Picker */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Choose the date"
            sx={{
              width: 300,
              "& .MuiOutlinedInput-root": { borderRadius: 10 },
            }}
          />
        </LocalizationProvider>

        {/* People Input */}
        <TextField
          id="time-input"
          label="Number of People"
          variant="outlined"
          type="number" // Ensures only numeric input
          inputProps={{ min: 1 }} // Optional: Ensures at least 1 person is selected
          sx={{
            width: 300,
            "& .MuiOutlinedInput-root": {
              borderRadius: "27px", // Ensures border-radius applies to the input field
            },
          }}
        />
      </div>

      {/* Button */}
      <div className="flex justify-center mt-8">
      <button  className="text-black font-MosafinMedium text-2xl font-semibold cursor-pointer rounded-3xl w-[700px]  py-4 bg-gradient-to-b from-[#D4F8FE] via-[#D4F8FE] to-[#c5ebf0]">
         Search Vechicles
          </button>
      </div>
    </div>
  );
}
