import React from 'react';
import {ApplicationProvider, Layout, Text} from '@ui-kitten/components';
import {mapping, light as lightTheme} from '@eva-design/eva';

import './fixtimerbug.js';

import {AuthLoadingScreen} from './src/screens';

// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// const RootStack = createStackNavigator(
//   {
//     HomeScreen,
//     LoginScreen,
//     RegisterScreen,
//     ForgotPasswordScreen,
//     AuthLoadingScreen,
//     Dashboard,
//     Previous,
//     ArchivePlayer,
//   },
//   {
//     initialRouteName: 'AuthLoadingScreen',
//     defaultNavigationOptions: {
//       header: null,
//     },
//   },
// );

// const AppContainer = createAppContainer(RootStack);
const Stack = createStackNavigator();

const App = () => (
  <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName={AuthLoadingScreen}>
        <ApplicationProvider mapping={mapping} theme={lightTheme}>
          <Stack.Screen
            name="AuthLoadingScreen"
            component={AuthLoadingScreen}
          />
        </ApplicationProvider>
      </Stack.Navigator>
    </NavigationContainer>
  </>
);

export default App;
