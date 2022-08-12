import React, {FC} from 'react';
import {LoadingButton} from '@mui/lab';
import {LoginOutlined, LogoutOutlined} from '@mui/icons-material';

import authenticationActions from 'redux/authentication/authentication.actions';
import {useAppSelector} from 'hooks/useAppSelector';
import {useAppDispatch} from 'hooks/useAppDispatch';

const AuthenticationButton: FC = () => {
    const {user, loading} = useAppSelector(state => state.authentication);
    const dispatch = useAppDispatch();

    function login() {
        dispatch(authenticationActions.login());
    }

    function logout() {
        dispatch(authenticationActions.logout());
    }

    return (
        <LoadingButton
            loading={loading}
            onClick={user ? logout : login}
            variant="outlined"
            color="inherit"
        >
            {user ? <LogoutOutlined/> : <LoginOutlined/>}
        </LoadingButton>
    );
};

export default AuthenticationButton;