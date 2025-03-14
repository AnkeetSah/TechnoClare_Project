import { configureStore } from "@reduxjs/toolkit";

import tourReducer from "./slices/tourSlice";

export const store = configureStore({
  reducer: {
   
    tourBooking: tourReducer,
  
  },
});

export default store;
