import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './ContactForm.module.css';
import { toast } from 'react-toastify';

import { getALLContacts} from 'redux/contacts/selectors.contacts';
import { addNewContact } from 'redux/contacts/operations.contacts';

function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(getALLContacts);
  const dispatch = useDispatch();

  const createNewContact = newContact => {
    if (
      contacts.find(
        ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      toast.error(`${newContact.name} is already in your contacts list`);
      return;
    }
    dispatch(addNewContact(newContact));
  };

  const handleSubmitForm = event => {
    event.preventDefault();
    const newContact = { name, phone };
    createNewContact(newContact);
    resetForm();
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'phone') {
      setPhone(value);
    }
  };

  const resetForm = () => {
    setName('');
    setPhone('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmitForm}>
      <label className={s.label}>
        Name
        <input
          onChange={handleInputChange}
          className={s.input}
          value={name}
          type="text"
          name="name"
          placeholder='John'
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={s.label}>
        Tel
        <input
          onChange={handleInputChange}
          className={s.input}
          value={phone}
          type="tel"
          name="phone"
          placeholder='000-000-0000'
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button type="submit" name="submit" className={s.submit}>
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;


