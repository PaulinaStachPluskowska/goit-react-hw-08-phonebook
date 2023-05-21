// import { createSlice } from "@reduxjs/toolkit";
// import { logIn, logOut, refreshUser, register } from "./AuthorizationOperations";
// import Notiflix from "notiflix";

// const authSlice = createSlice({
//     name: 'auth',
//     initialState: {
//       user: { name: null, email: null },
//       token: null,
//       isLoggedIn: false,
//       isRefreshing: false,
//     },
//     extraReducers: builder => {
//         builder
//             .addCase(register.fulfilled, (state, action) => {
//                 state.user = action.payload.user;
//                 state.token = action.payload.token;
//                 state.isLoggedIn = true;
//             })
//             .addCase(register.rejected, () => {
//                 Notiflix.Notify.failure('Registration failed!',
//                     { backgroundColor: '#FF1493',
//                         timeout: 1500,
//                         position: 'center-top',
//                     });
//             })
//             .addCase(logIn.fulfilled, (state, action) => {
//                 state.user = action.payload.user;
//                 state.token = action.payload.token;
//                 state.isLoggedIn = true;
//             })
//             .addCase(logIn.rejected, () => {
//                 Notiflix.Notify.failure('Wrong email or password.',
//                     { backgroundColor: '#FF1493',
//                         timeout: 1500,
//                         position: 'center-top',
//                     });
//             })
//             .addCase(logOut.fulfilled, (state) => {
//                 state.user = null;
//                 state.token = null;
//                 state.isLoggedIn = false;
//             })
//             .addCase(refreshUser.fulfilled, (state, action) => {
//                 state.user = action.payload;
//                 state.isLoggedIn = true;
//                 state.isRefreshing = true;
//             })
//             .addCase(refreshUser.pending, (state) => {
//                 state.isRefreshing = true;
//             })
//             .addCase(refreshUser.rejected, (state) => {
//                 state.isRefreshing = false;
//             })
//     }
// });
// export const authReducer = authSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './AuthorizationOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.isRefreshing = false;
    },
    [register.pending](state, action) {
      state.isRefreshing = true;
    },
    [register.rejected](state, action) {
      state.error = action.payload;
      state.isRefreshing = false;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [logIn.pending](state, action) {
      state.isRefreshing = true;
    },
    [logIn.rejected](state, action) {
      state.error = action.payload;
      state.isRefreshing = false;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
    [logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export const authReducer = authSlice.reducer;