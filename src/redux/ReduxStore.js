import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { Birds } from './birds'

export const ReduxStore = () => {
     const store = createStore( 
          combineReducers({
               birdsState : Birds,
          }),
          composeWithDevTools(applyMiddleware(thunk))
      )
     return store;
}
