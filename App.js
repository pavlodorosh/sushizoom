import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';


import Header from './src/components/Header/Header';
import StartScreen from './src/screens/StartScreen'

const App = () => {


  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Header />          
          <StartScreen />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};



export default App;
