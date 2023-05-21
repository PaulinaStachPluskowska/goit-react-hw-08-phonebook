import { useDispatch } from "react-redux";
import { register } from "redux/Authorization/AuthorizationOperations";
import css from './RegisterForm.module.css';

export const RegisterForm = ()=> { 
    const dispatch = useDispatch();

    const handleSubmit = event => { 
        event.preventDefault();

        const form = event.currentTarget;
        const name = form.elements.name.value;
        const email = form.elements.email.value;
        const password = form.elements.password.value;

        dispatch(register({ name, email, password, }));
        form.reset();
    };

    return (
        <form className={css.Form} onSubmit={handleSubmit} autoComplete="off">
            <label className={css.Label}>
                Username 
                <input className={css.Input} type="text" name="name" />
            </label>
            <label className={css.Label}>
                Email 
                <input className={css.Input} type="email" name="email"/>
                </label>
            <label className={css.Label}>
                Password 
                <input className={css.Input} type="password" name="password" />
            </label>
            
            <button className={css.Button} type="submit">Register</button>
        </form>
    );
};