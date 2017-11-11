import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { purple } from '../utils/colors'

const TextButton = ({onPress, children, style={}}) => {
  return (
    <TouchableOpacity onPress={onPress}>
    <Text styles={[styles.reset, style]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  reset: {
    textAlign: 'center',
    color: purple
  }
});

export default TextButton;