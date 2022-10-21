import React from 'react';
import BarIcon from '../../assets/barIcon.svg';
import CustomButton from '../../components/CustomButton';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import DownArrow from '../../assets/downArrow.svg';
import peopleInfo from '../../data/peopleInfo';
import CurrencyIcon from '../../assets/currency.svg';
import {FlatList} from 'react-native-gesture-handler';
import FailedIcon from '../../assets/failed.svg';
import SendIcon from '../../assets/sent.svg';
import ReceivedIcon from '../../assets/received.svg';
import HomeScreenStyles from './HomeScreenStyles';

const HomeScreen = ({navigation}) => {
  const snapPoints = ['16', '30%', '60%'];

  const requestMoney = () => {
    navigation.navigate('MoneyRequested');
  };

  const sendMoney = () => {
    navigation.navigate('SearchPeople');
  };

  const renderPeopleInfoHandler = ({item}) => {
    return (
      <View
        style={[
          HomeScreenStyles.imageBarItem,
          item.id % 2 != 0
            ? {backgroundColor: '#192259'}
            : {backgroundColor: '#10194E'},
        ]}>
        <Image source={item.image} style={HomeScreenStyles.imageItem} />
        <View style={HomeScreenStyles.nameContainerItem}>
          <Text style={HomeScreenStyles.nameItem}>{item.name}</Text>
          <TouchableOpacity
            style={[
              HomeScreenStyles.statusBarItem,
              {
                backgroundColor:
                  item.status == 'Sent'
                    ? '#FAAD39'
                    : item.status == 'Failed'
                    ? '#FE4A54'
                    : '#1DC7AC',
              },
            ]}>
            <View style={HomeScreenStyles.statusIconItem}>
              {item.status == 'Sent' ? (
                <SendIcon />
              ) : item.status == 'Failed' ? (
                <FailedIcon />
              ) : (
                <ReceivedIcon />
              )}
            </View>
            <Text style={HomeScreenStyles.statusItem}>{item.status}</Text>
          </TouchableOpacity>
        </View>
        <View style={HomeScreenStyles.currencyItem}>
          <CurrencyIcon
            width={16}
            height={12}
            style={{
              backgroundColor:
                item.status == 'Sent'
                  ? '#FAAD39'
                  : item.status == 'Failed'
                  ? '#FE4A54'
                  : '#1DC7AC',
              right: 4,
            }}
          />
          <Text
            style={[
              {
                color:
                  item.status == 'Sent'
                    ? '#FAAD39'
                    : item.status == 'Failed'
                    ? '#FE4A54'
                    : '#1DC7AC',
              },
              HomeScreenStyles.priceBarItem,
            ]}>
            {item.price}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={HomeScreenStyles.mainContainer}>
      <View style={HomeScreenStyles.header}>
        <BarIcon />
        <Text style={HomeScreenStyles.helloBar}>Hello Sandra</Text>
        <CustomButton
          text={'Add money'}
          backgroundColor={'#212A6B'}
          color={'#426DDC'}
          borderWidth={1}
          width={90}
          height={32}
          fontSize={14}
          lineHeight={24}
          onPress={requestMoney}
        />
      </View>
      <Text style={HomeScreenStyles.balance}>Your current balance is</Text>
      <View style={HomeScreenStyles.priceContainer}>
        <CurrencyIcon width={40} height={32} />
        <Text style={HomeScreenStyles.price}>200000</Text>
      </View>
      <View style={HomeScreenStyles.moneyStatusButton}>
        <CustomButton
          text={'Request money'}
          color={'#464E8A'}
          borderWidth={1}
          width={164}
          height={60}
          marginTop={32}
          onPress={requestMoney}
          fontSize={16}
          lineHeight={28}
        />
        <CustomButton
          text={'Send money'}
          color={'#464E8A'}
          borderWidth={1}
          width={164}
          height={60}
          marginTop={32}
          onPress={sendMoney}
          fontSize={16}
          lineHeight={28}
        />
      </View>

      <BottomSheet
        snapPoints={snapPoints}
        index={1}
        backgroundStyle={HomeScreenStyles.handleBottomsheetBackgroundStyle}
        handleIndicatorStyle={HomeScreenStyles.handleBottomsheetIndicatorStyle}>
        <View style={HomeScreenStyles.transactionContainer}>
          <Text style={HomeScreenStyles.transactionBar}>All Transactions</Text>
          <Text style={HomeScreenStyles.sorting}>Sort by:</Text>
          <Text style={HomeScreenStyles.recent}>Recent</Text>
          <DownArrow style={HomeScreenStyles.downArrow} />
        </View>
        <FlatList
          data={peopleInfo}
          renderItem={renderPeopleInfoHandler}
          scrollEnabled={true}
        />
      </BottomSheet>
    </View>
  );
};

export default HomeScreen;
