
export const selectContacts = state => state.contacts?.items || [];
export const selectFilter = state => state.filter || '';

export const selectVisibleContacts = state => {
  const contacts = selectContacts(state);
  const filter = selectFilter(state);
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export const selectIsLoading = state => state.contacts?.isLoading || false;
export const selectError = state => state.contacts?.error || null;
