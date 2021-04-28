                                    // These are the Reducer functions
import * as ActionTypes from './ActionTypes'

export const Birds = (state = {
    isLoading: true,
    errorMessage: null,
    birds: []  
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_BIRDS:
            return { ...state, isLoading: false, errorMessage: null, birds: action.payload }
            
        case ActionTypes.BIRDS_LOADING:
            return { ...state, isLoading: true, errorMessage: null, birds: [] }

        case ActionTypes.BIRDS_FAILED:
            return { ...state, isLoading: false, errorMessage: action.payload, birds: [] }
        default:
            return state
    }
}