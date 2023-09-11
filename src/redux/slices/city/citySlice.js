import { createSlice } from "@reduxjs/toolkit";

export const citySlice = createSlice({
  name: "cities",
  initialState: {
    data: [],
    filteredCities: [],
    itinearies: [],
    cityFound: {},
    countryId: '',
    counter: 0,
    page: 0,
    isLoading: false,
  },

  reducers: {
    setCities: (state, action) => {
      state.data = action.payload.data;
      state.filteredCities = action.payload.data;
      state.isLoading = false;
    },

   starLoadingCities: (state /* action */) => {
      state.isLoading = true;
    },

    filterOneCityById: (state, action) => {

      console.log(state.data.cityFound);
      state.cityFound = state.data.find((city) => city._id === action.payload);
      state.itinearies = state.data.itinearies;      
      
    },
  },
});

export const { setCities, filterOneCityById, starLoadingCities } =
  citySlice.actions;
