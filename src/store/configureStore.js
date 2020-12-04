import { createStore, compose, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
export const history = createBrowserHistory();

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

const persistConfig = {
  key: 'kr-fe',
  whitelist: ['auth'],
  storage
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

function configureStoreProd(initialState) {
  const reactRouterMiddleware = routerMiddleware(history);
  const middlewares = [
    thunk,
    reactRouterMiddleware
  ];

  const store = createStore(
    persistedReducer,
    initialState,
    compose(applyMiddleware(...middlewares))
  );
  store.__persistor = persistStore(store);
  return store;
}

function configureStoreDev(initialState) {
  const reactRouterMiddleware = routerMiddleware(history);
  const middlewares = [
    // Add other middleware on this line...

    // Redux middleware that spits an error on you when
    // you try to mutate your state either inside a dispatch or between dispatches.
    reduxImmutableStateInvariant(),

    // thunk middleware can also accept an extra argument to be passed to each thunk action
    // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
    thunk,
    reactRouterMiddleware,
    // logger
  ];

  // add support for Redux dev tools
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    persistedReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );
  store.__persistor = persistStore(store);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default configureStore;
