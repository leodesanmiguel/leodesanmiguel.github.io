import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isLogged: false,
  },

  reducers: {
    setUser: (state, action) => {
      console.log(action.payload);
      state.user = action.payload;
    },

    setAuth: (state, action) => {
      state.user = action.payload;
      state.isLogged = true;
    },

    startingLogin: (state, action) => {
      state.isLogged = action.payload.logged;
      console.log('activa el logueado', action.payload );
    },
    startingLogout: (state) => {
      console.log('DESACTIVA EL LOGUEADO - BOORA TODO');
      state.user = null
      state.isLogged = false
    },

    // filterOneuserById: (state, action) => {
    //   state.userFound = state.data.find((user) => user._id === action.payload);

    //   console.log('P A I S   H A L L A D O  ',state.userFound);
    // },
  },
});

export const { 
  setUser, 
  setAuth, 
  startingLogin, 
  startingLogout } =
  userSlice.actions;
