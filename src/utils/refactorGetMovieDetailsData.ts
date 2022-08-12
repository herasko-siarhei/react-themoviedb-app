import {GetMovieDetails} from 'types/tmdb';
import {MovieDetails} from 'types/movie';

export function refactorGetMovieDetailsData(data: GetMovieDetails | null): MovieDetails | null {
    if (data && data.id && (data.title || data.original_title)) {
        const genres = data?.genres?.filter(i => i.id && i.name);
        return {
            id: data.id,
            //@ts-ignore
            title: data.title || data.original_title,
            poster: data.poster_path ? `https://image.tmdb.org/t/p/w500${data.poster_path}` : null,
            overview: data.overview || null,
            date: data.release_date ? data.release_date.substr(0, 4) : null,
            rating: data.vote_average || null,
            //@ts-ignore
            genres: genres?.length ? genres.map(i => ({label: i.name, value: i.id})) : null,
            runtime: data.runtime ? `${data.runtime}m` : null
        };
    } else {
        return null;
    }
}