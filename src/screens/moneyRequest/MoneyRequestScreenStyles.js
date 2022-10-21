import {StyleSheet} from 'react-native';

const MoneyRequestScreenStyles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: '#010A43',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
    marginLeft: 10,
  },
  newRequest: {
    flex: 2,
    fontWeight: '550',
    fontSize: 18,
    lineHeight: 26,
    color: '#D7C9C9',
  },
  outerCircle: {
    marginTop: 80,
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: 'rgba(16, 25, 78, 1)',
  },
  middleCircle: {
    width: 150,
    height: 150,
    backgroundColor: 'rgba(25, 34, 89, 1)',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  innerCircle: {
    width: 100,
    height: 100,
    borderRadius: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  personImage: {width: '100%', height: '100%', borderRadius: 50},
  personName: {
    marginTop: 24,
    fontSize: 24,
    fontWeight: '550',
    lineHeight: 32,
    color: '#EEEEEE',
  },
  requestFor: {
    marginTop: 24,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
    color: '#EEEEEE',
  },
  currencyBox: {
    flexDirection: 'row',
    marginTop: 24,
    alignItems: 'center',
  },
  currency: {
    fontSize: 40,
    fontWeight: '700',
    lineHeight: 48,
    color: '#EEEEEE',
  },
});

export default MoneyRequestScreenStyles;
