import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import {View, Text, Button, ImageBackground} from 'react-native';
import CustomButton from '../../components/CustomButton';

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
  const renderItem = ({item}) => {
    return (
      <ImageBackground
        source={item.image}
        style={{height: '100%', width: '100%'}}>
        <View
          style={{
            backgroundColor: item.key == 's1' ? '#17288E' : '#FFFFFF',
            width: 323,
            height: 224,
            borderTopRightRadius: 70,
            bottom: 0,
            position: 'absolute',
            justifyContent: 'center',
            paddingHorizontal: 32,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '700',
              lineHeight: 30,
              color: item.key == 's1' ? '#FFFFFF' : '#1C265C',
              marginTop: 14,
            }}>
            {item.title}
          </Text>
          <Text
            style={{
              fontWeight: '400',
              fontSize: 16,
              lineHeight: 24,
              color: item.key == 's1' ? '#FAFAFA' : '#283470',
              marginTop: 6,
            }}>
            {item.description}
          </Text>
          <CustomButton
            text={'Start Banking'}
            backgroundColor={item.key == 's1' ? '#FFFFFF' : '#1C265C'}
            height={50}
            width={145}
            onPress={() => {}}
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
      dotStyle={{
        backgroundColor: '#FDD590',
        width: 16,
        borderRadius: 4,
        top: -155,
        left: -145,
      }}
      activeDotStyle={{
        backgroundColor: '#FFB129',
        width: 32,
        borderRadius: 4,
        top: -155,
        left: -145,
      }}
      dotClickEnabled={true}
      showNextButton={false}
      showDoneButton={true}
      onDone={() => navigation.navigate('Home')}
      onSlideChange={index => {
        if (index === 2) {
          navigation.navigate('Home');
        }
      }}
    />
  );
};

export default AppIntroScreen;
