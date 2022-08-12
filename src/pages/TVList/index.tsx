import React, {FC, Fragment, useEffect} from 'react';

import listActions from 'redux/list/list.actions';
import {tvListSortingList} from 'configs/sorting';
import {useAppSelector} from 'hooks/useAppSelector';
import {useAppDispatch} from 'hooks/useAppDispatch';
import {useFilter} from 'hooks/useFilter';

import Filter from 'components/Filter';
import List from 'components/List';
import Pagination from 'components/Pagination';

const TVList: FC = () => {
    const {filter, setSorting, toggleGenre, setPage} = useFilter();
    const {list, total, loading, error} = useAppSelector(state => state.list);
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
            <List list={list} loading={loading} error={error}/>
            <Pagination page={filter.page} total={total} onClick={setPage}/>
        </Fragment>
    );
};

export default TVList;