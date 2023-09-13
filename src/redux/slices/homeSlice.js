import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  titlesCall: {
    title: "The Popular Cities ",
    description: "The best cities visited by our customers.",
    id: "carousel",
    cardId: { nro: 0 },
  },
  textHero: {
    titulo: "My Tinerary",
    subtitulo:
      "This website allows you to visit different cities in the world in a very real way.",
  },
  links: [
    { value: "/", content: "Home", id: 1, isActive: false },
    { value: "/cities", content: "Cities", id: 2, isActive: false },
    { value: "/about-us", content: "About Us", id: 3, isActive: false },
  ],
  home: 0,
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    titles: (state) => {
      state.home += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { titles } = homeSlice.actions;
