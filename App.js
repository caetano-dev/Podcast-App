import * as React from "react";

<<<<<<< HEAD
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MainScreen />
      </View>
    );
=======
//might use later
//import { Dimensions } from "react-native";
//const screenWidth = Dimensions.get("window").width;

import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  AuthLoadingScreen,
  Dashboard,
  Previous
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
    Previous
  },
  {
    initialRouteName: "AuthLoadingScreen",
    defaultNavigationOptions: {
      header: null
    }
>>>>>>> media-func
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
