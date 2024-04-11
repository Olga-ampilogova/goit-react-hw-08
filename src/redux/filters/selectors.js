import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";
import { selectNameFilter } from "./slice";

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  }
);