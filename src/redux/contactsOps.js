import { createAsyncThunk,   } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://66072ba7be53febb857f43af.mockapi.io';

export const fetchAll = createAsyncThunk('contacts/fetchContacts', async (_, thunkAPI) => {
    try {
        const response = await axios.get('/contacts');
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId, thunkAPI) => {
    try {
        const response = await axios.delete(`/contacts/${contactId}`)
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contactData, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contactData);
      return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
  }
);
