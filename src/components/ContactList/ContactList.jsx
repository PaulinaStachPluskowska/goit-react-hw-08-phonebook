import React from 'react';
import css from './ContactList.module.css';
import Contact from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter, selectIsLoading/*, selectVisibleItems*/} from 'redux/Selectors';
import Loader from 'components/Loader/Loader';

const ContactList = () => {
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

  return (
      <ul className={css.List}>
          { !!isLoading && <Loader />}
              {visibleContacts.map(contact => (
                  <Contact key={contact.id} contact={contact} />
          ))}
      </ul>
    );
};

export default ContactList;