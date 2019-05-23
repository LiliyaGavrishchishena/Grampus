import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// reducers
import usersReducer from '../redux/users/usersReducer';
import authReducer from '../redux/auth/authReducer';

const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: 'cart',
};
const sessionPersistConfig = {
  key: 'session',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  users: usersReducer,
  auth: persistReducer(sessionPersistConfig, authReducer),
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);
const middlewares = applyMiddleware(thunk);

const enhancer = composeWithDevTools(middlewares);

export const store = createStore(persistedReducer, enhancer);
export const persistor = persistStore(store);
