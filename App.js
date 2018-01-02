/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  Navigator,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';

import store from "./app/store";
// import * as session from "./app/services/session";
import * as routeHistoryActions from "./app/services/routeHistory/actions";

import Main from './app/screens/';
import Login from './app/screens/LoginScreen';
import Register from './app/screens/RegisterScreen';
import Start from './app/screens/StartScreen';

const transition = Navigator.SceneConfigs.HorizontalSwipeJump;
transition.gestures = null;

const routeStack = [
  {
    name: 'Main',
    component: Main
  },
  {
    name: 'Login',
    component: Login
  },
  {
    name: 'Register',
    component: Register
  },
  {
    name: 'Start',
    component: Start
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      initialRoute: null,
    };
  }

  componentDidMount() {
    // Try autoload user state 
    const unsubscribe = store.subscribe(() => {
      if (store.getState().services.persist.isHydrated) {
        unsubscribe();
        this.autoLogin();
      }
    });
  }

  autoLogin() {
    this.setState({
      // could be login error screen
      initialRoute: routeStack[0]
    })
/*
    session.refreshToken()
    .then(() => {
      this.setState({
        initialRoute: routeStack[3]
      })
    })
    .catch(() => {
      this.setState({
        // could be login error screen
        initialRoute: routeStack[0]
      })
    })
 /**/
}

  renderContent() {
    if (!this.state.initialRoute) {
      // return <Splash />
      return (
        <View>
          <Text>...Loading</Text>
        </View>
      );
    }

    return (
      <Navigator
        initialRoute={this.state.initialRoute}
        initialRouteStack={routeStack}
        configureScene={() => Navigator.SceneConfigs.HorizontalSwipeJump}
        onWillFocus={route => store.dispatch(routeHistoryActions.push(route))}
        renderScene={(route, navigator) => 
          <route.component route={route} navigator={navigator} {...route.passProps} />
        }
      />
    );
  }

  render() {
    return (
      <View>
        <Provider
          store={store}>
          {this.renderContent()}
        </Provider>
      </View>
    );
  }
}

export default App;

