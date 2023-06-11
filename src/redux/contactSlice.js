import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    contacts: [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: "",
};
const contactSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.contacts.push(action.payload);
            },

            prepare(text) {
                return {
                    payload: {
                    id: nanoid(),
                    name: text[0],
                    number: text[1]
                    },
                };
            },
        },
        deleteContact(state, action) {
            const index = state.contacts.findIndex(contact => contact.id === action.payload);
            state.contacts.splice(index, 1) 
        },
    },
})

const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setStatusFilter(state, action) {
            state.status = action.payload
        }
    }
})

export const {addContact, deleteContact} = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;

export const {setStatusFilter} = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;

