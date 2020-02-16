import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Layout, Text, Button, Icon, Card} from '@ui-kitten/components';

import {logoutUser} from '../../../api/auth-api';
import {CartButton, LogoutButton} from '../Icons/Icons';

import Logo from '../Icons/Logo';

export default Main = ({navigation}) => {
  const [cart, setCart] = useState(false);

  return (
    <Layout style={styles.cont}>
      <Layout style={styles.buttonGroup}>
        <LogoutButton />
        <CartButton cart={cart} />
      </Layout>
      <Layout style={styles.logo}>
        <Logo height={'5'} width={'10'} />
      </Layout>
      <Layout style={{flex: 3, margin: 10}}>
        <Card style={{flex: 1}}>
          <Text>
            The Maldives, officially the Republic of Maldives, is a small
            country in South Asia, located in the Arabian Sea of the Indian
            Ocean. It lies southwest of Sri Lanka and India, about 1,000
            kilometres (620 mi) from the Asian continent
          </Text>
        </Card>
        <Card style={{flex: 1}}></Card>
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  cont: {
    backgroundColor: 'silver',
    flex: 1,
    flexDirection: 'column',
  },
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
