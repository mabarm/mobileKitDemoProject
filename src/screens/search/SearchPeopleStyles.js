import {StyleSheet} from 'react-native';

const SearchPeopleStyles = StyleSheet.create({
  mainContainer: {backgroundColor: '#010A43', flex: 1},
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  searchInput: {
    flex: 3.5,
    width: '100%',
    color: 'white',
    height: 48,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: 'rgba(16, 25, 78, 1)',
    paddingHorizontal: 18,
  },
  handleBottomsheetBackgroundStyle: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: '#10194E',
  },
  handleBottomsheetIndicator: {
    backgroundColor: '#4E589F',
    borderRadius: 10,
    height: 7,
    width: 64,
  },
  searchedUserContainer: {
    backgroundColor: '#10194E',
    alignItems: 'center',
    zIndex: 10,
    height: 316,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  seachedUserImage: {
    width: 72,
    height: 72,
    borderRadius: 72 / 2,
    marginTop: 32,
  },
  searchedUserName: {
    fontWeight: '550',
    fontSize: 20,
    lineHeight: 20,
    color: '#FFFFFF',
    marginTop: 16,
  },
  searchedUserText: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    color: '#FFFFFF',
    marginTop: 16,
  },
});

export default SearchPeopleStyles;
