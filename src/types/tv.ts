import {Genre} from 'types/genre';

export type TVDetails = {
    id: number;
    title: string;
    poster: string | null;
    overview: string | null;
    first_date: string | null;
    last_date: string | null;
    rating: number | null;
    genres: Genre[] | null;
    runtime: string[] | null;
}