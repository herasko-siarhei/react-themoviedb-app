import {configureStore} from '@reduxjs/toolkit';

import authenticationReducer from 'redux/authentication/authentication.reducer';
import listReducer from 'redux/list/list.reducer';

const store = configureStore({
    reducer: {
        authentication: authenticationReducer,
        list: listReducer
    }
});

export default store;