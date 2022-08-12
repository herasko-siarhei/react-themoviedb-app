import React, {FC, Fragment} from 'react';

import {myListSortingList} from 'configs/sorting';
import {useFilter} from 'hooks/useFilter';

import Filter from 'components/Filter';

const MyList: FC = () => {
    const {filter, setSorting} = useFilter();
    return (
        <Fragment>
            <Filter
                sorting={{
                    sortingList: myListSortingList,
                    activeSortingValue: filter.sorting,
                    onClick: setSorting
                }}
            />
        </Fragment>
    );
};

export default MyList;