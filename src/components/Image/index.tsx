import React, {FC, Fragment, useState} from 'react';
import {CardMedia, CircularProgress, Stack} from '@mui/material';
import {ErrorOutline, ImageNotSupportedOutlined} from '@mui/icons-material';

type ImageProps = {
    image: string | null;
    aspectRatio: string;
}

const Image: FC<ImageProps> = ({image, aspectRatio}) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    return (
        <Fragment>
            {image && (
                <CardMedia
                    image={image}
                    onLoad={() => setLoading(false)}
                    onError={() => setError(true)}
                    component="img"
                    sx={{
                        display: (loading || error) ? 'none' : 'block',
                        aspectRatio
                    }}
                />
            )}
            {(!image || error || loading) && (
                <Stack justifyContent="center" alignItems="center" sx={{aspectRatio}}>
                    {!image ? (
                        <ImageNotSupportedOutlined fontSize="large"/>
                    ) : error ? (
                        <ErrorOutline fontSize="large" color="error"/>
                    ) : loading && (
                        <CircularProgress/>
                    )}
                </Stack>
            )}
        </Fragment>
    );
};

export default Image;