import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Layout, Text, Button} from '@ui-kitten/components';
import {logoutUser} from '../../api/auth-api';

const Root = ({navigation}) => (
  <Layout style={styles.container}>
    <Text category="h1">Root</Text>
    <Layout style={styles.layout}>
      <Button onPress={() => navigation.navigate('Reflex')}>Reflex</Button>
      <Button onPress={() => navigation.navigate('Podcast')}>Podcast</Button>
      <Button onPress={() => logoutUser()}>Logout</Button>
    </Layout>
  </Layout>
);

export default Root;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layout: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
