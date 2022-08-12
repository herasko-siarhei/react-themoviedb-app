import React, {FC, useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {Stack} from '@mui/material';
import {LoadingButton} from '@mui/lab';

import api from 'api';
import {myListSortingList} from 'configs/sorting';
import {RoutePath} from 'configs/route';
import {useRequest} from 'hooks/useRequest';
import {useAppSelector} from 'hooks/useAppSelector';
import {My} from 'types/firebase';

import Error from 'components/Error';

type MyListButtonsProps = {
    item: My;
}

const MyListButtons: FC<MyListButtonsProps> = ({item}) => {
    const {data, setData, loading, setLoading, error, setError, run} = useRequest(api.database.checkMy);
    const {user, loading: authenticationLoading} = useAppSelector(state => state.authentication);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (user) {
            run(myListSortingList.map(sorting => sorting.value), item);
        }
    }, [run, user, item]);

    useEffect(() => {
        if (!authenticationLoading && !user) {
            setData([]);
            setLoading(false);
        }
    }, [setData, setLoading, authenticationLoading, user]);

    function toggleMy(sortingValue: string) {
        if (data?.includes(sortingValue)) {
            setData(data?.filter(i => i !== sortingValue));
            api.database.deleteMy(sortingValue, item)
                .catch(error => setError(error));
        } else {
            setData([...(data || []), sortingValue]);
            api.database.addMy(sortingValue, item)
                .catch(error => setError(error));
        }
    }

    function goToAuthentication() {
        navigate(RoutePath.Authentication, {
            state: {
                from: location.pathname + location.search,
                message: 'You must be login to access this feature.'
            }
        });
    }

    if (error) {
        return <Error error={error}/>;
    } else {
        return (
            <Stack direction="row" spacing={1}>
                {myListSortingList.map(({value, icon: Icon}) => (
                    <LoadingButton
                        key={value}
                        loading={loading}
                        onClick={user ? () => toggleMy(value) : goToAuthentication}
                        variant={data?.includes(value) ? 'contained' : 'outlined'}
                        color="inherit"
                    >
                        <Icon sx={{color: data?.includes(value) ? '#121212' : 'inherit'}}/>
                    </LoadingButton>
                ))}
            </Stack>
        );
    }
};

export default MyListButtons;