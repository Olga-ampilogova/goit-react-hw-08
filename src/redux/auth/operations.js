import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';


const setAuthHeader = (token) => { axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; }

const clearAuthHeader = () => { axios.defaults.headers.common['Authorization'] = ""; }

export const register = createAsyncThunk('auth/register', async (values, thunkAPi
) => {
    try {
        const response = await axios.post('/users/signup', values);
        setAuthHeader(response.data.token);
        return response.data;
    } catch (error) {
        return thunkAPi.rejectWithValue(error.message);
    }
}
)

export const logIn = createAsyncThunk('auth/login', async (values, thunkAPi) => {
    try {
        const response = await axios.post('/users/login', values)
        setAuthHeader(response.data.token);
        return response.data;
    } catch (error) {
        return thunkAPi.rejectWithValue(error.message);
    }
 });


export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPi) => {
    try {
        await axios.post('/users/logout');
        clearAuthHeader();
    } catch (error) {
        return thunkAPi.rejectWithValue(error.message);
    }
});

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPi) => {
    const {auth:{token}} = thunkAPi.getState();
    setAuthHeader(token);
    const response = await axios.get('/users/current');
    return response.data;
},
    {
        condition: (_, { getState }) => {
            const reduxState = getState();
            const savedToken = reduxState.auth.token;
            return savedToken !== null;
}}
)