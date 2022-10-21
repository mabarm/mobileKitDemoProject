import React from 'react';
import {Text, View, Image} from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomBack from '../../components/CustomBack';
import CurrencyIcon from '../../assets/currency.svg';

const personImage = require('../../assets/adeleke.png');

const MoneyRequestScreen = ({navigation}) => {
  const sendMoney = () => {
    navigation.navigate('SearchPeople');
  };
  const goHomeScreen = () => {
    navigation.navigate('Home');
  };

  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: '#010A43',
        flex: 1,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 24,
          marginLeft: 10,
        }}>
        <CustomBack onPress={() => navigation.goBack()} />

        <Text
          style={{
            flex: 2,
            fontWeight: '550',
            fontSize: 18,
            lineHeight: 26,
            color: '#D7C9C9',
          }}>
          New Request
        </Text>
      </View>
      <View
        style={{
          marginTop: 80,
          width: 200,
          height: 200,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 100,
          backgroundColor: 'rgba(16, 25, 78, 1)',
        }}>
        <View
          style={{
            width: 150,
            height: 150,
            backgroundColor: 'rgba(25, 34, 89, 1)',
            borderRadius: 100,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 100,
          }}>
          <View
            style={{
              width: 100,
              height: 100,
              borderRadius: 75,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={personImage}
              style={{width: '100%', height: '100%', borderRadius: 50}}
            />
          </View>
        </View>
      </View>
      <Text
        style={{
          marginTop: 24,
          fontSize: 24,
          fontWeight: '550',
          lineHeight: 32,
          color: '#EEEEEE',
        }}>
        Adeleke Ramon
      </Text>
      <Text
        style={{
          marginTop: 24,
          fontSize: 14,
          fontWeight: '400',
          lineHeight: 21,
          color: '#EEEEEE',
        }}>
        is requesting for:
      </Text>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 24,
          alignItems: 'center',
        }}>
        <CurrencyIcon />
        <Text
          style={{
            fontSize: 40,
            fontWeight: '700',
            lineHeight: 48,
            color: '#EEEEEE',
          }}>
          200000
        </Text>
      </View>
      <CustomButton
        text={'Send money'}
        backgroundColor={'#FF2E63'}
        marginTop={48}
        width={173}
        height={60}
        onPress={sendMoney}
        fontSize={16}
        lineHeight={28}
        color={'#FFFFFF'}
      />
      <CustomButton
        text={"Don't send"}
        color={'#464E8A'}
        borderWidth={1}
        marginTop={24}
        width={173}
        height={60}
        onPress={goHomeScreen}
        fontSize={16}
        lineHeight={28}
      />
    </View>
  );
};

export default MoneyRequestScreen;
