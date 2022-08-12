import React, {FC, Fragment, useEffect} from 'react';

import listActions from 'redux/list/list.actions';
import {tvListSortingList} from 'configs/sorting';
import {useAppDispatch} from 'hooks/useAppDispatch';
import {useFilter} from 'hooks/useFilter';

import Filter from 'components/Filter';

const TVList: FC = () => {
    const {filter, setSorting, toggleGenre} = useFilter();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(listActions.getTVList(filter));
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