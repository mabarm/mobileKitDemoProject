import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
const OnePersonCircle = ({viewStyle, imageSource, name, display}) => {
  return (
    <View style={viewStyle}>
      <Image
        source={imageSource}
        style={display ? styles.searchedImage : styles.image}
      />
      <Text style={display ? styles.searchedName : styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  searchedName: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
    color: '#1DC76B',
  },
  name: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    color: '#FAFAFA',
    marginTop: 8,
  },
  searchedImage: {
    width: 72,
    height: 72,
    borderRadius: 72 / 2,
    borderWidth: 4,
    borderColor: '#1DC76B',
  },
  image: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
});

export default OnePersonCircle;
