import { createAsyncThunk } from "@reduxjs/toolkit";

import { toast } from "react-toastify";
import { addContact, fetchContacts, removeContact } from "services/contactsApi";

export const getContacts = createAsyncThunk('contacts/getContacts', async (_, {rejectWithValue})=>{
  try{
    const response = await fetchContacts();
    return response;

  }catch(error){
    return rejectWithValue({ message: error.message, status: error.response.status})
  }
})

export const addNewContact = createAsyncThunk('contacts/addNewContact', async (contact, {rejectWithValue})=>{
  try{
    const response = await addContact(contact);
    toast('Contact has been added!');
    return response;

  }catch(error){
    return rejectWithValue({ message: error.message, status: error.response.status})
  }
})

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId, {rejectWithValue})=>{
  try{
   await removeContact(contactId);
    toast('Contact has been successfully deleted!');
    return contactId;
  }catch(error){
    return rejectWithValue({ message: error.message, status: error.response.status})
  }
})
