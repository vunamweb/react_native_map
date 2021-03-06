/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment, Component } from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './app/navigation/Home';
import ShowNear from './app/navigation/ShowNear';

import './app/config/config';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
  },
  },
  ShowNear: {
    screen: ShowNear,
  },
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return (
       <AppContainer/>
    )
  }
}
