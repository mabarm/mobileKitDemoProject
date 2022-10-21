import {StyleSheet} from 'react-native';

const AppIntroScreenStyles = StyleSheet.create({
  imageBackground: {height: '100%', width: '100%'},
  bottomView: {
    width: 323,
    height: 224,
    borderTopRightRadius: 70,
    bottom: 0,
    position: 'absolute',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 30,
    marginTop: 14,
  },
  description: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    marginTop: 6,
  },
  activeDotstyle: {
    backgroundColor: '#FFB129',
    width: 32,
    borderRadius: 4,
    top: -155,
    left: -145,
  },
  dotStyle: {
    backgroundColor: '#FDD590',
    width: 16,
    borderRadius: 4,
    top: -155,
    left: -145,
  },
});

export default AppIntroScreenStyles;
