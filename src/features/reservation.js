import { createSlice } from "@reduxjs/toolkit";

export const reservationSlice = createSlice({
  name: "reservation",
  initialState: {
    value: {
      step: 1,
      selectedHotel: {},
      selectedHotelName: "",
      startDate: "",
      endDate: "",
      adultGuest: 0,
      childGuest: 0,
    },
  },
  reducers: {
    updateState: (state, action) => {
      state.value = { ...action.payload };
    },
  },
});

export const { updateState } = reservationSlice.actions;

export default reservationSlice.reducer;
