import React from 'react';
import {Image} from 'react-native';

export default Logo = () => {
  return (
    <Image source={require('./Logo.png')} style={{height: 130, width: 300}} />
  );
};
