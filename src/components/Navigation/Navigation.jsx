import useAuth from 'hooks/useAuthorization';
import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => { 
  const { isLoggedIn } = useAuth();

  return (
    <nav className={ css.Container}>
      <NavLink className={({ isActive }) => (isActive ? css.Active : css.Link)} to="/" end>
        Home
      </NavLink>
      {isLoggedIn && (<NavLink className={({ isActive }) => (isActive ? css.Active : css.Link)} to="/contacts">
        Contacts
      </NavLink>)}
    </nav>
    );
};

export default Navigation;