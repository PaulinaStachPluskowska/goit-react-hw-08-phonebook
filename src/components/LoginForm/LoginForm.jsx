import { useDispatch } from 'react-redux';
import css from './LoginForm.module.css';
import { logIn } from 'redux/Authorization/AuthorizationOperations';

export const LoginForm = () => { 
    const dispatch = useDispatch();

    const handleSubmit = event => { 
        event.preventDefault();
        const form = event.currentTarget;
        const email = form.elements.email.value;
        const password = form.elements.password.value;
        dispatch(logIn({ email, password, }));
        
        form.reset();
    };

    return (
        <div className={css.Container}>
            <form className={css.Form} onSubmit={handleSubmit} autoComplete='off'> 
                <label className={css.Label}>
                    E-mail
                    <input className={css.Input} type="email" name="email" placeholder='Enter your e-mail' />
                </label>
                <label className={css.Label}>
                    Password
                    <input className={css.Input} type="password" name="password" placeholder='Enter your password'/>
                </label>

                <button className={css.Button} type='submit'>Log In</button>
            </form>
        </div>
    );
};