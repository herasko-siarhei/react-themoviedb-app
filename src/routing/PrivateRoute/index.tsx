import React, {FC} from 'react';
import {Navigate, useLocation} from 'react-router-dom';

import {RoutePath} from 'configs/route';
import {useAppSelector} from 'hooks/useAppSelector';

import Loading from 'components/Loading';

type PrivateRouteProps = {
    component: FC;
}

const PrivateRoute: FC<PrivateRouteProps> = ({component: Component}) => {
    const {user, loading} = useAppSelector(state => state.authentication);
    const location = useLocation();

    if (loading) {
        return <Loading/>;
    } else if (user) {
        return <Component/>;
    } else {
        return (
            <Navigate
                to={RoutePath.Authentication}
                state={{
                    from: location.pathname + location.search,
                    message: 'You must be login to access this page.'
                }}
                replace
            />
        );
    }
};

export default PrivateRoute;