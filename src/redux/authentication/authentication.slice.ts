import {createSlice} from '@reduxjs/toolkit';

import {
    AuthenticationErrorAction,
    AuthenticationInitializationAction,
    AuthenticationLoginAction,
    AuthenticationState
} from './authentication.types';

const authenticationState: AuthenticationState = {
    user: null,
    loading: true,
    error: null
};

const authenticationSlice = createSlice({
    name: 'authentication',
    initialState: authenticationState,
    reducers: {
        initialization: (state, action: AuthenticationInitializationAction) => {
            state.user = action.payload;
            state.loading = false;
            state.error = null;
        },
        login: (state, action: AuthenticationLoginAction) => {
            state.user = action.payload;
            state.loading = false;
            state.error = null;
        },
        logout: (state) => {
            state.user = null;
            state.loading = false;
            state.error = null;
        },
        error: (state, action: AuthenticationErrorAction) => {
            state.user = null;
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export default authenticationSlice;