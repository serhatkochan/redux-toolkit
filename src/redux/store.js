import {configureStore} from '@reduxjs/toolkit';
import counter from './reducers/counter';

export const store = configureStore({
    reducer: {
        counter,
    },
});

export const dispatch = (action) => {
    return store.dispatch(action);
}