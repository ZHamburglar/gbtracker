import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store/store';


import createHistory from "history/createBrowserHistory";
import { Route } from "react-router";
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
  push
} from "react-router-redux";



import NavBar from './components/Navbar';

import Home from './pages/Home.js';
import StorePage from './pages/StorePage';

const history = createHistory();


ReactDOM.render(
  <Provider store={store}>
    {/* ConnectedRouter will use the store from Provider automatically */}
    <ConnectedRouter history={history}>
    <div>
        <div>
          <NavBar/>
        </div>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/store" component={StorePage} />
        </div>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
