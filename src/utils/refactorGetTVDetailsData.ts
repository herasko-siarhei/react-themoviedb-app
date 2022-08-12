import {GetTVDetails} from 'types/tmdb';
import {TVDetails} from 'types/tv';

export function refactorGetTVDetailsData(data: GetTVDetails | null): TVDetails | null {
    if (data && data.id && (data.name || data.original_name)) {
        const genres = data?.genres?.filter(i => i.id && i.name);
        return {
            id: data.id,
            //@ts-ignore
            title: data.name || data.original_name,
            poster: data.poster_path ? `https://image.tmdb.org/t/p/w500${data.poster_path}` : null,
            overview: data.overview || null,
            first_date: data.first_air_date ? data.first_air_date.substr(0, 4) : null,
            last_date: data.last_air_date ? data.last_air_date.substr(0, 4) : null,
            rating: data.vote_average || null,
            //@ts-ignore
            genres: genres?.length ? genres.map(i => ({label: i.name, value: i.id})) : null,
            runtime: data.episode_run_time?.length ? data.episode_run_time.map(i => `${i}m`) : null
        };
    } else {
        return null;
    }
}