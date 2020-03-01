import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Layout, Text, Button} from '@ui-kitten/components';

import Logo from '../../components/Logo.js';
import PodCard from '../../components/PodCard.js';

import {logoutUser} from '../../api/auth-api';
import {
  BackHomeButton,
  LikeButton,
  FavButton,
  DownloadButton,
} from '../../components/Icons/Icons';

import PlayerControls from './components/PlayerControls';

export default Podcast = ({navigation}) => {
  let social = false;
  return (
    <View style={{flex: 1, backgroundColor: '#A0A1B5'}}>
      <Layout style={styles.goback}>
        <BackHomeButton navigation={navigation} />
      </Layout>
      <Layout style={styles.logo}>
        <Logo height={'130'} />
      </Layout>

      <Layout style={{flex: 1, backgroundColor: null}}>
        <PodCard
          borderWidth={5}
          radius={30}
          bgColor={'white'}
          content={
            <>
              <Text
                category="h3"
                style={{
                  fontWeight: '700',
                  color: 'black',
                }}>
                /Podcast/Reflex/Latest
              </Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <Button appearance="ghost">Latest</Button>
                <Button status="basic" appearance="ghost">
                  Favourites
                </Button>
                <Button status="basic" appearance="ghost">
                  Latest
                </Button>
                <Button status="basic" appearance="ghost">
                  Downloaded
                </Button>
              </View>
            </>
          }
        />
      </Layout>

      <Layout
        style={{
          flex: 2,
          backgroundColor: null,
          marginTop: '-5%',
        }}>
        <PodCard
          borderWidth={7}
          radius={30}
          bgColor={'white'}
          content={
            <Layout
              style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor: null,
                justifyContent: 'space-between',
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text category="h3" style={{fontWeight: 'bold'}}>
                  Episode Title
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <LikeButton />
                  <FavButton />
                </View>
              </View>

              <View>
                <Text category="h5">
                  Description: Lorem ipsum dolor sit amet, consectetur … … … ...{' '}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <DownloadButton />

                <Text category="h4" style={{fontWeight: 'bold'}}>
                  Ep. 5
                </Text>
              </View>
            </Layout>
          }
        />
      </Layout>

      <Layout
        style={{
          flex: 1,
          backgroundColor: null,
        }}>
        <PlayerControls />
      </Layout>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    backgroundColor: '#A0A1B5',
    flex: 1,
    flexDirection: 'column',
  },
  goback: {
    backgroundColor: null,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  logo: {
    flex: 1,
    backgroundColor: null,
    marginVertical: 15,
    alignSelf: 'center',
  },
  date: {
    fontSize: 15,
    marginRight: 50,
    left: 15,
    marginBottom: 100,
  },
  id: {
    fontWeight: 'bold',
    fontSize: 17,
    position: 'absolute',
    top: 3,
    left: 230,
  },
  description: {
    fontSize: 18,
    padding: 10,
    textAlign: 'center',
    alignSelf: 'center',
  },
  content: {
    margin: 15,
    borderStyle: 'solid',
    borderRadius: 30,
    borderWidth: 5,
    padding: 10,
    width: 300,
    backgroundColor: '#799688',
  },
  newContent: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleHome: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'auto',
    marginRight: 40,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
