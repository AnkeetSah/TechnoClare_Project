import React from "react";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { setVisitDate, setVisitTime } from "../../redux/slices/tourSlice"; // Adjust path as needed

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import PeopleCount from "./PeopleCount";
import TextField from "@mui/material/TextField";

const FirstForm = () => {
  const dispatch = useDispatch();
  const visitDate = useSelector((state) => state.tourBooking.visitDate);
const visitTime = useSelector((state) => state.tourBooking.visitTime);


  return (
    <div className=" -mt-8 p-5  w-full rounded-lg">
      <form action="#" className="space-y-6">

        {/* Mobile Date Picker */}
        <div className="date">
          <label className="block text-lg font-semibold mb-3 text-left">When will you visit?</label>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileDatePicker
              className="w-full"
              value={visitDate ? dayjs(visitDate) : null}
              onChange={(newDate) => dispatch(setVisitDate(newDate?.toISOString()))}
              renderInput={(params) => (
                <TextField {...params} className="w-full bg-white border border-gray-300 rounded-lg" />
              )}
            />
          </LocalizationProvider>
        </div>

        {/* Mobile Time Picker */}
        <div className="time">
          <label className="block text-lg font-semibold mb-2 text-left">Which time?</label>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileTimePicker
              className="w-full"
              value={visitTime ? dayjs(visitTime) : null}
              onChange={(newTime) => dispatch(setVisitTime(newTime?.toISOString()))}
              ampm
              renderInput={(params) => (
                <TextField {...params} className="w-full bg-white border border-gray-300 rounded-lg" />
              )}
            />
          </LocalizationProvider>
        </div>

        <div>
          <h1 className="block text-lg font-semibold mb-3 text-left">Select Your Tickets</h1>
           <ul className="text-left text-[#263238] text-sm pl-7 list-disc">
            <li>Free for kids under 6 and disabled visitors (74%+)</li>
            <li>Pregnant women, families with strollers, and visitors on crutches can buy priority tickets at the venue</li>
           </ul>
        </div>

       <PeopleCount/>

      </form>
    </div>
  );
};

export default FirstForm;
