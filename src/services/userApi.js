import axios from "axios";
const userAxios = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
  params: {},
})

export const setToken = token =>{
  userAxios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export const deleteToken =  () => {
  userAxios.defaults.headers.common.Authorization = '';
}

export const registerNewUser = async (userCredentials) =>{
  const {data} = await userAxios.post('users/signup', userCredentials);
  return data;
}

export const loginUser = async (userCredentials) =>{
  const {data} = await userAxios.post('users/login', userCredentials);
  return data;
}

export const logoutUser = async () =>{
  const {data} = await userAxios.post('users/logout');
  return data;
}

export const fetchCurrentUser = async () =>{
  const {data} = await userAxios.get('users/current');
  return data;
}
