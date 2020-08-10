import {
  Image,
  Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import IconCart from '../components/IconCart'
import Styles from '../styles/Styles';
import { connect } from 'react-redux'
import { useSelector } from 'react-redux'

const CategoryScreen = ({navigation, route}) => {

  const state = useSelector(state => state, [])

  return (
    <>
      <TouchableHighlight style={Styles.cartIconTouchWrap} onPress={() => {
        navigation.navigate('Order')
      }}>
        <IconCart count={state.data.cartCount}/>
      </TouchableHighlight>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={Styles.body}>
          <View style={Styles.sectionContainer}>
            <Image
              source={require('../../assets/images/logo.png')}
              style={Styles.logoCategory}
            />
            <Text style={Styles.categoryCity}>{state.data.city}</Text>
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
                <TouchableWithoutFeedback onPress={() => {Linking.openURL(`tel:${state.data.phone}`)}}>
                  <Text style={Styles.textBtnCall}>Зателефонувати</Text>
                </TouchableWithoutFeedback>
              </View>
            </View>
          </View>
            <Text style={{color: '#fff', fontSize: 20,}}>м. Київ, вул. Княжий Затон, 4</Text>
        </View>
      </ScrollView>
    </>
  );
};

export default CategoryScreen;
