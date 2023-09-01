import { createSlice } from '@reduxjs/toolkit';

const initialStateHome = {
    title:"The Popular Cities ",
    description:"The best cities visited by our customers.",
}

export const homeSlice = createSlice({
  name: 'home',
  initialStateHome,
  reducers: {
    titles: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.home += 1
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { increment } = homeSlice.actions;



