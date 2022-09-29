import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';
import { useDispatch } from 'react-redux';
// import { selectLoggedIn } from 'redux/auth/selectors.auth';
import { useEffect } from 'react';
import { authGetCurrentUser } from 'redux/auth/operations.auth';

const HomePage = lazy(() => import('../pages/HomePage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));

export function App() {
  const dispatch = useDispatch();
  // const isLoggedIn = useSelector(selectLoggedIn);

  useEffect(()=>{
    // if(isLoggedIn){
      dispatch(authGetCurrentUser());
    // }
  },[dispatch])

  return (
    <>
    <Header/>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/contacts"  end element={<ContactsPage />} />
        <Route path="/login" end element={<LoginPage />} />
        <Route path="/register" end  element={<RegisterPage />} />
        <Route path="*" element={<Navigate to='/'/>} />
      </Routes>
      </Suspense>
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}
