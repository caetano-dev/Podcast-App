import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Layout, Text, Button} from '@ui-kitten/components';

const PodCard = ({content, radius, borderWidth}) => {
  return (
    <View
      style={{
        margin: 20,
        borderWidth: borderWidth,
        borderRadius: radius,
        flex: 1,
        padding: 10,
        backgroundColor: 'white',
      }}>
      {content}
    </View>
  );
};

export default PodCard;
