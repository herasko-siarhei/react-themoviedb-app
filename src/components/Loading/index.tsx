import React, {FC} from 'react';
import {CircularProgress} from '@mui/material';

import CenterMain from 'layout/CenterMain';

const Loading: FC = () => {
    return (
        <CenterMain>
            <CircularProgress/>
        </CenterMain>
    );
};

export default Loading;