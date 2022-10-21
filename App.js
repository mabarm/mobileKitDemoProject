import React from 'react';
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
};

export default App;
