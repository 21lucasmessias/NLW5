import React from 'react';
import { StatusBar } from 'react-native';
import Welcome from './src/pages/Welcome';

const App = () => {
  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor='#ffffff'/>
      <Welcome/>
    </>
  );
};

export default App;
