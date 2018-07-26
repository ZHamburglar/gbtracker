// import { createStore, applyMiddleware, compose } from 'redux';
// import { connectRouter, routerMiddleware } from 'connected-react-router';
// import thunk from 'redux-thunk';
// import createHistory from 'history/createBrowserHistory';
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
 
// import rootReducer from '../reducers';

// export const history = createHistory()

// const persistConfig = {
//   key: 'root',
//   storage,
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)


// const initialState = {}
// const enhancers = []
// const middleware = [
//   thunk,
//   routerMiddleware(history)
// ]

// if (process.env.NODE_ENV === 'development') {
//   const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

//   if (typeof devToolsExtension === 'function') {
//     enhancers.push(devToolsExtension())
//   }
// }

// const composedEnhancers = compose(
//   applyMiddleware(...middleware),
//   ...enhancers
// )

// const store = createStore(
//   connectRouter(history)(rootReducer),
//   initialState,
//   composedEnhancers
// )

// export default store
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
// import { createEpicMiddleware } from 'redux-observable';
import createHistory from 'history/createBrowserHistory';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { reducers } from '../reducers';
// import { epics } from './epics';

export const history = createHistory();

// const epicMiddleware = createEpicMiddleware(epics);

const persistConfig = {
	  key: 'root'
	, storage
};

export const store = createStore(
	  persistReducer(persistConfig, reducers)
	, {}
	, compose(applyMiddleware(thunk, routerMiddleware(history)))
);