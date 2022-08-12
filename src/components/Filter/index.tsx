import React, {FC, useState} from 'react';
import {Button, Collapse, Paper, Stack} from '@mui/material';

import {Sorting} from 'types/sorting';
import {Genre} from 'types/genre';

import SortingList from 'components/Filter/SortingList';
import GenreList from 'components/Filter/GenreList';

type FilterProps = {
    sorting?: {
        sortingList: Sorting[];
        activeSortingValue: Sorting['value'];
        onClick: (value: Sorting['value']) => void;
    },
    genres?: {
        type: 'movie' | 'tv';
        activeGenresValues: Genre['value'][];
        onClick: (value: Genre['value']) => void;
    }
}

const Filter: FC<FilterProps> = ({sorting, genres}) => {
    const [open, setOpen] = useState(false);

    function toggleOpen() {
        setOpen(!open);
    }

    return (
        <Stack spacing={1}>
            <Button onClick={toggleOpen} variant="outlined" color="inherit">
                Filter
            </Button>
            <Collapse in={open}>
                <Stack component={Paper} variant="outlined" padding={1} spacing={1}>
                    {sorting && (
                        <SortingList {...sorting}/>
                    )}
                    {genres && (
                        <GenreList {...genres}/>
                    )}
                </Stack>
            </Collapse>
        </Stack>
    );
};

export default Filter;