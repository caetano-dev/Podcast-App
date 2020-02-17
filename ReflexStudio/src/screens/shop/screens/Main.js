import React, {useState} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {
  Layout,
  Text,
  Button,
  Card,
  Icon,
  CardHeader,
} from '@ui-kitten/components';
import {SimpleCard} from '@paraboly/react-native-card';

import {logoutUser} from '../../../api/auth-api';
import {CartButton, LogoutButton, RootButton} from '../Icons/Icons';

import Logo from '../Icons/Logo';
import StoreList from '../components/StoreList';

export default Main = ({navigation}) => {
  const [cart, setCart] = useState(false);

  return (
    <Layout style={{flex: 1, backgroundColor: 'silver'}}>
      <Layout style={styles.buttonGroup}>
        <LogoutButton />
        <RootButton navigation={navigation} />
        <CartButton cart={cart} />
      </Layout>

      <Layout style={styles.logo}>
        <Logo height={'5'} width={'10'} />
      </Layout>

      <Layout style={{flex: 3, margin: 10, backgroundColor: null}}>
        <StoreList />
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  buttonGroup: {
    backgroundColor: null,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    flex: 1,
    backgroundColor: null,
    marginVertical: 15,
    alignSelf: 'center',
  },
});
