// Import createStore and applyMiddleware
import { createStore, applyMiddleware, compose } from 'redux';
// Import thunk
import thunk from 'redux-thunk';
// Import root reducer
import rootReducer from '../reducers';
import createHistory from "history/createBrowserHistory";


const initialState = {};
const history = createHistory();

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;



// import reducers from "./reducers"; // Or wherever you keep your reducers

// // Create a history of your choosing (we're using a browser history in this case)

// // Build the middleware for intercepting and dispatching navigation actions
// const middleware = routerMiddleware(history);

// // Add the reducer to your store on the `router` key
// // Also apply our middleware for navigating
// const store = createStore(
//   combineReducers({
//     ...reducers,
//     router: routerReducer
//   }),
//   applyMiddleware(middleware)
// );