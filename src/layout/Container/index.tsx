import React, {FC, ReactNode} from 'react';
import {Container as MUIContainer, Stack} from '@mui/material';

type ContainerProps = {
    children: ReactNode;
}

const Container: FC<ContainerProps> = ({children}) => {
    return (
        <Stack component={MUIContainer} minHeight="100vh">
            {children}
        </Stack>
    );
};

export default Container;