import React from 'react';
import {Layout, Text, Button} from '@ui-kitten/components';
import {logoutUser} from '../../api/auth-api';

const Primary = ({navigation}) => (
  <Layout
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text category="h1">HOME</Text>
    <Button onPress={() => logoutUser()}>Logout</Button>
  </Layout>
);

export default Primary;
