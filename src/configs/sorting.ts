import {Sorting} from 'types/sorting';

export const movieListSortingList: Sorting[] = [
    {label: 'Popular', value: 'popular'},
    {label: 'Top Rated', value: 'top_rated'},
    {label: 'Now Playing', value: 'now_playing'},
    {label: 'Upcoming', value: 'upcoming'}
];

export const tvListSortingList: Sorting[] = [
    {label: 'Popular', value: 'popular'},
    {label: 'Top Rated', value: 'top_rated'},
    {label: 'Airing Today', value: 'airing_today'},
    {label: 'On The Air', value: 'on_the_air'}
];

export const myListSortingList: Sorting[] = [
    {label: 'Favorites', value: 'favorites'},
    {label: 'Want To Watch', value: 'want_to_watch'},
    {label: 'Watched', value: 'watched'}
];