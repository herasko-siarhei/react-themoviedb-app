import React, {FC, Fragment} from 'react';

import {tvListSortingList} from 'configs/sorting';
import {useFilter} from 'hooks/useFilter';

import Filter from 'components/Filter';

const TVList: FC = () => {
    const {filter, setSorting, toggleGenre} = useFilter();
    return (
        <Fragment>
            <Filter
                sorting={{
                    sortingList: tvListSortingList,
                    activeSortingValue: filter.sorting,
                    onClick: setSorting
                }}
                genres={{
                    type: 'tv',
                    activeGenresValues: filter.genres,
                    onClick: toggleGenre
                }}
            />
        </Fragment>
    );
};

export default TVList;