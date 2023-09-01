import { createSlice } from "@reduxjs/toolkit";

export const citySlice = createSlice({
  name: "cities",
  initialState: {
    data: [],
    counter: 0,
    page: 0,
    isLoading: false,
    cityFound: {}
  },

  reducers: {
    setCities: (state, action) => {
      state.isLoading = false;
      state.page = action.payload.page;
      state.data = action.payload.data;
      state.counter = action.payload.counter;
    },

    starLoadingCities: (state /* action */) => {
      state.isLoading = true;
    },

    filterOneCityById: (state, action) => {
      state.cityFound = state.data.find((city) => city._id === action.payload);
      console.log("ACTION de filterOneCityById: ---> ", action);
      console.log(state.cityFound);
    },
  },
});

export const { setCities, filterOneCityById, starLoadingCities } =
  citySlice.actions;
