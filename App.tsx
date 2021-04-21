import React, { Component } from 'react';

import Routes from './src/routes';

import SplashScreen from 'react-native-splash-screen';

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render(){
    return (
      <Routes/>
    );
  }
};
