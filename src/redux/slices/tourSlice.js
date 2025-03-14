import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visitDate: null,
  visitTime: null,
  people: [
    {
      type: "Adult (18+)",
      price: 998.0,
      conditions: [],
      Number: 0,
    },
    {
      type: "Child (6-17)",
      price: 299.0,
      conditions: ["With valid ID", "Only in combination with: Adult (18+)"],
      Number: 0,
    },
    {
      type: "Infant (0-5)",
      price: 0.0,
      conditions: ["Only in combination with: Adult (18+)"],
      Number: 0,
    },
  ],
};

const tourSlice = createSlice({
  name: "tourBooking",
  initialState,
  reducers: {
    setVisitDate: (state, action) => {
      state.visitDate = action.payload;
    },
    setVisitTime: (state, action) => {
      state.visitTime = action.payload;
    },
    handleIncrement: (state, action) => {
      const index = action.payload;
      if (state.people[index]) {
        state.people[index].Number += 1;
      }
    },
    handleDecrement: (state, action) => {
      const index = action.payload;
      if (state.people[index] && state.people[index].Number > 0) {
        state.people[index].Number -= 1;
      }
    },
  },
});

export const { setVisitDate, setVisitTime, handleIncrement, handleDecrement } = tourSlice.actions;
export default tourSlice.reducer;
