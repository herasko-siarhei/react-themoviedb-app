import React, {FC, ReactNode} from 'react';
import {Stack} from '@mui/material';

type CenterMainProps = {
    children: ReactNode;
}

const CenterMain: FC<CenterMainProps> = ({children}) => {
    return (
        <Stack flex="auto" justifyContent="center" alignItems="center" marginY={1}>
            {children}
        </Stack>
    );
};

export default CenterMain;