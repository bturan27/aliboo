import { compose, createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';

import {persist, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { rootReducer } from './root-reducer';

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }
  next(action);

};

const persistConfig ={
  key: 'root',
  storage,
  blacklist : ['user']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleWares = [loggerMiddleware];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);\

export const persistor = persistStore(store)