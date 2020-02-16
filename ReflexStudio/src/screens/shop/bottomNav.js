import React, {Component, memo} from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

// Components

//screens
import Main2 from './screens/Main2';

const Dome = () => {
  return <View style={{backgroundColor: 'red'}}></View>;
};

const Tab = createMaterialBottomTabNavigator();

export default class RootReflexNav extends Component {
  render() {
    const navigation = this.props;

    return (
      <NavigationContainer independent={true} initialRouteName="Main">
        <Tab.Navigator>
          <Tab.Screen name="Main" component={Main2} />
          <Tab.Screen name="Dome" component={Dome} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  cont: {
    backgroundColor: '#325F49',
    flex: 1,
    flexDirection: 'column',
  },
});
