import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
const CustomButton = ({
  text,
  backgroundColor,
  color,
  borderWidth,
  marginTop,
  width,
  height,
  onPress,
  lineHeight,
  fontSize,
}) => {
  return (
    <TouchableOpacity
      style={{
        marginTop: marginTop,
        width: width,
        height: height,
        backgroundColor: backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderColor: '#464E8A',
        borderWidth: borderWidth,
      }}
      title="Send money"
      onPress={onPress}>
      <Text
        style={{
          color: color,
          fontWeight: '550',
          fontSize: fontSize,
          lineHeight: lineHeight,
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
