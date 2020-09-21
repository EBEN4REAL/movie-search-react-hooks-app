import {createStore, applyMiddleware} from 'redux';
// import logger from 'redux-logger';
import rootReducer from './rootReducer';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';

// export const middlewares = [logger];

// export const store = createStore(rootReducer, applyMiddleware(...middlewares))

const  createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore);

export const store = createStoreWithMiddleware(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

 

