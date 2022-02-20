import { createSlice } from "@reduxjs/toolkit";

export const reservationSlice = createSlice({
  name: "reservation",
  initialState: { value: { step: 1 } },
  reducers: {
    initialize: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default reservationSlice.reducer;
