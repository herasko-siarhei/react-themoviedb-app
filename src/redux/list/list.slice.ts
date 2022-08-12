import {createSlice} from '@reduxjs/toolkit';

import listActions from 'redux/list/list.actions';
import {ListFulfilledAction, ListRejectedAction, ListState} from 'redux/list/list.types';

const listState: ListState = {
    list: [],
    total: 0,
    loading: true,
    error: null
};

const setPending = (state: ListState) => {
    state.list = [];
    state.total = 0;
    state.loading = true;
    state.error = null;
};

const setFulfilled = (state: ListState, action: ListFulfilledAction) => {
    state.list = action.payload.list;
    state.total = action.payload.total;
    state.loading = false;
    state.error = null;
};

const setRejected = (state: ListState, action: ListRejectedAction) => {
    state.list = [];
    state.total = 0;
    state.loading = true;
    state.error = action.payload;
};

const listSlice = createSlice({
    name: 'list',
    initialState: listState,
    reducers: {
        reset: () => listState
    },
    extraReducers: {
        [listActions.getMovieList.pending.type]: setPending,
        [listActions.getMovieList.fulfilled.type]: setFulfilled,
        [listActions.getMovieList.rejected.type]: setRejected,
        [listActions.getTVList.pending.type]: setPending,
        [listActions.getTVList.fulfilled.type]: setFulfilled,
        [listActions.getTVList.rejected.type]: setRejected
    }
});

export default listSlice;