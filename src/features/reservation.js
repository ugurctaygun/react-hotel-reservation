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
      adultGuest: "",
      childGuest: "",
      roomType: "",
      roomScenic: "",
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
