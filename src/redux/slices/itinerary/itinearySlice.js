import { createSlice } from '@reduxjs/toolkit';
export const itinerarySlice = createSlice({
   name: 'itinerary',
   initialState: {
    data: [],
    isLoading: false,
   },
    reducers: {
     setItineraries: (state,action) => {
        state.data = action.payload.data;
     },
     starLoadingItinearies: (state /* action */) => {
        state.isLoading = true;
      },
    }
});
export const { setItineraries } = itinerarySlice.actions;