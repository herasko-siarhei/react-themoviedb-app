import React, {FC, Fragment, useEffect} from 'react';
import {Button, Divider, Stack} from '@mui/material';

import api from 'api';
import {useRequest} from 'hooks/useRequest';
import {refactorGetGenreListData} from 'utils/refactorGetGenreListData';
import {Genre} from 'types/genre';

import Error from 'components/Error';
import Loading from 'components/Loading';

type GenreListProps = {
    type: 'movie' | 'tv';
    activeGenresValues: Genre['value'][];
    onClick: (value: Genre['value']) => void;
}

const GenreList: FC<GenreListProps> = ({type, activeGenresValues, onClick}) => {
    const {data, loading, error, run} = useRequest(api.database.getGenresList);

    useEffect(() => {
        run(type);
    }, [run, type]);

    return (
        <Fragment>
            <Divider textAlign="center">Genres</Divider>
            {error ? (
                <Error error={error}/>
            ) : loading ? (
                <Loading/>
            ) : (
                <Stack direction="row" justifyContent="center" flexWrap="wrap">
                    {refactorGetGenreListData(data).map(({label, value}) => (
                        <Button
                            key={value}
                            onClick={() => onClick(value)}
                            color={activeGenresValues.includes(value) ? 'primary' : 'inherit'}
                            size="small"
                            sx={{margin: 0.5}}
                        >
                            {label}
                        </Button>
                    ))}
                </Stack>
            )}
        </Fragment>
    );
};

export default GenreList;