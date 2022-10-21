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

const HomeScreen = ({navigation}) => {
  const snapPoints = ['16', '30%', '60%'];

  const requestMoney = () => {
    console.log('rrr');
    navigation.navigate('MoneyRequested');
  };

  const sendMoney = () => {
    navigation.navigate('SearchPeople');
  };

  const renderPeopleInfoHandler = ({item}) => {
    return (
      <View
        style={[
          {
            flexDirection: 'row',
            height: 88,
            borderRadius: 8,
            opacity: 0.9,
            alignItems: 'center',
            paddingHorizontal: 16,
          },
          item.id % 2 != 0
            ? {backgroundColor: '#192259'}
            : {backgroundColor: '#10194E'},
        ]}>
        <Image
          source={{
            uri: item.image,
          }}
          style={{width: 48, height: 48, borderRadius: 48 / 2}}
        />
        <View
          style={{
            marginLeft: 16,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '700',
              lineHeight: 24,
              color: '#858EC5',
            }}>
            {item.name}
          </Text>
          <TouchableOpacity
            style={{
              marginTop: 8,
              flexDirection: 'row',
              height: 28,
              borderRadius: 20,
              alignItems: 'center',
              minWidth: 62,
              justifyContent: 'space-evenly',
              backgroundColor:
                item.status == 'Sent'
                  ? '#FAAD39'
                  : item.status == 'Failed'
                  ? '#FE4A54'
                  : '#1DC7AC',
            }}>
            <View
              style={{
                backgroundColor: 'white',
                width: 16,
                height: 16,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 8,
              }}>
              {item.status == 'Sent' ? (
                <SendIcon />
              ) : item.status == 'Failed' ? (
                <FailedIcon />
              ) : (
                <ReceivedIcon />
              )}
            </View>
            <Text
              style={{
                fontWeight: '400',
                fontSize: 12,
                lineHeight: 18,
                color: '#FFFFFF',
              }}>
              {item.status}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            right: 0,
            position: 'absolute',
            marginRight: 16,
          }}>
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
            style={{
              color:
                item.status == 'Sent'
                  ? '#FAAD39'
                  : item.status == 'Failed'
                  ? '#FE4A54'
                  : '#1DC7AC',
              fontWeight: '700',
              fontSize: 16,
              lineHeight: 24,
            }}>
            {item.price}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{backgroundColor: '#010A43', flex: 1, paddingHorizontal: 16}}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 24,
          alignItems: 'center',
        }}>
        <BarIcon />
        <Text
          style={{
            marginLeft: 16,
            flex: 1,
            fontWeight: '550',
            fontSize: 20,
            lineHeight: 20,
            color: '#FFFFFF',
          }}>
          Hello Sandra
        </Text>
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
      <Text
        style={{
          marginTop: 24,
          color: '#E7E4E4',
          fontSize: 12,
          fontWeight: '400',
          lineHeight: 12,
        }}>
        Your current balance is
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 16,
        }}>
        <CurrencyIcon width={40} height={32} />
        <Text
          style={{
            color: '#EEEEEE',
            fontWeight: '700',
            fontSize: 40,
            lineHeight: 48,
            marginLeft: 8,
          }}>
          200000
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
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
        backgroundStyle={{
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          backgroundColor: '#10194E',
        }}
        handleIndicatorStyle={{
          backgroundColor: '#4E589F',
          borderRadius: 10,
          width: 64,
          height: 7,
          marginTop: 16,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 16,
            height: 88,
          }}>
          <Text
            style={{
              color: 'white',
              flex: 1,
              fontWeight: '550',
              fontSize: 16,
              lineHeight: 24,
            }}>
            All Transactions
          </Text>
          <Text
            style={{
              color: '#4E589F',
              fontWeight: '400',
              fontSize: 14,
              lineHeight: 24,
            }}>
            Sort by:
          </Text>
          <Text
            style={{
              color: 'white',
              marginLeft: 9,
              fontWeight: '400',
              fontSize: 14,
              lineHeight: 24,
            }}>
            Recent
          </Text>
          <DownArrow style={{marginLeft: 8}} />
        </View>
        <FlatList
          data={peopleInfo}
          ListHeaderComponent={() => {}}
          style={{}}
          contentContainerStyle={{}}
          renderItem={renderPeopleInfoHandler}
          scrollEnabled={true}
        />
      </BottomSheet>
    </View>
  );
};

export default HomeScreen;
