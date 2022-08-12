import React, {FC} from 'react';
import {Button} from '@mui/material';
import {GitHub} from '@mui/icons-material';

const GitHubButton: FC = () => {
    function goToGitHub() {
        window.location.href = 'https://github.com/herasko-siarhei';
    }

    return (
        <Button onClick={goToGitHub} variant="outlined" color="inherit" startIcon={<GitHub/>}>
            GitHub
        </Button>
    );
};

export default GitHubButton;