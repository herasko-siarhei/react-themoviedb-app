import {useCallback} from 'react';
import {useLocation} from 'react-router-dom';

import {RoutePath} from 'configs/route';
import {movieListDefaultFilter, myListDefaultFilter, tvListDefaultFilter} from 'configs/filter';
import {useQueryParam} from 'hooks/useQueryParam';
import {Sorting} from 'types/sorting';
import {Genre} from 'types/genre';

export function useFilter() {
    const {pathname} = useLocation();
    const [filter, setFilter] = useQueryParam('filter', (() => {
        switch (pathname) {
            case RoutePath.MovieList:
                return movieListDefaultFilter;
            case RoutePath.TVList:
                return tvListDefaultFilter;
            case RoutePath.MyList:
                return myListDefaultFilter;
            default:
                throw new Error('Filter not supported on this page.');
        }
    })());

    const setSorting = useCallback((newSortingValue: Sorting['value']) => {
        if (filter.sorting !== newSortingValue) {
            setFilter({
                sorting: newSortingValue,
                genres: [],
                page: 1
            });
        }
    }, [setFilter, filter.sorting]);

    const toggleGenre = useCallback((genreValue: Genre['value']) => {
        setFilter({
            sorting: filter.sorting,
            genres: filter.genres.includes(genreValue) ? filter.genres.filter(i => i !== genreValue) : [...filter.genres, genreValue],
            page: 1
        });
    }, [setFilter, filter.sorting, filter.genres]);

    const setPage = useCallback((newPage: number) => {
        if (filter.page !== newPage) {
            setFilter({
                sorting: filter.sorting,
                genres: filter.genres,
                page: newPage
            });
        }
    }, [setFilter, filter.sorting, filter.genres, filter.page]);

    return {filter, setFilter, setSorting, toggleGenre, setPage};
}