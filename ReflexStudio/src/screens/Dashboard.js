import React from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';

import {connect} from 'react-redux';

import {IconRegistry, Layout} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

const Dashboard = ({navigation, GetData, res}) => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <Layout style={styles.container}>
        <Text style={styles.text} category="h1">
          Welcome to UI Kitten 😻
        </Text>
        <Text style={styles.text} category="s1">
          Start with editing App.js to configure your App
        </Text>
        <Button onPress={() => GetData()} title={res} />

        <Button
          onPress={() => navigation.navigate('InitialRoute')}
          title="InitialRoute"
        />
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = state => {
  return {
    res: state.res,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    GetData: () => dispatch({type: 'GetData'}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
