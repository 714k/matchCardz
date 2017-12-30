/**
 * matchCardz App
 * https://github.com/VictorZamudio/matchCardz
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  Text,
  View
} from 'react-native';

import {
  Container,
  StyleProvider
} from "native-base";
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';

import HeaderApp from "./app/components/header/HeaderApp";
import MainScreen from './app/screens/MainScreen/MainScreen';

export default class App extends React.Component {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Container>
          <HeaderApp />
          <MainScreen />
        </Container>
      </StyleProvider>
    );
  }
}