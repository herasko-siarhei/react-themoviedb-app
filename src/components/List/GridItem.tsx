import React, {FC, ReactNode} from 'react';
import {Grid} from '@mui/material';

type GridItemProps = {
    children: ReactNode;
}

const GridItem: FC<GridItemProps> = ({children}) => {
    return (
        <Grid xs={12} sm={6} md={4} lg={3} item>
            {children}
        </Grid>
    );
};

export default GridItem;