import React, {Component, memo} from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

// Components

//screens
import Main from './screens/Main';

const Dome = () => {
  return <View style={{backgroundColor: 'red'}}></View>;
};

const Tab = createMaterialTopTabNavigator();

export default class RootReflexNav extends Component {
  render() {
    const navigation = this.props;

    return (
      <NavigationContainer independent={true} initialRouteName="Main">
        <Tab.Navigator>
          <Tab.Screen name="Main" component={Main} />
          <Tab.Screen name="Dome" component={Dome} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
