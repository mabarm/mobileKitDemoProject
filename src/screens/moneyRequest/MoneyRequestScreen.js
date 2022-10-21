import React from 'react';
import {Text, View, Image} from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomBack from '../../components/CustomBack';
import CurrencyIcon from '../../assets/currency.svg';
import MoneyRequestScreenStyles from './MoneyRequestScreenStyles';

const personImage = require('../../assets/adeleke.png');

const MoneyRequestScreen = ({navigation}) => {
  const sendMoney = () => {
    navigation.navigate('SearchPeople');
  };
  const goHomeScreen = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={MoneyRequestScreenStyles.mainContainer}>
      <View style={MoneyRequestScreenStyles.header}>
        <CustomBack onPress={() => navigation.goBack()} />

        <Text style={MoneyRequestScreenStyles.newRequest}>New Request</Text>
      </View>
      <View style={MoneyRequestScreenStyles.outerCircle}>
        <View style={MoneyRequestScreenStyles.middleCircle}>
          <View style={MoneyRequestScreenStyles.innerCircle}>
            <Image
              source={personImage}
              style={MoneyRequestScreenStyles.personImage}
            />
          </View>
        </View>
      </View>
      <Text style={MoneyRequestScreenStyles.personName}>Adeleke Ramon</Text>
      <Text style={MoneyRequestScreenStyles.requestFor}>
        is requesting for:
      </Text>
      <View style={MoneyRequestScreenStyles.currencyBox}>
        <CurrencyIcon />
        <Text style={MoneyRequestScreenStyles.currency}>200000</Text>
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
