import React from 'react';
import {View, Image, Text} from 'react-native';
const OnePersonCircle = ({viewStyle, imageSource, name, display}) => {
  return (
    <View style={viewStyle}>
      <Image
        source={{uri: imageSource}}
        style={
          display
            ? {
                width: 72,
                height: 72,
                borderRadius: 72 / 2,
                borderWidth: 4,
                borderColor: '#1DC76B',
              }
            : {
                width: 36,
                height: 36,
                borderRadius: 18,
                borderWidth: 2,
                borderColor: '#FFFFFF',
              }
        }
      />
      <Text
        style={
          display
            ? {
                fontWeight: '400',
                fontSize: 14,
                lineHeight: 18,
                color: '#1DC76B',
              }
            : {
                fontWeight: '400',
                fontSize: 12,
                lineHeight: 18,
                color: '#FAFAFA',
                marginTop: 8,
              }
        }>
        {name}
      </Text>
    </View>
  );
};

export default OnePersonCircle;
