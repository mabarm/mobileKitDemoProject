import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/homeScreen/HomeScreen';
import MoneyRequestScreen from '../moneyRequest/MoneyRequestScreen';
import AppIntroScreen from '../screens/appIntro/AppIntroScreen';
import SearchPeople from '../screens/search/SearchPeople';
const Stack = createNativeStackNavigator();

const Route = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AppIntroScreen" component={AppIntroScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="MoneyRequested" component={MoneyRequestScreen} />
      <Stack.Screen name="SearchPeople" component={SearchPeople} />
    </Stack.Navigator>
  );
};

export default Route;
