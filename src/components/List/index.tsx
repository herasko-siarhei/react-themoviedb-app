import React, {FC} from 'react';

import {Card} from 'types/card';

import Error from 'components/Error';
import Loading from 'components/Loading';
import NothingFound from 'components/List/NothingFound';
import GridContainer from 'components/List/GridContainer';
import GridItem from 'components/List/GridItem';
import Item from 'components/List/Item';

type ListProps = {
    list: Card[];
    loading: boolean;
    error: Error | null;
}

const List: FC<ListProps> = ({list, loading, error}) => {
    if (error) {
        return <Error error={error}/>;
    } else if (loading) {
        return <Loading/>;
    } else if (list.length === 0) {
        return <NothingFound/>;
    } else {
        return (
            <GridContainer>
                {list.map((item) => (
                    <GridItem key={item.path}>
                        <Item {...item}/>
                    </GridItem>
                ))}
            </GridContainer>
        );
    }
};

export default List;