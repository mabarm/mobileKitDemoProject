import {StyleSheet} from 'react-native';

const HomeScreenStyles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#010A43',
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    marginTop: 24,
    alignItems: 'center',
  },
  helloBar: {
    marginLeft: 16,
    flex: 1,
    fontWeight: '550',
    fontSize: 20,
    lineHeight: 20,
    color: '#FFFFFF',
  },
  balance: {
    marginTop: 24,
    color: '#E7E4E4',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 12,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },

  price: {
    color: '#EEEEEE',
    fontWeight: '700',
    fontSize: 40,
    lineHeight: 48,
    marginLeft: 8,
  },
  moneyStatusButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  handleBottomsheetBackgroundStyle: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: '#10194E',
  },
  handleBottomsheetIndicatorStyle: {
    backgroundColor: '#4E589F',
    borderRadius: 10,
    width: 64,
    height: 7,
    marginTop: 16,
  },
  transactionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 88,
  },
  transactionBar: {
    color: 'white',
    flex: 1,
    fontWeight: '550',
    fontSize: 16,
    lineHeight: 24,
  },
  sorting: {
    color: '#4E589F',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 24,
  },
  recent: {
    color: 'white',
    marginLeft: 9,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 24,
  },
  downArrow: {
    marginLeft: 8,
  },
  currencyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
    position: 'absolute',
    marginRight: 16,
  },
  statusItem: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    color: '#FFFFFF',
  },
  statusIconItem: {
    backgroundColor: 'white',
    width: 16,
    height: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  statusBarItem: {
    marginTop: 8,
    flexDirection: 'row',
    height: 28,
    borderRadius: 20,
    alignItems: 'center',
    minWidth: 62,
    justifyContent: 'space-evenly',
  },
  nameItem: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    color: '#858EC5',
  },
  imageItem: {width: 48, height: 48, borderRadius: 48 / 2},
  imageBarItem: {
    flexDirection: 'row',
    height: 88,
    borderRadius: 8,
    opacity: 0.9,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  nameContainerItem: {
    marginLeft: 16,
  },
  priceBarItem: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
  },
});

export default HomeScreenStyles;
