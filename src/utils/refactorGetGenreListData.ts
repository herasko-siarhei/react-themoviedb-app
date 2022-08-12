import {GetGenreList} from 'types/tmdb';
import {Genre} from 'types/genre';

export function refactorGetGenreListData(data: GetGenreList | null): Genre[] {
    // @ts-ignore
    return data?.genres ? data.genres.filter(i => i.id && i.name).map(i => ({
        label: i.name,
        value: i.id
    })) : [];
}