import React, { Component, Fragment, memo } from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  Button,
  TouchableWithoutFeedback
} from "react-native";

import firebase from "firebase";
import "@firebase/firestore";
import { initFirestorter, Collection } from "firestorter";
import { observer } from "mobx-react";
import { ScrollView } from "react-native-gesture-handler";

const episodes = new Collection("episodes");

const Previous = observer(
  class Previous extends Component {
    render() {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: "#55765D",
            flexDirection: "column"
          }}
        >
          <View style={{ flex: 0.2, padding: 5, marginTop: 30 }}>
            <Button
              color="#427389"
              title="Go to Home"
              onPress={() => this.props.navigation.navigate("Dashboard")}
            />
          </View>

          <Text style={{ fontSize: 40, alignSelf: "center" }}>
            Previous Episodes
          </Text>

          <View style={styles.scrollCont}>
            <ScrollView>
              <View>
                {episodes.docs.reverse().map(doc => (
                  <EpisodeItem key={doc.id} doc={doc} />
                ))}
              </View>
            </ScrollView>
          </View>
        </View>
      );
    }
  }
);

const EpisodeItem = observer(({ doc }) => {
  const { name, id, date, url } = doc.data;
  //audio player from article audio = note
  handleAudio = async url => {
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync({ uri: url }, (downloadFirst = true));

      await soundObject.playAsync();
    } catch (error) {
      console.log(error);
    }
  };
  // figure out how to load the audio data
  // add seek element & download to local storage
  return (
    <View style={styles.prevEP}>
      <View style={styles.cont}>
        <View>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.id}>Ep.{id}</Text>
          <Text style={styles.date}>{date}</Text>

          <TouchableWithoutFeedback onPress={() => this.handleAudio(url)}>
            <Image
              source={require("../../assets/smPlay.png")}
              style={styles.playbutton}
            />
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
});

export default memo(Previous);

const styles = StyleSheet.create({
  scrollCont: {
    flex: 2,
    alignItems: "center",
    margin: 10,
    borderStyle: "solid",
    borderRadius: 30,
    borderWidth: 5,
    borderColor: "rgba(73, 90, 76, 0.5)"
  },
  scroll: {
    flex: 1
  },
  titleHome: {
    fontSize: 20,
    textAlign: "auto",
    marginRight: 40
  },
  title: {
    fontSize: 20,
    textAlign: "auto",
    marginRight: 40,
    left: 15
  },
  id: {
    position: "absolute",
    top: 0,
    fontSize: 20,
    textAlign: "right"
  },
  description: {
    fontSize: 18,
    padding: 10,
    textAlign: "center",
    alignSelf: "center"
  },
  playbutton: {
    height: 30,
    width: 30,
    position: "absolute",
    top: 50,
    left: 230
  },
  prevEP: {
    flex: 2,
    margin: 5,
    borderRadius: 30,
    borderWidth: 5,
    width: 300,
    height: 100
  },
  cont: {
    flexDirection: "row"
  },
  date: {
    fontSize: 15,
    marginRight: 50,
    left: 15,
    marginBottom: 100
  },
  id: {
    fontSize: 17,
    position: "absolute",
    top: 3,
    left: 230
  },
  content: {
    margin: 15,
    borderStyle: "solid",
    borderRadius: 30,
    borderWidth: 5,
    borderColor: "rgba(73, 90, 76, 0.5)",
    padding: 10,
    width: 300,
    backgroundColor: "rgba(73, 90, 76, 0.5)"
  },
  newContent: {
    justifyContent: "center",
    alignItems: "center",
    height: 525
  },
  homePlay: {
    height: 50,
    width: 150
  }
});
