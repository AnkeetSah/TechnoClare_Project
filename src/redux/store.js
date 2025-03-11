import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import tourReducer from "./slices/tourSlice";
import carReducer from "./slices/carSlice";
import busReducer from "./slices/busSlice";
import paymentReducer from "./slices/paymentSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    tourBooking: tourReducer,
    carBooking: carReducer,
    busBooking: busReducer,
    payment: paymentReducer,
  },
});

export default store;
