import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import {View, Text, ImageBackground} from 'react-native';
import CustomButton from '../../components/CustomButton';
import AppIntroScreenStyles from './AppIntroScreenStyles';

const splashOne = require('../../assets/splashOne.png');
const splashTwo = require('../../assets/splashTwo.png');

const AppIntroScreen = ({navigation}) => {
  const slides = [
    {
      key: 's1',
      title: 'Transfer That Is Safe',
      description: 'You have nothing to be scared about, we got you covered.',
      image: splashOne,
    },
    {
      key: 's2',
      title: 'Transfer Money With Ease',
      description:
        'Making money is hard enough, we make transfering it easy enough.',
      image: splashTwo,
    },
  ];

  const goToHome = () => {
    navigation.navigate('Home');
  };
  const renderItem = ({item}) => {
    return (
      <ImageBackground
        source={item.image}
        style={AppIntroScreenStyles.imageBackground}>
        <View
          style={[
            AppIntroScreenStyles.bottomView,
            {backgroundColor: item.key == 's1' ? '#17288E' : '#FFFFFF'},
          ]}>
          <Text
            style={[
              AppIntroScreenStyles.title,
              {color: item.key == 's1' ? '#FFFFFF' : '#1C265C'},
            ]}>
            {item.title}
          </Text>
          <Text
            style={[
              AppIntroScreenStyles.description,
              {color: item.key == 's1' ? '#FAFAFA' : '#283470'},
            ]}>
            {item.description}
          </Text>
          <CustomButton
            text={'Start Banking'}
            backgroundColor={item.key == 's1' ? '#FFFFFF' : '#1C265C'}
            height={50}
            width={145}
            onPress={goToHome}
            fontSize={16}
            lineHeight={30}
            marginTop={14}
            color={item.key == 's1' ? '#17288E' : '#FFFFFF'}
          />
        </View>
      </ImageBackground>
    );
  };
  return (
    <AppIntroSlider
      data={slides}
      renderItem={renderItem}
      dotStyle={AppIntroScreenStyles.dotStyle}
      activeDotStyle={AppIntroScreenStyles.activeDotstyle}
      dotClickEnabled={true}
      showNextButton={false}
      showDoneButton={true}
      onDone={goToHome}
    />
  );
};

export default AppIntroScreen;
