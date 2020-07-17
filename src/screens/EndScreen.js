import {Image, SafeAreaView, StatusBar, Text, View} from 'react-native';
import React, {useState} from 'react';

import Styles from '../styles/Styles';

const EndScreen = ({navigation}) => {

  return (
    <>
      <View style={Styles.body}>
        <View style={Styles.sectionContainer}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={Styles.logoMain}
          />
        <Text
            style={Styles.endText}
            onPress={() => {
                navigation.navigate('Start');
            }}>
            Дякуємо за замовлення ;)
        </Text>
        </View>
      </View>
    </>
  );
};

export default EndScreen;
