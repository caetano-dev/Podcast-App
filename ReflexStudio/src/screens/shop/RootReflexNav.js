import React, {Component, memo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Layout, Text, Button} from '@ui-kitten/components';

// Components

//screens
import Main from './screens/Main';

const AboutUs = () => {
  return <Layout style={{backgroundColor: 'silver', flex: 1}}></Layout>;
};

const Blog = () => {
  return <Layout style={{backgroundColor: 'silver', flex: 1}}></Layout>;
};

const Tab = createMaterialBottomTabNavigator();

export default class RootReflexNav extends Component {
  render() {
    const navigation = this.props;

    return (
      <NavigationContainer independent={true} initialRouteName="Main">
        <Tab.Navigator>
          <Tab.Screen name="Main" component={Main} />
          <Tab.Screen name="Blog" component={Blog} />
          <Tab.Screen name="About Us" component={AboutUs} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
