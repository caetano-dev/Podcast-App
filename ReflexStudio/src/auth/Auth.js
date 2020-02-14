import React from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';

import {connect} from 'react-redux';

class Auth extends React.Component {
  render() {
    return (
      <View>
        <Button onPress={() => this.props.GetData()} title={this.props.res} />
      </View>
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
