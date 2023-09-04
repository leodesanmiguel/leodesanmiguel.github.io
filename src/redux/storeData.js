import { configureStore } from "@reduxjs/toolkit";
import { citySlice } from "./slices";
import { itinerarySlice } from "./slices/itinerary/itinearySlice";

export const storeData = configureStore({
  reducer: {
    cities: citySlice.reducer,
    itinerary: itinerarySlice.reducer,
  },
});
