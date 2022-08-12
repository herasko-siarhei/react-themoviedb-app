import React, {FC} from 'react';
import {Navigate} from 'react-router-dom';

import {RoutePath} from 'configs/route';
import {useAppSelector} from 'hooks/useAppSelector';
import {useRouteState} from 'hooks/useRouteState';

import Loading from 'components/Loading';

type GuestRouteProps = {
    component: FC;
}

const GuestRoute: FC<GuestRouteProps> = ({component: Component}) => {
    const {user, loading} = useAppSelector(state => state.authentication);
    const {from} = useRouteState();

    if (loading) {
        return <Loading/>;
    } else if (user) {
        return <Navigate to={from || RoutePath.Home} replace/>;
    } else {
        return <Component/>;
    }
};

export default GuestRoute;