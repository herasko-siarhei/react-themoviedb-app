import {RoutePath} from 'configs/route';
import {GetTVList} from 'types/tmdb';
import {Card} from 'types/card';

export function refactorGetTVListData(data: GetTVList): { list: Card[], total: number } {
    // @ts-ignore
    const list: Card[] = data.results ? data.results.filter(i => i.id && (i.name || i.original_name)).map(i => ({
        path: `${RoutePath.TVDetails}/${i.id}`,
        title: i.name || i.original_name,
        poster: i.poster_path ? `https://image.tmdb.org/t/p/w500${i.poster_path}` : null
    })) : [];
    const total: number = data.total_pages ? (data.total_pages <= 500 ? data.total_pages : 500) : 0;
    return {list, total};
}