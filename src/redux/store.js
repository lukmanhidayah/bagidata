import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';

//middleware
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';

//reducers
import rootReducer from './rootReducer';

const middleware = [logger, ReduxThunk];

//create store
export const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(...middleware),
);

export const persistor = persistStore(store);

export default { store, persistor };
