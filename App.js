import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import firebase from './src/services/firebaseConnection';
import 'react-native-gesture-handler';
console.disableYellowBox=true

import AuthProvider from './src/contexts/auth';

import Routes from './src/routes/index';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="#000" />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}