import React, { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import Loader from './Loader/Loader';
import useAuth from '../hooks/useAuthorization';
import { refreshUser } from './../redux/Authorization/AuthorizationOperations';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { RestrictedRoute } from './Routes/RestrictedRoute';
import { PrivateRoute } from './Routes/PrivateRoute';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const Register = lazy(() => import('../pages/Registration/Registration'));
const Login = lazy(() => import('../pages/Login/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts/ContactsPage'));


const App = () => {

  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  
  return isRefreshing ? (
    <Loader />
  ) : (
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/register'
            element={<RestrictedRoute redirectTo='/contacts' component={<Register />}
            />} />
          <Route path='/login'
            element={<RestrictedRoute redirectTo='/contacts' component={<Login />}
            />} />
          <Route path='/contacts'
            element={<PrivateRoute redirectTo='/login' component={<ContactsPage />}
            />} />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Route>
      </Routes>
    );
};

export default App;