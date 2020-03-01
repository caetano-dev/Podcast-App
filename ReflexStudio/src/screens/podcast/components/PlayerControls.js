import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Icon, Text, Layout} from '@ui-kitten/components';

export default class PlayerControls extends Component {
  render() {
    return (
      <Layout
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          backgroundColor: null,
          margin: 20,
          alignItems: 'center',
        }}>
        <View>
          <Icon name="arrow-left-outline" style={{height: 85, width: 85}} />
        </View>
        <View>
          <Icon
            name="play-circle-outline"
            style={{
              height: 85,
              width: 85,
            }}
          />
        </View>
        <View>
          <Icon name="arrow-right-outline" style={{height: 85, width: 85}} />
        </View>
      </Layout>
    );
  }
}
