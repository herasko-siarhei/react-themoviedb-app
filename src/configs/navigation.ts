import {RoutePath} from 'configs/route';
import {Navigation} from 'types/navigation';

export const navigationList: Navigation[] = [
    {label: 'Home', path: RoutePath.Home},
    {label: 'Movie List', path: RoutePath.MovieList},
    {label: 'TV List', path: RoutePath.TVList},
    {label: 'My List', path: RoutePath.MyList}
];