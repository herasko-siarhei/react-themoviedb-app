import {movieListSortingList, myListSortingList, tvListSortingList} from 'configs/sorting';
import {Filter} from 'types/filter';

export const movieListDefaultFilter: Filter = {
    sorting: movieListSortingList[0].value,
    genres: [],
    page: 1
};

export const tvListDefaultFilter: Filter = {
    sorting: tvListSortingList[0].value,
    genres: [],
    page: 1
};

export const myListDefaultFilter: Filter = {
    sorting: myListSortingList[0].value,
    genres: [],
    page: 1
};