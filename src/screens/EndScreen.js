import {Image, SafeAreaView, StatusBar, Text, TouchableHighlight, TouchableWithoutFeedback, View} from 'react-native';
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
          <Image source={require('../../assets/images/back.jpg')}
            style={Styles.backImage}>
            
          </Image>

          <View style={Styles.endScreenWrapper}>
            <Text
                style={Styles.endTextTitle}
                onPress={() => {
                    navigation.navigate('Start');
                }}>
                Дякуємо за Ваше замовлення!
            </Text>
            <Text
                style={Styles.endTextSubtitle}
                onPress={() => {
                    navigation.navigate('Start');
                }}>
                Очікуйте дзвінка оператора для підтвердження!
            </Text>
            <View style={Styles.textEndBtnContainer}>
              <TouchableWithoutFeedback onPress={() => {navigation.navigate('Start')}}>
                <Text style={Styles.textBtnEndScreen}>На головну</Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default EndScreen;
