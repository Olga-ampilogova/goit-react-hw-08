import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, register } from './operations';

const authSlice = createSlice({
    name: 'auth',
    initialState:
    {
        user: {
            name: null,
            email: null,
        },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
        error: null,
    },
    extraReducers: builder => builder
        .addCase(register.pending, (state) =>
        {
            state.isLoggedIn = true;
            state.error = null;
        })
        .addCase(register.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        })
        .addCase(register.rejected, (state, action) => {
            state.isLoggedIn = false;
             state.registrationError = action.error.message;
        })
        .addCase(logIn.pending, (state) => {
         state.isLoggedIn = true;
            state.error = null;
        })
        .addCase(logIn.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        })
        .addCase(logIn.rejected, (state, action) => {
            state.isLoggedIn = false;
               state.loginError = action.error.message;
        }
    )
        .addCase(logOut.pending, (state) => {
            state.isLoggedIn = true;
            state.error = null;
        })
        .addCase(logOut.fulfilled, (state) => {
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isLoggedIn = false;
      })
        .addCase(logOut.rejected, (state, action) => {
            state.isLoggedIn = false;
            state.error = action.error.message;

        })
        .addCase(refreshUser.pending, (state) => {
            state.isRefreshing = true;
        })
        .addCase(refreshUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.error = false;
            state.isRefreshing = false;
        })
}
);

export default authSlice.reducer;