import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState.auth";
import { authRegister } from "./operations.auth";

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
}

const handleRejected = (state, {payload})=>{
  state.isLoading = false;
  state.error = payload;
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers:{
    [authRegister.pending]: handlePending,
    [authRegister.fulfilled]: (state, payload)=>{
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [authRegister.rejected]:handleRejected,
  }
})

const {reducer: authReducer} = authSlice;
export default authReducer;
