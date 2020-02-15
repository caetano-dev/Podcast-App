import React, {Component, Fragment, memo} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
} from 'react-native';
// import { Audio } from "expo-av";
// import { Ionicons } from "@expo/vector-icons";
// import { MaterialCommunityIcons } from "@expo/vector-icons";

import Logo from '../components/LogoM';

const ArchivePlayer = ({navigation}) => {
  return (
    <View style={styles.cont}>
      <View style={styles.logoBTN}>
        <View>
          <Logo />
        </View>
        <View style={styles.buttonGroup}>
          <Button
            color="#427389"
            title="Latest Episode"
            onPress={() => navigation.navigate('Dashboard')}
          />
          <Button
            color="#427389"
            title="Episode Archive"
            onPress={() => navigation.navigate('Previous')}
          />
        </View>
      </View>

      {/*Content/////////////////////////////////////////// */}
      <View style={styles.newContent}>
        <Text h1 style={{fontSize: 35, fontWeight: 'bold'}}>
          Episode {navigation.getParam('id', 'default value')}
        </Text>
        <View style={styles.content}>
          <View>
            <View>
              <Text style={styles.titleHome}>
                {navigation.getParam('name', 'default value')}
              </Text>
            </View>
          </View>
          <Text style={styles.description}>
            {/**Word cap @ 240 characters */}
            {navigation.getParam('description', 'default value')}
          </Text>
          <Text
            style={{
              fontSize: 15,
              alignSelf: 'baseline',
              fontWeight: 'bold',
            }}>
            {navigation.getParam('date', 'default value')}
          </Text>
        </View>

        {/* contorls////////////////////////////////////////*/}
        {/* <Controls
            url={this.props.navigation.getParam("url", "default value")}
            name={this.props.navigation.getParam("name", "default value")}
          /> */}
      </View>
    </View>
  );
};

export default ArchivePlayer;

const styles = StyleSheet.create({
  cont: {
    backgroundColor: '#325F49',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  logoBTN: {
    flex: 1,
    justifyContent: 'space-between',
  },
  date: {
    fontSize: 15,
    marginRight: 50,
    left: 15,
    marginBottom: 100,
  },
  id: {
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
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleHome: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'auto',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 30,
  },
});
