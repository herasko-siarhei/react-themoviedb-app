import api from 'api';
import authenticationSlice from 'redux/authentication/authentication.slice';
import {AppDispatch} from 'types/store';

const authenticationActions = {
    initialization: () => (dispatch: AppDispatch) => {
        api.authentication.initialization()
            .then(response => dispatch(authenticationSlice.actions.initialization(response ? {uid: response.uid} : null)))
            .catch(error => dispatch(authenticationSlice.actions.error(error)));
    },
    login: () => (dispatch: AppDispatch) => {
        api.authentication.login()
            .then(response => dispatch(authenticationSlice.actions.login({uid: response.uid})))
            .catch(error => dispatch(authenticationSlice.actions.error(error)));
    },
    logout: () => (dispatch: AppDispatch) => {
        api.authentication.logout()
            .then(() => dispatch(authenticationSlice.actions.logout()))
            .catch(error => dispatch(authenticationSlice.actions.error(error)));
    }
};

export default authenticationActions;