import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyD4aPs8aJurPIj2jt52GHpqY-OfhafLITo',
    authDomain: 'react-themoviedb-app.firebaseapp.com',
    projectId: 'react-themoviedb-app',
    storageBucket: 'react-themoviedb-app.appspot.com',
    messagingSenderId: '854339710075',
    appId: '1:854339710075:web:523dbfd415d6f587b606de'
};

const app = initializeApp(firebaseConfig);

export const firebase = {auth: getAuth(app), firestore: getFirestore(app)};