import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactsItem.module.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { deleteContact } from 'redux/contacts/operations.contacts';
import { ColorRing } from 'react-loader-spinner';

function ContactsItem({ id, name, number }) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = contactId => {
    setIsLoading(true);
    dispatch(deleteContact(contactId));
  };

  return (
    <li className={s.item}>
      <span className={s.spanName}>{name}:</span>
      <span className={s.spanTel}>{number}</span>
      <button
        className={s.button}
        type="button"
        name="delete"
        onClick={() => handleDelete(id)}
        disabled ={isLoading}
      >{isLoading && <ColorRing height='20' width='20' colors={['#b8c480', '#B2A3B5', '#F4442E', '#51E5FF', '#429EA6']}/> }
        Delete
      </button>
    </li>
  );
}

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactsItem;


