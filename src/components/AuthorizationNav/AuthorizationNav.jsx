import { NavLink } from 'react-router-dom';
import css from './AuthorizationNav.module.css';

export const AuthorizationNav = () => {
  return (
    <div className={css.Container}>
     <NavLink className={({ isActive }) => (isActive ? css.Active : css.Link)} to="/register">
        Register
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? css.Active : css.Link)} to="/login">
        Log In
      </NavLink>
    </div>
  );
};