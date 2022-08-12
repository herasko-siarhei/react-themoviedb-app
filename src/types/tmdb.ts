export type GetGenreList = {
    genres?: {
        id?: number;
        name?: string;
    }[]
}

export type GetMovieDetails = {
    adult?: boolean;
    backdrop_path?: string;
    belongs_to_collection?: {
        backdrop_path?: string;
        id?: number;
        name?: string;
        poster_path?: string;
    };
    budget?: number;
    genres?: {
        id?: number;
        name?: string;
    }[];
    homepage?: string;
    id?: number;
    imdb_id?: string;
    original_language?: string;
    original_title?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    production_companies?: {
        name?: string;
        id?: number;
        logo_path?: string;
        origin_country?: string;
    }[];
    production_countries?: {
        iso_3166_1?: string;
        name?: string;
    }[];
    release_date?: string;
    revenue?: number;
    runtime?: number;
    spoken_languages?: {
        english_name?: string;
        iso_639_1?: string;
        name?: string;
    }[];
    status?: string;
    tagline?: string;
    title?: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
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

export type GetTVDetails = {
    adult?: boolean;
    backdrop_path?: string;
    created_by?: {
        credit_id?: string;
        gender?: number;
        id?: number;
        name?: string;
        profile_path?: string;
    }[];
    episode_run_time?: number[];
    first_air_date?: string;
    genres?: {
        id?: number;
        name?: string;
    }[];
    homepage?: string;
    id?: number;
    in_production?: boolean;
    languages?: string[];
    last_air_date?: string;
    last_episode_to_air?: {
        air_date?: string;
        episode_number?: number;
        id?: number;
        name?: string;
        overview?: string;
        production_code?: string;
        runtime?: number;
        season_number?: number;
        still_path?: string;
        vote_average?: number;
        vote_count?: number;
    };
    name?: string;
    networks?: {
        id?: number;
        logo_path?: string;
        name?: string;
        origin_country?: string;
    }[];
    next_episode_to_air?: {
        air_date?: string;
        episode_number?: number;
        id?: number;
        name?: string;
        overview?: string;
        production_code?: string;
        runtime?: number;
        season_number?: number;
        still_path?: string;
        vote_average?: number;
        vote_count?: number;
    };
    number_of_episodes?: number;
    number_of_seasons?: number;
    origin_country?: string[];
    original_language?: string;
    original_name?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    production_companies?: {
        id?: number;
        logo_path?: string;
        name?: string;
        origin_country?: string;
    }[];
    production_countries?: {
        iso_3166_1?: string;
        name?: string;
    }[];
    seasons?: {
        air_date?: string;
        episode_count?: number;
        id?: number;
        name?: string;
        overview?: string;
        poster_path?: string;
        season_number?: number;
    }[];
    spoken_languages?: {
        english_name?: string;
        iso_639_1?: string;
        name?: string;
    }[];
    status?: string;
    tagline?: string;
    type?: string;
    vote_average?: number;
    vote_count?: number;
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