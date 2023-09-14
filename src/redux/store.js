import { configureStore } from "@reduxjs/toolkit";
import { citySlice } from "./slices";
import { homeSlice } from "./slices/homeSlice.js";
import { itinerarySlice } from "./slices/itinerary/itinearySlice";
import { userSlice } from "./slices/user/userSlice";

export const store = configureStore({
  reducer: {
    cities: citySlice.reducer,
    itinerary: itinerarySlice.reducer,
    home: homeSlice.reducer,
    user: userSlice.reducer,
  },
});
