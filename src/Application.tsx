import React, {FC} from 'react';

import Container from 'layout/Container';
import Header from 'layout/Header';
import Main from 'layout/Main';
import Footer from 'layout/Footer';

const Application: FC = () => {
    return (
        <Container>
            <Header/>
            <Main>
                Application
            </Main>
            <Footer/>
        </Container>
    );
};

export default Application;