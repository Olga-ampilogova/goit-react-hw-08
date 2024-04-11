import { createSelector, createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts, } from '../contacts/operations';
import { selectContacts } from './selectors';
import { selectNameFilter } from '../filters/slice';
import { logOut } from '../auth/operations';

const initialState = {
  items: [],
  loading: false,
  error: null,
  isLoading:false,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
         state.loading = false;
         state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })

        .addCase(addContact.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(addContact.fulfilled, (state, action) => {
          state.loading = false;
          state.items.push(action.payload);
        })
        .addCase(addContact.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
        .addCase(deleteContact.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
          state.loading = false;
          state.items = state.items.filter((item) => item.id !== action.payload.id);
        })
        .addCase(deleteContact.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
      .addCase(logOut.fulfilled, (state) => {
        state.items = [];
        state.error = null;
        state.isLoading = false;
    })
  }
});
export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  }
);

export default contactsSlice.reducer;
