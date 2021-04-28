import * as ActionTypes from './ActionTypes'
import { firestore, firebasestore } from '../firebase/firebase'

export const addBirds = (birds) => ({
    type: ActionTypes.ADD_BIRDS,
    payload: birds
})

export const birdsLoading = () => ({
    type: ActionTypes.BIRDS_LOADING
})

export const birdsFailed = (errorMessage) => ({
    type: ActionTypes.BIRDS_FAILED,
    payload: errorMessage
})

export const fetchBirds = () => (dispatch) => {
    dispatch(birdsLoading())

    return firestore.collection('birds').get()
        .then( querySnapshot => {
            let birds = [];
            querySnapshot.forEach( doc => {
                const data = doc.data();                    // Data and Id are separately received
                const _id = doc.id;
                birds.push({ _id, ...data });              // Adding {} is important to make it whole an object to work with Spread operator
            });
            return birds;
        })
        .then( birds => dispatch( addBirds(birds) ) )
        .catch( error => dispatch( birdsFailed(error.message) ) );
}
