import { privateApi } from "http/http";

export const fetchContacts = async () => {
  const {data} = await privateApi.get('contacts');
  return data;
}

export const addContact = async (contact) =>{
  const {data} = await privateApi.post('contacts', contact);
  return data;
}

export const removeContact = async (contactId) =>{
  const {data} = await privateApi.delete(`contacts/${contactId}`);
  return data;
}
