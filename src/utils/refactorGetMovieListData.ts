import {RoutePath} from 'configs/route';
import {GetMovieList} from 'types/tmdb';
import {Card} from 'types/card';

export function refactorGetMovieListData(data: GetMovieList): { list: Card[], total: number } {
    // @ts-ignore
    const list: Card[] = data.results ? data.results.filter(i => i.id && (i.title || i.original_title)).map(i => ({
        path: `${RoutePath.MovieDetails}/${i.id}`,
        title: i.title || i.original_title,
        poster: i.poster_path ? `https://image.tmdb.org/t/p/w500${i.poster_path}` : null
    })) : [];
    const total: number = data.total_pages ? (data.total_pages <= 500 ? data.total_pages : 500) : 0;
    return {list, total};
}