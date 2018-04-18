import React from 'react';
import {View, Text} from 'react-native';

const Header = () => {
  const {textStyle} = styles;
  return <Text style={textStyle}>Albums!</Text>;
};

const styles = {
  textStyle: {
    fontSize: 20,
  },
};

export default Header;
