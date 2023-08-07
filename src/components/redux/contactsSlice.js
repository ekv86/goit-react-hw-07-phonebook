import { createSlice } from "@reduxjs/toolkit";
import { addContacts, deleteContacts, fetchTContacts} from "./thunk";


const contactsInitialState = {
    contacts: [],
    isLoading: false,
    error: null
}

const handlePending = (state) => {
    state.isLoading = true
}

const handleFulfilledGet = (state, action) => {
    state.isLoading = false;
    state.contacts = action.payload;
    state.error = '';
}

const handleFulfilledCreate = (state, action) => {
    state.isLoading = false;
    state.contacts.push(action.payload);
    state.error = '';
}

const handleFulfilledDelete = (state, action) => {
    state.isLoading = false;
    state.contacts = state.contacts.filter(el => el.id !== action.payload.id)
    state.error = '';
}

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
}

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchTContacts.pending, handlePending)
            .addCase(fetchTContacts.fulfilled, handleFulfilledGet)
            .addCase(fetchTContacts.rejected, handleRejected)
            .addCase(addContacts.pending, handlePending)
            .addCase(addContacts.fulfilled, handleFulfilledCreate)
            .addCase(addContacts.rejected, handleRejected)
            .addCase(deleteContacts.pending, handlePending)
            .addCase(deleteContacts.fulfilled, handleFulfilledDelete)
            .addCase(deleteContacts.rejected, handleRejected)
    }
    
})

export const contactsReducer = contactsSlice.reducer;
