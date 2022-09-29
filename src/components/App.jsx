import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';
import { useDispatch } from 'react-redux';
// import { selectLoggedIn } from 'redux/auth/selectors.auth';
import { useEffect } from 'react';
import { authGetCurrentUser } from 'redux/auth/operations.auth';
import Loader from './Loader';
import PrivateRoute from 'PrivateRoute';
import PublicRoute from 'PrivateRoute/PublicRoute';

const HomePage = lazy(() => import('../pages/HomePage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));

export function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
      dispatch(authGetCurrentUser());
  },[dispatch])

  return (
    <>
    <Header/>
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/contacts"  end element={<PrivateRoute />} >
          <Route path='' element={<ContactsPage />}/>
        </Route>
        <Route path="/login" end element={<PublicRoute restricted/>} >
          <Route path='' element={<LoginPage />}/>
        </Route>
        <Route path="/register" end  element={<PublicRoute restricted/>} >
          <Route path='' element={<RegisterPage />}/>
        </Route>
        <Route path="*" element={<Navigate to='/'/>} />
      </Routes>
      </Suspense>
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}
