import React from 'react';
import PropTypes from 'prop-types';
import ContactsItem from './ContactsItem';
import s from './ContactsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getContacts } from 'redux/contacts/operations.contacts';
import { getALLContacts } from 'redux/contacts/selectors.contacts';
import { getFilter } from 'redux/filter/selectors.filter';
import { confetti, ConfettiContainer } from 'components/Confetti/Confetti';
import { selectLoggedIn } from 'redux/auth/selectors.auth';

function ContactsList() {
  const contacts = useSelector(getALLContacts);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectLoggedIn);

  const filter = useSelector(getFilter);
  const identicFilter = filter.toLowerCase().trim();
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(identicFilter)
  );

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  useEffect(()=>{
    if(isLoggedIn){
      confetti.run();
    }
  }, [isLoggedIn])

  if(!contacts.length){
    return <div>There are no contacts here=( Please add a new contact.</div>
  }

  return (
    <>
    <ul className={s.list}>
      {filteredContacts.map(({ name, id, number }) => (
        <ContactsItem name={name} key={id} id={id} number={number} />
      ))}
    </ul>
    <ConfettiContainer/>
    </>

  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactsList;
