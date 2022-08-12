import React, {FC, Fragment, useEffect} from 'react';

import listActions from 'redux/list/list.actions';
import {movieListSortingList} from 'configs/sorting';
import {useAppDispatch} from 'hooks/useAppDispatch';
import {useFilter} from 'hooks/useFilter';

import Filter from 'components/Filter';

const MovieList: FC = () => {
    const {filter, setSorting, toggleGenre} = useFilter();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(listActions.getMovieList(filter));
    }, [dispatch, filter]);

    useEffect(() => {
        return () => {
            dispatch(listActions.reset());
        };
    }, [dispatch]);

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