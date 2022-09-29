import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  loginUser,
  registerNewUser,
  logoutUser,
  fetchCurrentUser,
} from 'services/userApi';
import { token } from 'http/http';

export const authRegister = createAsyncThunk(
  'auth/register',
  async (userCredentials, { rejectWithValue }) => {
    try {
      console.log('Register successfully!');
      const response = await registerNewUser(userCredentials);
      token.set(response.token);
      return response;
    } catch (error) {
      return rejectWithValue({
        message: error.message,
        status: error.response.status,
      });
    }
  }
);

export const authLogin = createAsyncThunk(
  'auth/login',
  async (userCredentials, { rejectWithValue }) => {
    console.log('Login successfully!');
    try {
      const response = await loginUser(userCredentials);
      token.set(response.token);

      return response;
    } catch (error) {
      return rejectWithValue({
        message: error.message,
        status: error.response.status,
      });
    }
  }
);

export const authLogout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    console.log('Logout is starting!');
    try {
      const response = await logoutUser(token);
      token.unset();
      return response;
    } catch (error) {
      return rejectWithValue({
        message: error.message,
        status: error.response.status,
      });
    }
  }
);

export const authGetCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, { rejectWithValue, getState }) => {
    const currentToken = getState().auth.token;
    console.log(currentToken);
    console.log('Get current!');
    try {
      if (!currentToken) {
        return rejectWithValue();
      }
      token.set(currentToken);
      const response = await fetchCurrentUser(currentToken);
      console.log(response);
      return response;
    } catch (error) {
      console.log('catch!');
      token.unset();
      return rejectWithValue({
        message: error.message,
        status: error.response.status,
      });
    }
  }
);
