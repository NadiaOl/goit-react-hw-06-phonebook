import { createStore } from 'redux';
import { devToolsEnhancer } from "@redux-devtools/extension";

// конспект

const initialState = {
    tasks: [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filters: {
    status: "all",
    },
};

const reducer = (state = initialState, action) => {
    return state;
};

const enhancer = devToolsEnhancer();
export const store = createStore(reducer, enhancer);

// урок

// const reducer = (state, action) => {
//     if (action.type === 'increment') {
//         return {...state, total: state.total + action.payload}
//     }
//     return state
// }

// export const store = createStore(reducer, { total: 0, items: [], users: null })

// store.dispatch({ type: 'increment', payload: 12 })

// console.log('store', store.getState())