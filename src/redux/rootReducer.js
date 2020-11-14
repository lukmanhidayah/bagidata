import { combineReducers } from 'redux';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

//reducers
import themeReducer from './reducers/themeReducer';
import dogReducer from './reducers/dogReducer';
import likeReducer from './reducers/likeReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['theme', 'like'],
};

const rootReducer = combineReducers({
  theme: themeReducer,
  dogs: dogReducer,
  like: likeReducer,
});

export default persistReducer(persistConfig, rootReducer);
