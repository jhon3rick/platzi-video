import React from 'react';
import { render } from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Map as map } from 'immutable';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

import reducer from '../reducer/index';

// import data from '../api.json';
// import data from '../schemas/index';

// components
import Home from '../pages/containers/home';

// const initialState = {
//   data: {
// 		entities: data.entities,
// 		categories: data.result.categories,
// 		search: []
// 	},
// 	modal:{
// 		visibility: false,
// 		mediaId: null
// 	}
// }

// new middleware
// v1
// function logger({getState, dispatch}) {
//   return (next) => {                // metodo para despachar el siguiente middleware
//     return (action) => {
//       console.log('logger action', action)
//       const value = next(action);
//       console.log('new state', store.getState().toJS());
//       return value
//     }
//   }
// }

// const logger = ({getState, dispatch}) => next => action => {
//   console.log('logger action', action)
//   const value = next(action);
//   console.log('new state', store.getState().toJS());
//   return value
// }

const store = createStore(
  reducer,
  map({}),
  // initialState,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // applyMiddleware(logger)
  composeWithDevTools(
    applyMiddleware(
      logger,
      thunk
    )
  )
);

const homeContainer = document.getElementById('home-container');
render(
	<Provider store={store}>
		<Home/>
	</Provider>
, homeContainer);