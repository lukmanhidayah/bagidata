import { combineReducers } from 'redux';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

//reducers
import themeReducer from './reducers/themeReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['theme'],
};

const rootReducer = combineReducers({
  theme: themeReducer,
});

export default persistReducer(persistConfig, rootReducer);
