import UserMenu from '../UserMenu/UserMenu';
import css from './AppBar.module.css';
import Navigation from 'components/Navigation/Navigation';
import { AuthorizationNav } from 'components/AuthorizationNav/AuthorizationNav';
import useAuth from 'hooks/useAuthorization';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.Header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthorizationNav />}
    </header>
  );
};