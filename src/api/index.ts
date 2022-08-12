import {GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, User} from 'firebase/auth';

import {firebase} from 'configs/firebase';
import {tmdb} from 'configs/tmdb';
import {GetGenreList, GetMovieList, GetTVList} from 'types/tmdb';
import {Filter} from 'types/filter';

const api = {
    authentication: {
        initialization: () => new Promise<User | null>((res, rej) => {
            onAuthStateChanged(firebase.auth, response => res(response), error => rej(error))();
        }),
        login: () => new Promise<User>((res, rej) => {
            signInWithPopup(firebase.auth, new GoogleAuthProvider())
                .then(response => res(response.user))
                .catch(error => rej(error));
        }),
        logout: () => new Promise<void>((res, rej) => {
            signOut(firebase.auth)
                .then(() => res())
                .catch(error => rej(error));
        })
    },
    database: {
        getGenresList: (type: 'movie' | 'tv') => new Promise<GetGenreList>((res, rej) => {
            tmdb.get<GetGenreList>(`/genre/${type}/list`)
                .then(response => res(response.data))
                .catch(error => rej(error));
        }),
        getMovieList: (params: Filter) => new Promise<GetMovieList>((res, rej) => {
            tmdb.get<GetMovieList>(`/movie/${params.sorting}`, {
                params: {with_genres: params.genres.join(','), page: params.page}
            })
                .then(response => res(response.data))
                .catch(error => rej(error));
        }),
        getTVList: (params: Filter) => new Promise<GetTVList>((res, rej) => {
            tmdb.get<GetTVList>(`/tv/${params.sorting}`, {
                params: {with_genres: params.genres.join(','), page: params.page}
            })
                .then(response => res(response.data))
                .catch(error => rej(error));
        })
    }
};

export default api;