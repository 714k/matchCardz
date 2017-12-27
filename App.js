/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import LoginScreen from './app/screens/LoginScreen';

export default class App extends React.Component {
  render() {
    return (
      <LoginScreen />
    );
  }
}