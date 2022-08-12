import React, {FC} from 'react';
import {Stack} from '@mui/material';

import GitHubButton from 'layout/Footer/GitHubButton';

const Footer: FC = () => {
    return (
        <Stack marginY={1}>
            <GitHubButton/>
        </Stack>
    );
};

export default Footer;