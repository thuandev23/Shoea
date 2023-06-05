import React from 'react';
import IndexComponent from './src/navigation/navigation';
import {Provider} from 'react-redux';
import store from './src/screen/store/store';
const App = () => {
  return (
    <Provider store={store}>
      <IndexComponent />
    </Provider>
  );
};

export default App;
