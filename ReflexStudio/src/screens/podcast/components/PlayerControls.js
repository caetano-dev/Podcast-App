import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Icon, Text, Layout } from "@ui-kitten/components";

export default class PlayerControls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playButton: false,
      pauseButtonClicked: false,
      nextTrackClicked: false,
      prevTrackClicked: false
    };
  }
  render() {
    const {
      playButton,
      pauseButtonClicked,
      nextTrackClicked,
      prevTrackClicked
    } = this.state;

    const { size, margins } = this.props;
    return (
      <Layout
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-evenly",
          backgroundColor: null,
          margin: margins,
          alignItems: "center"
        }}
      >
        <View>
          {prevTrackClicked ? (
            <Icon
              name="arrow-left"
              style={{ height: size, width: size }}
              onPress={() =>
                this.setState({ prevTrackClicked: !prevTrackClicked })
              }
            />
          ) : (
            <Icon
              name="arrow-left-outline"
              style={{ height: size, width: size }}
              onPress={() =>
                this.setState({ prevTrackClicked: !prevTrackClicked })
              }
            />
          )}
        </View>
        {playButton ? (
          <View>
            <Icon
              name="stop-circle"
              onPress={() => this.setState({ playButton: !playButton })}
              style={{ height: size, width: size }}
            />
          </View>
        ) : null}
        <View>
          {playButton ? (
            pauseButtonClicked ? (
              <Icon
                name="play-circle"
                onPress={() =>
                  this.setState({ pauseButtonClicked: !pauseButtonClicked })
                }
                style={{
                  height: size,
                  width: size
                }}
              />
            ) : (
              <Icon
                name="pause-circle"
                onPress={() =>
                  this.setState({ pauseButtonClicked: !pauseButtonClicked })
                }
                style={{
                  height: size,
                  width: size
                }}
              />
            )
          ) : (
            <Icon
              name="play-circle-outline"
              onPress={() => this.setState({ playButton: !playButton })}
              style={{
                height: size,
                width: size
              }}
            />
          )}
        </View>
        <View>
          {nextTrackClicked ? (
            <Icon
              name="arrow-right"
              style={{ height: size, width: size }}
              onPress={() =>
                this.setState({ nextTrackClicked: !nextTrackClicked })
              }
            />
          ) : (
            <Icon
              name="arrow-right-outline"
              style={{ height: size, width: size }}
              onPress={() =>
                this.setState({ nextTrackClicked: !nextTrackClicked })
              }
            />
          )}
        </View>
      </Layout>
    );
  }
}
