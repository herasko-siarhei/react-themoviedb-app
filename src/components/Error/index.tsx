import React, {FC} from 'react';
import {Button, Stack, Typography} from '@mui/material';
import {ReplayOutlined} from '@mui/icons-material';

import CenterMain from 'layout/CenterMain';

type ErrorProps = {
    error: Error;
}

const Error: FC<ErrorProps> = ({error}) => {
    function reload() {
        window.location.reload();
    }

    return (
        <CenterMain>
            <Stack maxWidth="sm" alignItems="center" spacing={1}>
                <Typography variant="overline" fontSize="1.5rem" fontWeight="medium" align="center" color="error">
                    Error
                </Typography>
                <Typography variant="overline" fontSize="1.5rem" fontWeight="medium" align="center" color="error">
                    {error.message}
                </Typography>
                <Button onClick={reload} variant="outlined" color="error" startIcon={<ReplayOutlined/>}>
                    Reload
                </Button>
            </Stack>
        </CenterMain>
    );
};

export default Error;