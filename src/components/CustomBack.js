import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import BackIcon from '../assets/backIcon.svg';

const CustomBack = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.mainContainer} onPress={onPress}>
      <BackIcon />
      <Text style={styles.back}>Back</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  back: {
    marginLeft: 3,
    color: '#D7C9C9',
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '400',
  },
});
export default CustomBack;
