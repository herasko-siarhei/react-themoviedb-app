import React, {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import {Button, Stack, Typography} from '@mui/material';
import {HomeOutlined} from '@mui/icons-material';

import {RoutePath} from 'configs/route';

import CenterMain from 'layout/CenterMain';

const NotFound: FC = () => {
    const navigate = useNavigate();

    function goHome() {
        navigate(RoutePath.Home);
    }

    return (
        <CenterMain>
            <Stack maxWidth="sm" alignItems="center" spacing={1}>
                <Typography variant="overline" fontSize="1.5rem" fontWeight="medium" align="center">
                    Not Found
                </Typography>
                <Typography variant="overline" fontSize="1.5rem" fontWeight="medium" align="center" color="error">
                    This page does not exist.
                </Typography>
                <Button onClick={goHome} variant="outlined" color="inherit" startIcon={<HomeOutlined/>}>
                    Go Home
                </Button>
            </Stack>
        </CenterMain>
    );
};

export default NotFound;