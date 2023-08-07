import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://64d11859ff953154bb79f894.mockapi.io/api/v1';

export const fetchTContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/contacts");
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const addContacts = createAsyncThunk(
    "contacts/addContacts",
    async (data, thunkAPI) => {
        try {
            const response = await axios.post("/contacts", data);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

// export const addContacts = createAsyncThunk(
//     "contacts/addContacts",
//     async (data) => {
//         const response = await fetch("https://64d11859ff953154bb79f894.mockapi.io/api/v1/contacts", {
//             method: "POST",
//             body: JSON.stringify(data)
//         });
//         return await response.json();
//     }
// );

export const deleteContacts = createAsyncThunk(
    "contacts/deleteContacts",
    async (id, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${id}`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);