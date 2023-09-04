import { createSlice } from "@reduxjs/toolkit";

export const countrySlice = createSlice({
  name: "country",
  initialState: {
    data: [],
    capital: '',
    continent: '',
    countryName: '',
    flag: 0,
    cities: [],
    countryFound: {}
  },

  reducers: {
    setCountry: (state, action) => {
      state.data = action.payload.data;
      state.capital = action.payload.capital;
      state.continent = action.payload.continent;
      state.countryName = action.payload.countryName;
      state.flag = action.payload.flag;
      state.cities = action.payload.cities;
    },

    starLoadingCountry: (state /* action */) => {
      state.isLoading = true;
    },

    filterOnecountryById: (state, action) => {
      state.countryFound = state.data.find((country) => country._id === action.payload);
      
      console.log('P A I S   H A L L A D O  ',state.countryFound);
    },
  },
});

export const { setCountry, filterOnecountryById, starLoadingCountry } =
  countrySlice.actions;
