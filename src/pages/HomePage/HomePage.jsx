import React from "react";
import css from './HomePage.module.css';
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/Authorization/AuthorizationSelectors";
import { Heading } from "@chakra-ui/react";


const HomePage = () => { 
    const isLogged = useSelector(selectIsLoggedIn);
    return (
        <div className={css.Container}>
            <Heading className={css.Heading}>
                Welcome in Phonebook App!
            </Heading>
            {!isLogged && ( 
                <p className={css.Information}>Please log in or register to use the App</p>
            )}
        </div>
    );
};

export default HomePage;