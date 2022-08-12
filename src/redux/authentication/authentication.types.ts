import {PayloadAction} from '@reduxjs/toolkit';

import {User} from 'types/user';

export type AuthenticationState = {
    user: User | null;
    loading: boolean;
    error: Error | null;
}

export type AuthenticationInitializationAction = PayloadAction<User | null>

export type AuthenticationLoginAction = PayloadAction<User>

export type AuthenticationErrorAction = PayloadAction<Error>