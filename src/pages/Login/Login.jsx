import css from './Login.module.css';
import { LoginForm } from './../../components/LoginForm/LoginForm';
import { Helmet } from 'react-helmet';

const Login = () => { 
    return (
        <div>
            <Helmet>
                <title className={css.PageTitle}>LOGIN</title>
            </Helmet>
            <LoginForm />
        </div>
    );
};

export default Login;