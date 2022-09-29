import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState.auth';
import { authRegister, authLogin, authLogout } from './operations.auth';

const handlePending = state => {
  state.isLoading = true;
  state.isError = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.isError = payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authRegister.pending]: handlePending,
    [authRegister.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [authRegister.rejected]: handleRejected,
    [authLogin.pending]: handlePending,
    [authLogin.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [authLogin.rejected]: handleRejected,
    [authLogout.pending]: handlePending,
    [authLogout.fulfilled]: state => {
      state.user = initialState.user;
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.isError = null;
      state.isFetchingCurrentUser = false;
    },
    [authLogout.rejected]: handleRejected,
  },
});

const { reducer: authReducer } = authSlice;
export default authReducer;
