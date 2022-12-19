import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyStack from './navigation';
import Home from './screens/Home';
import Quiz from './screens/quiz';
import Result from './screens/result';

export default function App() {
  return (
    
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
