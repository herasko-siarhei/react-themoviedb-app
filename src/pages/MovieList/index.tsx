import React, {FC, Fragment} from 'react';

import {movieListSortingList} from 'configs/sorting';
import {useFilter} from 'hooks/useFilter';

import Filter from 'components/Filter';

const MovieList: FC = () => {
    const {filter, setSorting, toggleGenre} = useFilter();
    return (
        <Fragment>
            <Filter
                sorting={{
                    sortingList: movieListSortingList,
                    activeSortingValue: filter.sorting,
                    onClick: setSorting
                }}
                genres={{
                    type: 'movie',
                    activeGenresValues: filter.genres,
                    onClick: toggleGenre
                }}
            />
        </Fragment>
    );
};

export default MovieList;