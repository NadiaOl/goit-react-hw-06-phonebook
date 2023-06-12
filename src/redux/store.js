import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './slice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/es/persistStore';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['filter'],
}

const persistedReducer = persistReducer(persistConfig, contactsReducer)

export const store = configureStore({
    reducer: {
        contacts: persistedReducer,
        filter: persistedReducer,
    }
});

export const persistor = persistStore(store)


