import { logOut } from "redux/Authorization/AuthorizationOperations";
import useAuth from 'hooks/useAuthorization';
import { useDispatch } from 'react-redux';
import css from './UserMenu.module.css';


const UserMenu = () => { 
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
        <div className={css.Container}>
            <p className={css.Username}>Welcome,
                <span className={css.Name}> {user.name}</span>
            </p>
            
            <button className={css.Button} type="button" onClick={() => dispatch(logOut())}>
                Logout
            </button>
        </div>
    );
};

export default UserMenu;