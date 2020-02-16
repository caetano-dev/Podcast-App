import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const Logo = () => {
  return (
    <Image source={require('../../assets/Reflex.png')} style={styles.icon} />
  );
};

const styles = StyleSheet.create({
  icon: {
    height: 140,
    width: 350,
  },
});

export default Logo;
