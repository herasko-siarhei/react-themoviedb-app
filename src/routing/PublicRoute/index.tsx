import React, {FC} from 'react';

type PublicRouteProps = {
    component: FC;
}

const PublicRoute: FC<PublicRouteProps> = ({component: Component}) => {
    return <Component/>;
};

export default PublicRoute;