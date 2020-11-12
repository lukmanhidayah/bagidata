import React from 'react';
import RootNavigator from './src/navigation/RootNavigator';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

//my store
import { store, persistor } from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RootNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
