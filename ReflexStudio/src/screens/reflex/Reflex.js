import React, {Component, memo} from 'react';
import {View, StyleSheet} from 'react-native';
import {Layout, Text, Button} from '@ui-kitten/components';
import {logoutUser} from '../../api/auth-api';

import Logo from '../../components/LogoM';
import Icons from '../../components/Icons';

export default class Reflex extends Component {
  render() {
    let social = false;
    const navigation = this.props;
    return (
      <View style={styles.cont}>
        <View style={{marginVertical: 15, alignSelf: 'center'}}>
          <Logo />
        </View>

        {/* Buttons//////////////////////////////////////// */}
        <View style={styles.buttonGroup}>
          <Button onPress={() => this.props.navigation.navigate('Previous')}>
            Episode Archive
          </Button>

          <Button onPress={() => ` ${(social = !social)}`}>Social</Button>

          <Button onPress={() => logoutUser()}>Logout</Button>
        </View>

        <View style={{margin: 10}}>
          {social ? <Icons social={social} /> : null}
        </View>

        {/* Content///////////////////////////////////////////
        <View style={{flex: 3}}>
          {latestEP.docs.map(doc => (
            <Data key={doc.id} doc={doc} />
          ))}
        </View>*/}
      </View>
    );
  }
}

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
