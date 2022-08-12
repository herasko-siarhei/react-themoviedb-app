import {GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, User} from 'firebase/auth';
import {collection, deleteDoc, doc, getDoc, getDocs, orderBy, query, setDoc} from 'firebase/firestore';

import {firebase} from 'configs/firebase';
import {tmdb} from 'configs/tmdb';
import {GetGenreList, GetMovieDetails, GetMovieList, GetTVDetails, GetTVList} from 'types/tmdb';
import {GetMyList, My} from 'types/firebase';
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
        getMovieDetails: (id: number) => new Promise<GetMovieDetails>((res, rej) => {
            tmdb.get<GetMovieDetails>(`/movie/${id}`)
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
        getTVDetails: (id: number) => new Promise<GetTVDetails>((res, rej) => {
            tmdb.get<GetTVDetails>(`/tv/${id}`)
                .then(response => res(response.data))
                .catch(error => rej(error));
        }),
        getTVList: (params: Filter) => new Promise<GetTVList>((res, rej) => {
            tmdb.get<GetTVList>(`/tv/${params.sorting}`, {
                params: {with_genres: params.genres.join(','), page: params.page}
            })
                .then(response => res(response.data))
                .catch(error => rej(error));
        }),
        getMyList: (params: Filter) => new Promise<GetMyList>((res, rej) => {
            //@ts-ignore
            getDocs(query<My>(collection(firebase.firestore, 'UserList', firebase.auth.currentUser.uid, params.sorting), orderBy('added', 'desc')))
                .then(response => {
                    let data: GetMyList = [];
                    response.forEach(doc => data.push(doc.data()));
                    res(data);
                })
                .catch(error => rej(error));
        }),
        addMy: (sortingValue: string, item: My) => new Promise<void>((res, rej) => {
            // @ts-ignore
            setDoc(doc(firebase.firestore, 'UserList', firebase.auth.currentUser.uid, sortingValue, `${item.type}-${item.id}`), {
                ...item,
                added: Date.now()
            })
                .then(() => res())
                .catch(error => rej(error));
        }),
        deleteMy: (sortingValue: string, item: My) => new Promise<void>((res, rej) => {
            // @ts-ignore
            deleteDoc(doc(firebase.firestore, 'UserList', firebase.auth.currentUser.uid, sortingValue, `${item.type}-${item.id}`))
                .then(() => res())
                .catch(error => rej(error));
        }),
        checkMy: (sortingValues: string[], item: My) => new Promise<string[]>((res, rej) => {
            // @ts-ignore
            const promiseList = sortingValues.map(sorting => getDoc(doc(firebase.firestore, 'UserList', firebase.auth.currentUser.uid, sorting, `${item.type}-${item.id}`)));
            Promise.all(promiseList)
                .then(responseList => {
                    let data: string[] = [];
                    responseList.map((response, index) => response.exists() && data.push(sortingValues[index]));
                    res(data);
                })
                .catch(error => rej(error));
        })
    }
};

export default api;