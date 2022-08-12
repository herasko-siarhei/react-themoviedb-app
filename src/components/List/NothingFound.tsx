import React, {FC} from 'react';
import {Typography} from '@mui/material';

import CenterMain from 'layout/CenterMain';

const NothingFound: FC = () => {
    return (
        <CenterMain>
            <Typography variant="overline" fontSize="1.5rem" fontWeight="medium" align="center">
                Nothing Found
            </Typography>
        </CenterMain>
    );
};

export default NothingFound;