import {StyleSheet} from 'react-native';

const ListPeopleStyles = StyleSheet.create({
  outerCircle: {
    borderWidth: 1,
    borderColor: '#0D164B',
    height: 375,
    marginTop: 10,
  },
  middleCircle: {
    borderColor: '#0D164B',
    borderWidth: 1,
    width: 285,
    height: 285,
    borderRadius: 285 / 2,
    alignSelf: 'center',
    marginTop: '10%',
  },
  innerCircle: {
    borderColor: '#0D164B',
    borderWidth: 1,
    width: 185,
    height: 185,
    borderRadius: 185 / 2,
    alignSelf: 'center',
    marginTop: '15%',
  },
});

export default ListPeopleStyles;
