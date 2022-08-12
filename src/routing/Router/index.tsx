import React, {FC, Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';

import {routeList} from 'configs/route';
import {RouteVariant} from 'types/route';

import Loading from 'components/Loading';
import PublicRoute from 'routing/PublicRoute';
import GuestRoute from 'routing/GuestRoute';
import PrivateRoute from 'routing/PrivateRoute';

const Router: FC = () => {
    return (
        <Suspense fallback={<Loading/>}>
            <Routes>
                {routeList.map(({variant, path, component}) => (
                    <Route
                        key={path}
                        path={path}
                        element={(() => {
                            switch (variant) {
                                case RouteVariant.Public:
                                    return (<PublicRoute component={component}/>);
                                case RouteVariant.Guest:
                                    return (<GuestRoute component={component}/>);
                                case RouteVariant.Private:
                                    return (<PrivateRoute component={component}/>);
                            }
                        })()}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default Router;