// import React from 'react'
// import { render } from 'react-dom'
// import { Provider } from 'react-redux'
// import { ConnectedRouter } from 'connected-react-router';
// import store, { history } from './store';
// import App from './App'
// require('dotenv').config()


// const target = document.querySelector('#root')

// console.log("this is the index then", process.env, "store", store.getState())

// render(
//   <Provider store={store}>
//     <ConnectedRouter history={history}>
//       <div>
//         <App />
//       </div>
//     </ConnectedRouter>
//   </Provider>,
//   target
// )

import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import { store, history } from './store';
import Root from './Root';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Root store={store} history={history} />, 
  document.getElementById('root')
);
