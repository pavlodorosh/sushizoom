import {ImageBackground, SafeAreaView, StatusBar, Text, TouchableHighlight, View} from 'react-native';
import React, {useEffect} from 'react';

import Styles from '../styles/Styles';

const EndScreen = ({navigation}) => {
    useEffect(() => {
        // setTimeout(()=> {
        //     navigation.navigate('Start');
        // }, 5000)
    }, [])

  return (
    <>
      <View style={Styles.body}>
        <View style={Styles.sectionContainer}>
        <ImageBackground>
          source={require('../../assets/images/back.jpg')}
          style={Styles.backImage}
        </ImageBackground>
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
