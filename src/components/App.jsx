import { useSelector } from 'react-redux';
import ContactForm from './ContactForm';
import ContactsList from './ContactsList';
import Container from './Container';
import Section from './Section';
import Filter from './Filter';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './Loader';
import { getIsLoading } from 'redux/contacts/selectors.contacts';


export function App() {
  const isLoading = useSelector(getIsLoading);

  return (
    <>
      <Section title="PhoneBook">
        <Container>
          <ContactForm />
          <h2 className='titleContacts'>Contacts</h2>
          {isLoading && <Loader/>}
          <Filter />
          <ContactsList />
        </Container>
      </Section>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}
