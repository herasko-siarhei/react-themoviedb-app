import React, {FC, ReactNode} from 'react';
import {Stack} from '@mui/material';

type MainProps = {
    children: ReactNode;
}

const Main: FC<MainProps> = ({children}) => {
    return (
        <Stack flex="auto" spacing={1}>
            {children}
        </Stack>
    );
};

export default Main;