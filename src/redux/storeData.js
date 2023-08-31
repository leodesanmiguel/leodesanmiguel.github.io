import { configureStore } from '@reduxjs/toolkit';
import { citySlice } from './slices';

export const storeData = configureStore({
  reducer: {
    cities: citySlice.reducer,

  }
    
})