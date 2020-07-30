import {
  Image,
  Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';

import Context from '../context'
import IconCart from '../components/IconCart'
import Styles from '../styles/Styles';

const CategoryScreen = ({navigation, route}) => {
  const context = useContext(Context)
  const [count, setCount] = useState(context.cartCount)
  

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={Styles.body}>
          <View style={Styles.sectionContainer}>
            {/* <IconCart count={count}/> */}
            <Image
              source={require('../../assets/images/logo.png')}
              style={Styles.logoCategory}
            />
            <Text style={Styles.categoryCity}>{context.city}</Text>
            <View style={Styles.textBtnContainer}>
              <TouchableWithoutFeedback onPress={() => {navigation.navigate('Catalog')}}>
                <Text style={Styles.textBtn}>Меню</Text>
              </TouchableWithoutFeedback>
            </View>
            <View style={Styles.buttonsInRow}>              
              <View style={Styles.textBtnContainer}>
                <TouchableWithoutFeedback onPress={() => {navigation.navigate('Action')}}>
                  <Text style={Styles.textBtnAction}>Акції %</Text>
                </TouchableWithoutFeedback>
              </View>        
              <View style={Styles.textBtnContainer}>
                <TouchableWithoutFeedback onPress={() => {Linking.openURL(`tel:${context.phone}`)}}>
                  <Text style={Styles.textBtnCall}>Зателефонувати</Text>
                </TouchableWithoutFeedback>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default CategoryScreen;
