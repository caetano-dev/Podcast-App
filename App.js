import "./fixtimerbug";
import * as React from "react";

import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  AuthLoadingScreen,
  Dashboard,
  Previous,
  ArchivePlayer
} from "./src/screens";

// Navigation
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const RootStack = createStackNavigator(
  {
    HomeScreen,
    LoginScreen,
    RegisterScreen,
    ForgotPasswordScreen,
    AuthLoadingScreen,
    Dashboard,
    Previous,
    ArchivePlayer
  },
  {
    initialRouteName: "AuthLoadingScreen",
    defaultNavigationOptions: {
      header: null
    }
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
