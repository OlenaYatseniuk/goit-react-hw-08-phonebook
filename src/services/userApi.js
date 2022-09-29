import { publicApi, privateApi } from "http/http";


export const registerNewUser = async (userCredentials) =>{
  const {data} = await publicApi.post('users/signup', userCredentials);
  return data;
}

export const loginUser = async (userCredentials) =>{
  const {data} = await publicApi.post('users/login', userCredentials);
  return data;
}

export const logoutUser = async (token) =>{
  const {data} = await privateApi.post('users/logout', token);
  return data;
}

export const fetchCurrentUser = async () =>{
  const {data} = await privateApi.get('users/current');
  return data;
}
