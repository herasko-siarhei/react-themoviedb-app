import React, {FC, ReactNode} from 'react';
import {Grid} from '@mui/material';

type GridContainerProps = {
    children: ReactNode;
}

const GridContainer: FC<GridContainerProps> = ({children}) => {
    return (
        <div>
            <Grid justifyContent="center" spacing={1} container>
                {children}
            </Grid>
        </div>
    );
};

export default GridContainer;