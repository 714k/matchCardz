import React, { Component } from 'react';

import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";

import Sidebar from "../components/sidebar/Sidebar";
import { DrawerNavigator } from "react-navigation";

const HomeScreenRouter = DrawerNavigator(
  {
    Login: {
      screen: LoginScreen
    },
    Home: {
      screen: HomeScreen
    },
    Settings: {
      screen: SettingsScreen
    }
  },

  {
    initialRouteName: "Login",
    contentComponent: props => <Sidebar navigation={'navigation'} />
  }
);

export default HomeScreenRouter;