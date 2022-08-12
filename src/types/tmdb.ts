export type GetGenreList = {
    genres?: {
        id?: number;
        name?: string;
    }[]
}

export type GetMovieList = {
    page?: number;
    results?: {
        adult?: boolean;
        backdrop_path?: string;
        genre_ids?: number[];
        id?: number;
        original_language?: string;
        original_title?: string;
        overview?: string;
        popularity?: number;
        poster_path?: string;
        release_date?: string;
        title?: string;
        video?: boolean;
        vote_average?: number;
        vote_count?: number;
    }[];
    total_results?: number;
    total_pages?: number;
}

export type GetTVList = {
    page?: number;
    results?: {
        backdrop_path?: string;
        first_air_date?: string;
        genre_ids?: number[];
        id?: number;
        name?: string;
        origin_country?: string[];
        original_language?: string;
        original_name?: string;
        overview?: string;
        popularity?: number;
        poster_path?: string;
        vote_average?: number;
        vote_count?: number;
    }[];
    total_results?: number;
    total_pages?: number;
}