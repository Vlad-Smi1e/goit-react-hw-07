import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const ADD_CONTACT = 'contacts/addContact';
export const DELETE_CONTACT = 'contacts/deleteContact';
export const SET_FILTER = 'filter/setFilter';

export const addContact = createAction(ADD_CONTACT, (name, number) => {
  return {
    payload: {
      id: nanoid(),
      name,
      number
    }
  };
});

export const deleteContact = createAction(DELETE_CONTACT);
export const setFilter = createAction(SET_FILTER);
