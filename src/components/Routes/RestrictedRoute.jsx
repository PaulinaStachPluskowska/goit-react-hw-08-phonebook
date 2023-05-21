import useAuth from "hooks/useAuthorization";
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component: Component, redirectTo = '/todos' }) => {
  const { isLoggedIn } = useAuth();
  // const shouldRedirect = !isLoggedIn && !isRefreshing;

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};