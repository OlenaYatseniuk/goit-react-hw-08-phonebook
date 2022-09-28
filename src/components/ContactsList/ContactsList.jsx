import React from 'react';
import PropTypes from 'prop-types';
import ContactsItem from './ContactsItem';
import s from './ContactsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getContacts } from 'redux/contacts/operations.contacts';
import { getALLContacts } from 'redux/contacts/selectors.contacts';
import { getFilter } from 'redux/filter/selectors.filter';

function ContactsList() {
  const contacts = useSelector(getALLContacts);
  const dispatch = useDispatch();

  const filter = useSelector(getFilter);
  const identicFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(identicFilter)
  );

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  if(!contacts.length){
    return <div>There are no contacts here=( Please add a new contact.</div>
  }

  return (
    <ul className={s.list}>
      {filteredContacts.map(({ name, id, phone }) => (
        <ContactsItem name={name} key={id} id={id} phone={phone} />
      ))}
    </ul>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};

export default ContactsList;
