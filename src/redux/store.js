// import { createStore } from 'redux';
// import { devToolsEnhancer } from "@redux-devtools/extension";
// import { reducer } from './reducer';
import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer, filtersReducer } from './contactSlice';


export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filtersReducer,
    }
}
    
);

