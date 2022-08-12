export type My = {
    type: 'movie' | 'tv';
    id: number;
    title: string;
    poster: string | null;
}

export type GetMyList = My[]