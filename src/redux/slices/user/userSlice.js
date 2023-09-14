import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },

  reducers: {
    setUser: (state, action) => {
      console.log(action.payload);
      state.user = action.payload;
    },

    setAuth: (state, action) => {
      state.user = action.payload;
    },

    // starLoadingUser: (state /* action */) => {
    //   state.isLoading = true;
    // },

    // filterOneuserById: (state, action) => {
    //   state.userFound = state.data.find((user) => user._id === action.payload);

    //   console.log('P A I S   H A L L A D O  ',state.userFound);
    // },
  },
});

export const { setUser, setAuth } = userSlice.actions;
