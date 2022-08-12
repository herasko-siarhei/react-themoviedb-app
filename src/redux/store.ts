import {configureStore} from '@reduxjs/toolkit';

import authenticationReducer from 'redux/authentication/authentication.reducer';

const store = configureStore({
    reducer: {
        authentication: authenticationReducer
    }
});

export default store;