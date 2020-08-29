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

import IconCart from '../components/IconCart';
import Styles from '../styles/Styles';
import TopCity from '../components/TopCity';
import {connect} from 'react-redux';
import {useSelector} from 'react-redux';

const CategoryScreen = ({navigation, route}) => {
  const state = useSelector(state => state, []);

  return (
    <View style={Styles.back}>
      <TopCity city={state.data.city[0].name} />
      <TouchableHighlight
        underlayColor="transparent"
        style={Styles.cartIconTouchWrap}
        onPress={() => {
          navigation.navigate('Order');
        }}>
        <IconCart count={state.data.cartCount} />
      </TouchableHighlight>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={Styles.body}>
          <View style={Styles.sectionContainer}>
            <Image
              source={require('../../assets/images/logo.png')}
              style={Styles.logoCategory}
            />
            <Text style={Styles.categoryCity}>{state.data.city[0].name}</Text>
            <View style={Styles.textBtnContainer}>
              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate('Catalog');
                }}>
                <Text style={Styles.textBtnMainScreen}>Меню</Text>
              </TouchableWithoutFeedback>
            </View>
            <View style={Styles.buttonsInRow}>
              <View style={Styles.textBtnContainer}>
                <TouchableWithoutFeedback
                  onPress={() => {
                    navigation.navigate('Action');
                  }}>
                  <Text style={Styles.textBtnAction}>Акції %</Text>
                </TouchableWithoutFeedback>
              </View>
              <View style={Styles.textBtnContainer}>
                <TouchableWithoutFeedback
                  onPress={() => {
                    Linking.openURL(`tel:${state.data.city[0].phone}`);
                  }}>
                  <Text style={Styles.textBtnCall}>Зателефонувати</Text>
                </TouchableWithoutFeedback>
              </View>
            </View>
            <View style={Styles.contactTextWrapper}>
              <View style={Styles.contactWrapper}>
                <Image
                  source={require('../../assets/images/location.png')}
                  style={Styles.contactImg}
                />
                <Text style={Styles.contactText}>
                  {state.data.city[0].adres}
                </Text>
              </View>
              <View style={Styles.contactWrapper}>
                <Image
                  source={require('../../assets/images/time.png')}
                  style={Styles.contactImg}
                />
                <Text style={Styles.contactText}>
                  {state.data.city[0].worktime}
                </Text>
              </View>
              <View style={Styles.contactWrapper}>
                <Image
                  source={require('../../assets/images/time.png')}
                  style={Styles.contactImg}
                />
                <Text style={Styles.contactText}>
                  {state.data.city[0].ordertime}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CategoryScreen;
