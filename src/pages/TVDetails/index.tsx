import React, {FC, useEffect} from 'react';
import {Navigate, useParams} from 'react-router-dom';
import {Grid, Stack, Typography} from '@mui/material';

import api from 'api';
import {RoutePath} from 'configs/route';
import {useRequest} from 'hooks/useRequest';
import {refactorGetTVDetailsData} from 'utils/refactorGetTVDetailsData';

import Error from 'components/Error';
import Loading from 'components/Loading';
import Image from 'components/Image';

const TVDetails: FC = () => {
    const {id} = useParams();
    const {data, loading, error, run} = useRequest(api.database.getTVDetails);

    useEffect(() => {
        if (id) {
            run(Number(id));
        }
    }, [run, id]);

    const tvDetails = refactorGetTVDetailsData(data);

    if (error) {
        return <Error error={error}/>;
    } else if (loading) {
        return <Loading/>;
    } else if (tvDetails === null) {
        return <Navigate to={RoutePath.NotFound} replace/>;
    } else {
        const {id, title, poster, overview, first_date, last_date, rating, genres, runtime} = tvDetails;
        return (
            <Grid alignItems="center" spacing={1} container>
                <Grid xs={12} sm={4} md={3} item>
                    <Image image={poster} aspectRatio='2/3'/>
                </Grid>
                <Grid xs={12} sm={8} md={9} item>
                    <Stack spacing={1}>
                        <Typography variant="h1" fontSize="1.5rem" fontWeight="bold">
                            {title} ({first_date || 'ND'} - {last_date || 'ND'})
                        </Typography>
                        <Typography variant="h2" fontSize="1rem" fontWeight="medium">
                            {rating || 'ND'} / {genres?.map(i => i.label).join(', ') || 'ND'} / {runtime?.join(', ') || 'ND'}
                        </Typography>
                        {overview && (
                            <Typography variant="h3" fontSize="1rem" fontWeight="regular">
                                {overview}
                            </Typography>
                        )}
                    </Stack>
                </Grid>
            </Grid>
        );
    }
};

export default TVDetails;