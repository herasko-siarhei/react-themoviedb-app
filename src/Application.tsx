import React, {FC, useEffect} from 'react';

import authenticationActions from 'redux/authentication/authentication.actions';
import {useAppDispatch} from 'hooks/useAppDispatch';

import Container from 'layout/Container';
import Header from 'layout/Header';
import Main from 'layout/Main';
import Footer from 'layout/Footer';
import Router from 'routing/Router';

const Application: FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(authenticationActions.initialization());
    }, [dispatch]);

    return (
        <Container>
            <Header/>
            <Main>
                <Router/>
            </Main>
            <Footer/>
        </Container>
    );
};

export default Application;