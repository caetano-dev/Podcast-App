import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Layout, Text, Icon, Button} from '@ui-kitten/components';

// Components

//screens
import Main from './screens/Main';

const AboutUs = () => {
  return <Layout style={{backgroundColor: 'silver', flex: 1}}></Layout>;
};

const Blog = () => {
  return <Layout style={{backgroundColor: 'silver', flex: 1}}></Layout>;
};

const Feed = () => {
  return <Layout style={{backgroundColor: 'silver', flex: 1}}></Layout>;
};

const Tab = createMaterialBottomTabNavigator();

export default class RootReflexNav extends Component {
  render() {
    const navigation = this.props;

    return (
      <NavigationContainer independent={true}>
        <Tab.Navigator
          initialRouteName="Main"
          activeColor="black"
          barStyle={{
            backgroundColor: 'silver',
            marginTop: -5,
          }}>
          {/* <Tab.Screen name="Blog" component={Blog} /> */}
          <Tab.Screen name="Main" component={Main} />
          <Tab.Screen name="Feed" component={Feed} />
          {/* <Tab.Screen name="About Us" component={AboutUs} /> */}
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
