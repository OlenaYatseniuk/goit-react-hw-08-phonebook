import {
  addNewContact,
  deleteContact,
  getContacts,
} from './operations.contacts';

import { createSlice } from '@reduxjs/toolkit';
import  initialState from './initialState.contacts';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
  state.isDeleting = false;
}

const handleRejected = (state, {payload})=>{
  state.isLoading = false;
  state.error = payload;
  state.isDeleting = false;
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [getContacts.pending]: handlePending,
    [getContacts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
      state.isDeleting = false;
    },
    [getContacts.rejected]: handleRejected,

    [addNewContact.pending]: handlePending,
    [addNewContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items.push(payload);
      state.isDeleting = false;
    },
    [addNewContact.rejected]: handleRejected,

    [deleteContact.pending]: state => {
      state.isLoading = false;
      state.error = null;
      state.isDeleting = true;
    },
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isDeleting = false;
      state.items = state.items.filter(item => item.id !== payload);
    },
    [deleteContact.rejected]: handleRejected,
  },
});

const contactsReducer = contactsSlice.reducer;
export default contactsReducer;
