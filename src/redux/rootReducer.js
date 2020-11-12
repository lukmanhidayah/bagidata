import { combineReducers } from 'redux';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

//reducers
import themeReducer from './reducers/themeReducer';
import dogReducer from './reducers/dogReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['theme'],
};

const rootReducer = combineReducers({
  theme: themeReducer,
  dogs: dogReducer,
});

export default persistReducer(persistConfig, rootReducer);
