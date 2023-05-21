import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import Loader from "components/Loader/Loader";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectError, selectIsLoading } from "redux/Selectors";
import { fetchContacts } from "redux/Operators";
import css from './ContactsPage.module.css';
import { Helmet } from "react-helmet";


const ContactsPage = () => { 
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet className={css.Container}>
        <h1 className={css.Header}>Phonebook</h1>
      </Helmet>
      <ContactForm />
      <h2 className={css.SecondHeader}>Contacts</h2>
      <Filter />
      {!!isLoading && !error ? <Loader /> : <ContactList />}
    </>
    );
};

export default ContactsPage;