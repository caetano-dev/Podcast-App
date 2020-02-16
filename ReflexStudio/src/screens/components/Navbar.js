import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

export default function Navbar() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Dome" component={Dome} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const Home = () => {
  return <View style={{backgroundColor: 'green'}}></View>;
};

const Dome = () => {
  return <View style={{backgroundColor: 'red'}}></View>;
};
