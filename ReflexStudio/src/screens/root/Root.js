import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Layout, Text, Button, Icon} from '@ui-kitten/components';

import {
  LogoutButton,
  SettingsButton,
  HomeScreenButton,
} from '../../components/Icons/Icons';

import Logo from '../../components/Logo';
import PodCard from '../../components/PodCard.js';

const Root = ({navigation}) => (
  <Layout style={styles.container}>
    <Layout style={styles.buttonGroup}>
      <LogoutButton />
      <SettingsButton />
    </Layout>
    <Layout
      style={{
        flex: 1,
        backgroundColor: null,
        marginVertical: 15,
        alignSelf: 'center',
      }}>
      <Logo height={'150'} />
    </Layout>

    <Layout
      style={{
        flex: 4,
        backgroundColor: null,
      }}>
      <PodCard
        borderWidth={7}
        radius={30}
        bgColor={null}
        content={
          <>
            <HomeScreenButton
              alertCount={0}
              title="/Podcast"
              press={() => navigation.navigate('Podcast')}
            />
            <HomeScreenButton
              alertCount={4}
              title="/Shop"
              press={() => navigation.navigate('Shop')}
            />
            <HomeScreenButton
              alertCount={0}
              title="/Blog"
              press={() => console.log('unlinked homePage button')}
            />
            <HomeScreenButton
              alertCount={15}
              title="/Network"
              press={() => console.log('unlinked homePage button')}
            />
          </>
        }
      />
    </Layout>
  </Layout>
);

export default Root;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A0A1B5',
  },
  layout: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: null,
  },
  buttonGroup: {
    backgroundColor: null,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
