import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const CalculatorKeys = props => {
  return (
    <TouchableOpacity
      style={{paddingHorizontal: 40}}
      onPress={() => {
        props.onClick();
      }}>
      <Text style={styles.textDisplay}>{props.displayKey}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textDisplay: {
    color: '#FFFFFF',
    fontSize: 24,
    lineHeight: 24,
    fontWeight: '550',
  },
});

export default CalculatorKeys;
