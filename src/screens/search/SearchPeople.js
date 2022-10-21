import React, {useState, useRef, useCallback} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import {View, Text, Image, TextInput} from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomBack from '../../components/CustomBack';
import Calculator from '../../components/Calculator';
import peopleInfo from '../../data/peopleInfo';
import ListPeople from './ListPeople';
import SearchPeopleStyles from './SearchPeopleStyles';

const SearchPeople = ({navigation}) => {
  const sheetRef = useRef(null);
  const snapPoints = ['40%', '65%'];
  const [search, setSearch] = useState('');
  const [showUserBottomSheet, setShowUserBottomSheet] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);
  const [searchUser, setSearchUser] = useState([]);

  const showCalculatorHandler = useCallback(item => {
    setShowCalculator(item);
    setShowUserBottomSheet(true);
  }, []);

  const onSearch = text => {
    if (text.length == 0) {
      setSearchUser([]);
      setSearch('');
      setShowUserBottomSheet(false);
    } else {
      let filteredData = peopleInfo.filter(item =>
        item.name.toLowerCase().startsWith(text.toLowerCase()),
      );
      setSearch(text);
      setSearchUser(filteredData);
      filteredData.length == 0
        ? setShowUserBottomSheet(false)
        : setShowUserBottomSheet(true);
    }
  };

  return (
    <View style={SearchPeopleStyles.mainContainer}>
      <View style={SearchPeopleStyles.header}>
        <CustomBack onPress={() => navigation.goBack()} />
        <TextInput
          style={SearchPeopleStyles.searchInput}
          placeholder="Search"
          onChangeText={text => onSearch(text)}
          value={search}
        />
      </View>
      <ListPeople peopleInfo={peopleInfo} searchUser={searchUser} />

      {showCalculator && (
        <Calculator
          showCalculator={showCalculator}
          showCalculatorHandler={showCalculatorHandler}
        />
      )}
      {showUserBottomSheet && (
        <BottomSheet
          ref={sheetRef}
          index={0}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          handleIndicatorStyle={
            SearchPeopleStyles.handleBottomsheetBackgroundStyle
          }
          backgroundStyle={SearchPeopleStyles.handleBottomsheetIndicator}>
          <View style={SearchPeopleStyles.searchedUserContainer}>
            <Image
              source={searchUser[0]?.image}
              style={SearchPeopleStyles.seachedUserImage}
            />
            <Text style={SearchPeopleStyles.searchedUserName}>
              {searchUser[0]?.name}
            </Text>
            <Text style={SearchPeopleStyles.searchedUserText}>
              {searchUser[0]?.phone}
            </Text>
            <CustomButton
              text={'Continue'}
              backgroundColor={'#FF2E63'}
              marginTop={32}
              width={147}
              height={60}
              onPress={() => {
                setShowCalculator(true);
                setShowUserBottomSheet(false);
              }}
            />
          </View>
        </BottomSheet>
      )}
    </View>
  );
};

export default SearchPeople;
