import React, { Component, memo } from "react";
import { View, StyleSheet } from "react-native";
import "./fixtimerbug.js";

//Navigation
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Style
import {
  ApplicationProvider,
  Button,
  Icon,
  IconRegistry,
  Layout,
  Text,
} from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { mapping, light as theme } from "@eva-design/eva";

//Components
import {
  RootReflexNav,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  AuthLoadingScreen,
  ArchivePlayer,
  OnBoard,
  Root,
  Podcast,
  Previous,
  Shop,
  Blog,
} from "./src/screens";

//Methods
import {
  logoutUser,
  signInUser,
  loginUser,
  sendEmailWithPassword,
} from "./src/auth/auth-api";
import Core from "./Core";

import { AppProvider } from "./src/context";
import { decode, encode } from "base-64";

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

class App extends React.Component {
  render() {
    return (
      <AppProvider>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider mapping={mapping} theme={theme}>
          <NavigationContainer>
            <Core />
          </NavigationContainer>
        </ApplicationProvider>
      </AppProvider>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    textAlign: "center",
  },
  podcast: {},
  reflex: {},
});
