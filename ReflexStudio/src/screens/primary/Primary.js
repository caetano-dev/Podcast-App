import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Layout, Text, Button} from '@ui-kitten/components';
import {logoutUser} from '../../api/auth-api';

const Primary = ({navigation}) => (
  <Layout style={styles.container}>
    <Text category="h1">Root</Text>
    <Layout style={styles.layout}>
      <Button onPress={() => console.log('Reflex')}>Reflex</Button>
      <Button onPress={() => console.log('Podcast')}>Podcast</Button>
      <Button onPress={() => logoutUser()}>Logout</Button>
    </Layout>
  </Layout>
);

export default Primary;

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
