import React from 'react';
import css from './Contact.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/Operators';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };


  return (
    <li className={ css.Wrapper}>
      <p className={css.Name}>
        {contact.name}:
      </p>
      <p className={css.Number}>
        {contact.number}  
      </p>
      <button className={css.Button} type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};


export default Contact;

Contact.propTypes = {
  contact: PropTypes.objectOf(PropTypes.string),
  deleteContact: PropTypes.func,
};

