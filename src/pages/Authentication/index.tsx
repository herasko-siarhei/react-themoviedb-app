import React, {FC} from 'react';
import {Button, Stack, Typography} from '@mui/material';
import {Google} from '@mui/icons-material';

import authenticationActions from 'redux/authentication/authentication.actions';
import {useAppSelector} from 'hooks/useAppSelector';
import {useAppDispatch} from 'hooks/useAppDispatch';
import {useRouteState} from 'hooks/useRouteState';

import CenterMain from 'layout/CenterMain';

const Authentication: FC = () => {
    const {error} = useAppSelector(state => state.authentication);
    const {message} = useRouteState();
    const dispatch = useAppDispatch();

    function login() {
        dispatch(authenticationActions.login());
    }

    return (
        <CenterMain>
            <Stack maxWidth="sm" alignItems="center" spacing={1}>
                <Typography variant="overline" fontSize="1.5rem" fontWeight="medium" align="center">
                    Authentication
                </Typography>
                {error && (
                    <Typography variant="overline" fontSize="1.5rem" fontWeight="medium" align="center" color="error">
                        {error.message}
                    </Typography>
                )}
                {message && (
                    <Typography variant="overline" fontSize="1.5rem" fontWeight="medium" align="center" color="error">
                        {message}
                    </Typography>
                )}
                <Button onClick={login} variant="outlined" color="inherit" startIcon={<Google/>}>
                    Login
                </Button>
            </Stack>
        </CenterMain>
    );
};

export default Authentication;