import PropTypes from 'prop-types';
import css from './ContactForm.module.css';
import React from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/Selectors';
import Notiflix from 'notiflix';
import { addContact } from 'redux/Operators';

export const ContactForm = () => {

  const elementID = nanoid();
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const newContact = {
      id: nanoid(),
      name: form.name.value,
      number: form.number.value,
    };

    let isContact;
    let isNumber;
   
    contacts.forEach(contact => {
      if (contact.name.toLowerCase() === newContact.name.toLowerCase()) {
        isContact = true;
      }
      if (contact.number.toLowerCase() === newContact.number.toLowerCase()) {
        isNumber = true;
       }
    });

    if (isContact) {
      Notiflix.Notify.warning(`${newContact.name} is already in contacts.`, {
        position: 'center-top',
        closeButton: true,
        timeout: 500,
        width: '350px',
      });
      form.reset();
    } else if (isNumber) {
      Notiflix.Notify.warning(`The number: ${newContact.number} is already in contacts.`, {
        position: 'center-top',
        closeButton: true,
        timeout: 500,
        width: '350px',
      });
      form.reset();
    } else {
      dispatch(addContact(newContact));
      Notiflix.Notify.success(`${newContact.name} was added to your contacts.`, {
        position: 'center-top',
        closeButton: true,
        timeout: 500,
        width: '350px',
      });
      form.reset();
    }
  };

    return (
        <form className={css.Form} htmlFor={elementID} onSubmit={handleSubmit}>
            <label className={css.Label}>
                Name
                <input className={css.Input} id={elementID}
                  type="text"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                />
            </label>
            <label className={css.Label}>
                Number
                <input className={css.Input}
                  type="tel"
                  name="number"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                />
            </label>
            <button className={css.Button} type="submit">
                Add contact
            </button>
        </form>
    );
};

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  addContact: PropTypes.func,
};

export default ContactForm;