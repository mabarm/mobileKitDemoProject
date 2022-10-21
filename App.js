import React from 'react';
import MoneyRequestScreen from './src/moneyRequest/MoneyRequestScreen';
import HomeScreen from './src/screens/homeScreen/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Route from './src/routes/Route';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </GestureHandlerRootView>
  );

  return <MoneyRequestScreen />;
};

export default App;
