import React, {FC, Fragment} from 'react';
import {Button, Divider, Stack} from '@mui/material';

import {Sorting} from 'types/sorting';

type SortingListProps = {
    sortingList: Sorting[];
    activeSortingValue: Sorting['value'];
    onClick: (value: Sorting['value']) => void;
}

const SortingList: FC<SortingListProps> = ({sortingList, activeSortingValue, onClick}) => {
    return (
        <Fragment>
            <Divider textAlign="center">Sorting</Divider>
            <Stack direction="row" justifyContent="center" flexWrap="wrap">
                {sortingList.map(({label, value}) => (
                    <Button
                        key={value}
                        onClick={() => onClick(value)}
                        color={activeSortingValue === value ? 'primary' : 'inherit'}
                        sx={{margin: 0.5}}
                    >
                        {label}
                    </Button>
                ))}
            </Stack>
        </Fragment>
    );
};

export default SortingList;