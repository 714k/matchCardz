/**
 * matchCardz App
 * https://github.com/VictorZamudio/matchCardz
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MainScreen from './app/screens/MainScreen/MainScreen';

export default class App extends React.Component {
  render() {
    return (
      <MainScreen />
    );
  }
}