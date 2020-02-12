import React, {Component, Fragment, memo} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
} from 'react-native';
// import { Audio } from "expo-av";
import {Ionicons} from '@expo/vector-icons';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import Logo from '../components/LogoM';
import Icons from '../components/Icons';
import {logoutUser} from '../api/auth-api';

//firebase
import firebase from 'firebase';
import '@firebase/firestore';
import {initFirestorter, Collection} from 'firestorter';
import {observer} from 'mobx-react';

// init firestorter
initFirestorter({firebase: firebase});
const latestEP = new Collection('episodes');

const Dashboard = observer(
  class Dashboard extends Component {
    render() {
      latestEP.query = ref => ref.orderBy('id', 'desc').limit(1);
      const Data = observer(({doc}) => {
        return <DashboardItem doc={doc} />;
      });

      let social = false;

      return (
        <View style={styles.cont}>
          <View style={{marginVertical: 15, alignSelf: 'center'}}>
            <Logo />
          </View>

          {/* Buttons//////////////////////////////////////// */}
          <View style={styles.buttonGroup}>
            <Button
              color="#427389"
              title="Episode Archive"
              onPress={() => this.props.navigation.navigate('Previous')}
            />
            <Button
              color="green"
              title="Social"
              onPress={() => ` ${(social = !social)}`}
            />
            <Button color="black" title="Logout" onPress={() => logoutUser()} />
          </View>

          <View style={{margin: 10}}>
            {social ? <Icons social={social} /> : null}
          </View>

          {/*Content/////////////////////////////////////////// */}
          <View style={{flex: 3}}>
            {latestEP.docs.map(doc => (
              <Data key={doc.id} doc={doc} />
            ))}
          </View>
        </View>
      );
    }
  },
);

class DashboardItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      stopAvailable: false,
      playbackInstance: null,
      volume: 1.0,
      isBuffering: true,
    };
  }
  // async componentDidMount() {
  //   console.log(
  //     `Dashboard CDM running // Episode: ${this.props.doc.data.name}`
  //   );

  //   const { isPlaying, volume } = this.state;

  //   try {
  //     await Audio.setAudioModeAsync({
  //       allowsRecordingIOS: false,
  //       interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
  //       playsInSilentModeIOS: true,
  //       interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
  //       shouldDuckAndroid: true,
  //       staysActiveInBackground: true,
  //       playThroughEarpieceAndroid: false
  //     });
  //     const playbackInstance = new Audio.Sound();
  //     const source = {
  //       uri: this.props.doc.data.url
  //     };

  //     const status = {
  //       shouldPlay: isPlaying,
  //       volume: volume
  //     };

  //     playbackInstance.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate);
  //     await playbackInstance.loadAsync(source, status, false);
  //     this.setState({
  //       playbackInstance
  //     });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  onPlaybackStatusUpdate = status => {
    this.setState({
      isBuffering: status.isBuffering,
    });
  };

  handlePlayPause = async () => {
    const {isPlaying, playbackInstance, stopAvailable} = this.state;
    console.log(
      `handlePlayPause. isPlaying = ${isPlaying} playbackInstance = ${playbackInstance}`,
    );
    isPlaying
      ? await playbackInstance.pauseAsync()
      : await playbackInstance
          .playAsync()
          .then(this.setState({stopAvailable: true}));

    this.setState({
      isPlaying: !isPlaying,
    });
  };

  handleStop = async () => {
    const {isPlaying, stopAvailable, playbackInstance} = this.state;
    console.log(
      `handleStop. isPlaying = ${isPlaying}  playbackInstance = ${playbackInstance}`,
    );
    try {
      await playbackInstance.unloadAsync();
      this.setState({isPlaying: false, stopAvailable: false});
      this.componentDidMount();
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const {name, id, date, description} = this.props.doc.data;
    const {isPlaying, stopAvailable} = this.state;

    return (
      <Fragment>
        <View style={styles.newContent}>
          <Text h1 style={{fontSize: 35, fontWeight: 'bold'}}>
            Latest Episode
          </Text>
          <View style={styles.content}>
            <View>
              <View>
                <Text style={styles.titleHome}>{name}</Text>
                <Text style={styles.id}>EP. {id}</Text>
              </View>
            </View>
            {/**Word cap @ 240 characters */}
            <Text style={styles.description}>{description}</Text>
            <Text
              style={{
                fontSize: 15,
                alignSelf: 'baseline',
                fontWeight: 'bold',
              }}>
              {date}
            </Text>
          </View>
          <View style={styles.controls}>
            {stopAvailable ? (
              <TouchableWithoutFeedback onPress={() => this.handleStop()}>
                <MaterialCommunityIcons
                  name="stop-circle"
                  size={70}
                  color="black"
                />
              </TouchableWithoutFeedback>
            ) : null}

            <TouchableWithoutFeedback onPress={() => this.handlePlayPause()}>
              {isPlaying ? (
                <Ionicons name="ios-pause" size={70} color="black" />
              ) : (
                <Ionicons name="ios-play-circle" size={70} color="black" />
              )}
            </TouchableWithoutFeedback>
          </View>
        </View>
      </Fragment>
    );
  }
}

export default memo(Dashboard);

const styles = StyleSheet.create({
  cont: {
    backgroundColor: '#325F49',
    flex: 1,
    flexDirection: 'column',
  },
  logoBTN: {
    flex: 1,
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
