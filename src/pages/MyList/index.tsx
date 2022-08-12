import React, {FC, Fragment, useEffect} from 'react';

import listActions from 'redux/list/list.actions';
import {myListSortingList} from 'configs/sorting';
import {useAppSelector} from 'hooks/useAppSelector';
import {useAppDispatch} from 'hooks/useAppDispatch';
import {useFilter} from 'hooks/useFilter';

import Filter from 'components/Filter';
import List from 'components/List';

const MyList: FC = () => {
    const {list, loading, error} = useAppSelector(state => state.list);
    const dispatch = useAppDispatch();
    const {filter, setSorting} = useFilter();

    useEffect(() => {
        dispatch(listActions.getMyList(filter));
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
                    sortingList: myListSortingList,
                    activeSortingValue: filter.sorting,
                    onClick: setSorting
                }}
            />
            <List list={list} loading={loading} error={error}/>
        </Fragment>
    );
};

export default MyList;