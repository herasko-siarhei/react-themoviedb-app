import React, {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import {Card as MUICard, CardActionArea, CardContent, Typography} from '@mui/material';

import {Card} from 'types/card';

import Image from 'components/Image';

const Item: FC<Card> = ({path, title, poster}) => {
    const navigate = useNavigate();

    function goTo(path: string) {
        navigate(path);
    }

    return (
        <MUICard onClick={() => goTo(path)} component={CardActionArea} variant="outlined">
            <Image image={poster} aspectRatio='2/3'/>
            <CardContent>
                <Typography
                    variant="h2"
                    fontSize="1rem"
                    fontWeight="medium"
                    align="center"
                    noWrap
                >
                    {title}
                </Typography>
            </CardContent>
        </MUICard>
    );
};

export default Item;