import React, {FC} from 'react';
import {Stack} from '@mui/material';

import Logotype from 'layout/Header/Logotype';
import AuthenticationButton from 'layout/Header/AuthenticationButton';
import NavigationList from 'layout/Header/NavigationList';

const Header: FC = () => {
    return (
        <Stack marginY={1} spacing={1}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Logotype/>
                <AuthenticationButton/>
            </Stack>
            <Stack direction="row" justifyContent="center">
                <NavigationList/>
            </Stack>
        </Stack>
    );
};

export default Header;