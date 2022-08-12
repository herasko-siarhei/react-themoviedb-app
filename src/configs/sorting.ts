import {HistoryOutlined, PlaylistAddOutlined, StarBorderOutlined} from '@mui/icons-material';

import {MyListSorting, Sorting} from 'types/sorting';

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

export const myListSortingList: MyListSorting[] = [
    {label: 'Favorites', value: 'favorites', icon: StarBorderOutlined},
    {label: 'Want To Watch', value: 'want_to_watch', icon: PlaylistAddOutlined},
    {label: 'Watched', value: 'watched', icon: HistoryOutlined}
];