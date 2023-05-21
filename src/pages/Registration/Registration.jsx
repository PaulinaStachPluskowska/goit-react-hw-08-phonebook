import { Helmet } from 'react-helmet';
import { RegisterForm } from './../../components/RegisterForm/RegisterForm';
import css from './Registration.module.css';

const Register = () => {
    return (
        <div className={css.Container}>
            <Helmet>
                <title className={css.Title}>Registration</title>
            </Helmet>
            <RegisterForm />
        </div>
    );
};

export default Register;