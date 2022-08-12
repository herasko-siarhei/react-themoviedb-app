import {createAsyncThunk} from '@reduxjs/toolkit';

import api from 'api';
import listSlice from 'redux/list/list.slice';
import {refactorGetMovieListData} from 'utils/refactorGetMovieListData';
import {refactorGetTVListData} from 'utils/refactorGetTVListData';
import {AppDispatch} from 'types/store';
import {Filter} from 'types/filter';

const listActions = {
    reset: () => (dispatch: AppDispatch) => {
        dispatch(listSlice.actions.reset());
    },
    getMovieList: createAsyncThunk(
        'list/getMovieList',
        async (params: Filter, {rejectWithValue}) => {
            try {
                const response = await api.database.getMovieList(params);
                return refactorGetMovieListData(response);
            } catch (error) {
                return rejectWithValue(error);
            }
        }
    ),
    getTVList: createAsyncThunk(
        'list/getTVList',
        async (params: Filter, {rejectWithValue}) => {
            try {
                const response = await api.database.getTVList(params);
                return refactorGetTVListData(response);
            } catch (error) {
                return rejectWithValue(error);
            }
        }
    )
};

export default listActions;