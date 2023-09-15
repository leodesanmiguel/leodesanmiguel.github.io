import { createSlice } from "@reduxjs/toolkit";

export const citySlice = createSlice({
  name: "cities",
  initialState: {
    data: [],
    filteredCities: [],
    losItineraries: [],
    cityFound: {},
    cityById:{},
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
    setCityById: (state, action) => {
      console.log('PAYLOAD DE SETCITIBYID', action.payload);
      state.cityById = action.payload.data;
    },

   starLoadingCities: (state /* action */) => {
      state.isLoading = true;
    },

    filterOneCityById: (state, action) => {
      console.log(state.data.cityFound);
      state.cityFound = state.data.find((city) => city._id === action.payload);
      state.losItineraries = state.cityFound.itinearies;      
      
    },
  },
});

export const { 
  setCities, 
  setCityById,
  filterOneCityById, 
  starLoadingCities } =
  citySlice.actions;
