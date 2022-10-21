import React, {useMemo, useState, useRef, useCallback} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import {View, Text, Image, TextInput, FlatList} from 'react-native';
import CustomButton from '../../components/CustomButton';
import SendMoney from '../sendMoney/sendMoney';
import CustomBack from '../../components/CustomBack';
import Calculator from '../../components/Calculator';
import peopleInfo from '../../data/peopleInfo';
import CircleList from 'react-native-circle-list';

const personImage = require('../../assets/adeleke.png');

const SearchPeople = ({navigation}) => {
  const sheetRef = useRef(null);
  const snapPoints = ['40%', '65%'];
  const [search, setSearch] = useState('');
  const [showUserBottomSheet, setShowUserBottomSheet] = useState(false);
  const item = {
    image: personImage,
    name: 'Hello title',
    phoneNumber: 90,
  };
  const [showCalculator, setShowCalculator] = useState(false);
  const [searchUser, setSearchUser] = useState(false);

  const showCalculatorHandler = item => {
    setShowCalculator(item);
    setShowUserBottomSheet(true);
  };

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
      console.log('mamata7', filteredData);
      filteredData.length == 0
        ? setShowUserBottomSheet(false)
        : setShowUserBottomSheet(true);
    }
  };

  const renderUserInfoList = ({item}) => {
    return (
      <View
        style={{
          backgroundColor: '#010A43',
        }}>
        <Image
          source={{uri: item.image}}
          style={{
            width: 36,
            height: 36,
            borderRadius: 18,
            borderWidth: 2,
            borderColor: '#FFFFFF',
          }}
        />
        <Text
          style={{
            fontWeight: '400',
            fontSize: 12,
            lineHeight: 18,
            color: '#FAFAFA',
          }}>
          {item.name}
        </Text>
        {searchUser[0]?.name == item.name && (
          <Image
            source={{uri: item.image}}
            style={{
              width: 72,
              height: 72,
              borderRadius: 72 / 2,
              borderWidth: 4,
              borderColor: '#1DC76B',
            }}
          />
        )}
        {searchUser[0]?.name == item.name && (
          <Text
            style={{
              fontWeight: '400',
              fontSize: 14,
              lineHeight: 18,
              color: '#1DC76B',
            }}>
            {item.name}
          </Text>
        )}
      </View>
    );
  };

  return (
    <View style={{backgroundColor: '#010A43', flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 24,
          paddingHorizontal: 10,
          justifyContent: 'center',
        }}>
        <CustomBack onPress={() => navigation.goBack()} />
        <TextInput
          style={{
            flex: 3.5,
            width: '100%',
            color: 'white',
            height: 48,
            borderWidth: 1,
            borderRadius: 8,
            backgroundColor: 'rgba(16, 25, 78, 1)',
            paddingHorizontal: 18,
          }}
          placeholder="Search"
          onChangeText={text => onSearch(text)}
          value={search}
        />
      </View>
      <View
        style={{
          borderWidth: 1,
          borderColor: 'green',
          borderRadius: 200,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <FlatList
          data={peopleInfo}
          renderItem={renderUserInfoList}
          keyExtractor={item => item?.id}
        />
      </View>
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
          handleIndicatorStyle={{
            backgroundColor: '#4E589F',
            borderRadius: 10,
            height: 7,
            width: 64,
          }}
          backgroundStyle={{
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            backgroundColor: '#10194E',
          }}>
          <View
            style={{
              backgroundColor: '#10194E',
              alignItems: 'center',
              zIndex: 10,
              height: 316, //see
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
            }}>
            <Image
              source={{uri: searchUser[0]?.image}}
              style={{
                width: 72,
                height: 72,
                borderRadius: 72 / 2,
                marginTop: 32,
              }}
            />
            <Text
              style={{
                fontWeight: '550',
                fontSize: 20,
                lineHeight: 20,
                color: '#FFFFFF',
                marginTop: 16,
              }}>
              {searchUser[0]?.name}
            </Text>
            <Text
              style={{
                fontWeight: '400',
                fontSize: 14,
                lineHeight: 21,
                color: '#FFFFFF',
                marginTop: 16,
              }}>
              {searchUser[0]?.price}
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
