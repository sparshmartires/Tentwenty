import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';

import AppNavigator from './app.navigator';
import {navigationRef} from './root.navigator';

const Navigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar animated />
      <AppNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
