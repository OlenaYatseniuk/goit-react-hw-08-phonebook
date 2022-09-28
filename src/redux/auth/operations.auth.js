import { createAsyncThunk } from '@reduxjs/toolkit';
import { registerNewUser, setToken } from 'services/userApi';

export const authRegister = createAsyncThunk('auth/register', async (userCredentials, {rejectWithValue})=>{
  try{
    console.log('here')
    const response = await registerNewUser(userCredentials);
    setToken(response.token);
    console.log(response.token)
    return response;
  }catch(error){
    return rejectWithValue({ message: error.message, status: error.response.status})
  }
})
