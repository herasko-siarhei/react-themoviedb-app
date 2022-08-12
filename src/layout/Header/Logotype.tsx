import React, {FC} from 'react';
import {Typography} from '@mui/material';

const Logotype: FC = () => {
    return (
        <Typography variant="h2" fontSize="1.5rem" fontWeight="bold" sx={{cursor: 'pointer'}}>
            TheMovieDB
        </Typography>
    );
};

export default Logotype;