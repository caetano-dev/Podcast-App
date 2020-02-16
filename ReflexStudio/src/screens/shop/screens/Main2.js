import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Layout, Text, Button} from '@ui-kitten/components';

import Logo from '../../../components/LogoM';

import {logoutUser} from '../../../api/auth-api';

export default Main2 = ({navigation}) => {
  return (
    <Layout style={styles.cont}>
      <View style={{color: 'none', marginVertical: 15, alignSelf: 'center'}}>
        <Logo />
      </View>

      <View style={styles.buttonGroup}>
        <Button onPress={() => logoutUser()}>Logout</Button>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  cont: {
    backgroundColor: '#325F49',
    flex: 1,
    flexDirection: 'column',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
