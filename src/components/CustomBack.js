import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import BackIcon from '../assets/backIcon.svg';

const CustomBack = ({onPress}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
      }}
      onPress={onPress}>
      <BackIcon />
      <Text
        style={{
          marginLeft: 3,
          color: '#D7C9C9',
          fontSize: 14,
          lineHeight: 24,
          fontWeight: '400',
        }}>
        Back
      </Text>
    </TouchableOpacity>
  );
};

export default CustomBack;
