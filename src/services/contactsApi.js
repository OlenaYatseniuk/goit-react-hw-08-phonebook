import axios from "axios";
const contactsAxios = axios.create({
  baseURL: 'https://6331b08acff0e7bf70f443d4.mockapi.io/contacts',
  params: {},
})

export const fetchContacts = async () => {
  const {data} = await contactsAxios.get('');
  return data;
}

export const addContact = async (contact) =>{
  const {data} = await contactsAxios.post('', contact);
  return data;
}

export const removeContact = async (contactId) =>{
  const {data} = await contactsAxios.delete(`/${contactId}`);
  return data;
}
