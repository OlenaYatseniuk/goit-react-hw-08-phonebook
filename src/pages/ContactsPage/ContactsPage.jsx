import Section from 'components/Section'
import  Container  from 'components/Container';
import ContactForm from 'components/ContactForm';
import Loader from 'components/Loader';
import Filter from 'components/Filter';
import ContactsList from 'components/ContactsList';
import { useSelector } from 'react-redux';
import { getIsLoading } from 'redux/contacts/selectors.contacts';

function ContactsPage() {
  const isLoading = useSelector(getIsLoading);
  return (
    <Section title="PhoneBook">
        <Container>
          <ContactForm />
          <h2 className='titleContacts'>Contacts</h2>
          {isLoading && <Loader/>}
          <Filter />
          <ContactsList />
        </Container>
      </Section>
  )
}

export default ContactsPage
