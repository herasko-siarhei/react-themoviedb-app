import {RoutePath} from 'configs/route';
import {GetMyList} from 'types/firebase';
import {Card} from 'types/card';

export function refactorGetMyListData(data: GetMyList): { list: Card[], total: number } {
    const list: Card[] = data.map(i => ({
        path: i.type === 'movie' ? `${RoutePath.MovieDetails}/${i.id}` : `${RoutePath.TVDetails}/${i.id}`,
        title: i.title,
        poster: i.poster
    }));
    const total: number = 0;
    return {list, total};
}