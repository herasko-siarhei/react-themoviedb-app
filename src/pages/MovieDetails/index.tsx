import React, {FC, useEffect} from 'react';
import {Navigate, useParams} from 'react-router-dom';
import {Grid, Stack, Typography} from '@mui/material';

import api from 'api';
import {RoutePath} from 'configs/route';
import {useRequest} from 'hooks/useRequest';
import {refactorGetMovieDetailsData} from 'utils/refactorGetMovieDetailsData';

import Error from 'components/Error';
import Loading from 'components/Loading';
import Image from 'components/Image';
import MyListButtons from 'components/MyListButtons';

const MovieDetails: FC = () => {
    const {id} = useParams();
    const {data, loading, error, run} = useRequest(api.database.getMovieDetails);

    useEffect(() => {
        if (id) {
            run(Number(id));
        }
    }, [run, id]);

    const movieDetails = refactorGetMovieDetailsData(data);

    if (error) {
        return <Error error={error}/>;
    } else if (loading) {
        return <Loading/>;
    } else if (movieDetails === null) {
        return <Navigate to={RoutePath.NotFound} replace/>;
    } else {
        const {id, title, poster, overview, date, rating, genres, runtime} = movieDetails;
        return (
            <Grid alignItems="center" spacing={1} container>
                <Grid xs={12} sm={4} md={3} item>
                    <Image image={poster} aspectRatio='2/3'/>
                </Grid>
                <Grid xs={12} sm={8} md={9} item>
                    <Stack spacing={1}>
                        <Typography variant="h1" fontSize="1.5rem" fontWeight="bold">
                            {title} ({date || 'ND'})
                        </Typography>
                        <Typography variant="h2" fontSize="1rem" fontWeight="medium">
                            {rating || 'ND'} / {genres?.map(i => i.label).join(', ') || 'ND'} / {runtime || 'ND'}
                        </Typography>
                        {overview && (
                            <Typography variant="h3" fontSize="1rem" fontWeight="regular">
                                {overview}
                            </Typography>
                        )}
                        <MyListButtons item={{type: 'movie', id, title, poster}}/>
                    </Stack>
                </Grid>
            </Grid>
        );
    }
};

export default MovieDetails;