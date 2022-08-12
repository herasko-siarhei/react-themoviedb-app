import {Genre} from 'types/genre';

export type MovieDetails = {
    id: number;
    title: string;
    poster: string | null;
    overview: string | null;
    date: string | null;
    rating: number | null;
    genres: Genre[] | null;
    runtime: string | null;
}