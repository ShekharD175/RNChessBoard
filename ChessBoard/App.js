/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {store} from './source/reduxSetup/configStore';
import ChessContainer from './source/containers/chessContainer';
import {Provider} from "react-redux";

const App = () => {
  console.log("STORE:",store);
  return (
    <Provider store={store}>
      <ChessContainer />
    </Provider>
  );
};

export default App;
