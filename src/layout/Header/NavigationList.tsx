import React, {FC} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {Button, Stack} from '@mui/material';

import {navigationList} from 'configs/navigation';

const NavigationList: FC = () => {
    const navigate = useNavigate();
    const {pathname} = useLocation();

    function goTo(path: string) {
        if (pathname !== path) {
            navigate(path);
        }
    }

    return (
        <Stack
            direction="row"
            spacing={1}
            sx={{
                overflow: 'auto',
                '& > *': {
                    flexShrink: 0
                },
                '::-webkit-scrollbar': {
                    display: 'none'
                }
            }}
        >
            {navigationList.map(({label, path}) => (
                <Button
                    key={path}
                    onClick={() => goTo(path)}
                    color={pathname === path ? 'primary' : 'inherit'}
                >
                    {label}
                </Button>
            ))}
        </Stack>
    );
};

export default NavigationList;