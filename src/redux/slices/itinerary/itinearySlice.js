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
        state.isLoading = false;
     },
     starLoadingItinearies: (state /* action */) => {
        state.isLoading = true;
      },
     lista: (state , action ) => {
        state.data= action.payload;
      },
    }
});
export const { setItineraries, starLoadingItinearies } = itinerarySlice.actions;