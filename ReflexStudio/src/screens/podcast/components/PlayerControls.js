import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Icon, Text, Layout} from '@ui-kitten/components';

export default class PlayerControls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playButton: false,
      pauseButtonClicked: false,
    };
  }
  render() {
    const {playButton, pauseButtonClicked} = this.state;
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
        {playButton ? (
          <View>
            <Icon
              name="stop-circle"
              onPress={() => this.setState({playButton: !playButton})}
              style={{height: 85, width: 85}}
            />
          </View>
        ) : null}
        <View>
          {playButton ? (
            pauseButtonClicked ? (
              <Icon
                name="play-circle"
                onPress={() =>
                  this.setState({pauseButtonClicked: !pauseButtonClicked})
                }
                style={{
                  height: 85,
                  width: 85,
                }}
              />
            ) : (
              <Icon
                name="pause-circle"
                onPress={() =>
                  this.setState({pauseButtonClicked: !pauseButtonClicked})
                }
                style={{
                  height: 85,
                  width: 85,
                }}
              />
            )
          ) : (
            <Icon
              name="play-circle-outline"
              onPress={() => this.setState({playButton: !playButton})}
              style={{
                height: 85,
                width: 85,
              }}
            />
          )}
        </View>
        <View>
          <Icon name="arrow-right-outline" style={{height: 85, width: 85}} />
        </View>
      </Layout>
    );
  }
}
