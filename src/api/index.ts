import {GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, User} from 'firebase/auth';

import {firebase} from 'configs/firebase';

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
    database: {}
};

export default api;