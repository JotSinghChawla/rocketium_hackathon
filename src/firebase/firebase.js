import { config } from "./config";
import firebase from '@firebase/app';
import '@firebase/firestore';

firebase.initializeApp(config);

export const firestore = firebase.firestore();

export const firebasestore = firebase.firestore;            
