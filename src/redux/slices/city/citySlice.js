import { createSlice } from "@reduxjs/toolkit";

export const citySlice = createSlice({
  name: "cities",
  initialState: {
    data: [],
    counter: 0,
    cityFound: {},
  },

  reducers: {
    setCities: (state, action) => {
      state.data = action.payload;
    },
    increment: (state) => {
      state.counter += 1;
    },

    filterOneCityById: (state, action) => {
      state.cityFound = state.data.find((city) => city._id === action.payload);
    },
  },
});

export const { setCities, filterOneCityById } = citySlice.actions;
