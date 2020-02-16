import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const Logo = () => {
  return (
    <Image source={require('./Reflex.png')} style={{height: 130, width: 300}} />
  );
};

export default Logo;
