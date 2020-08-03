import {Image, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

import {Picker} from '@react-native-community/picker';
import Styles from '../styles/Styles';
import cities from '../data/cities'
import { useDispatch } from 'react-redux'

const StartScreen = ({navigation}) => {
  const [region, setRegion] = useState(null);
  const dispatch = useDispatch()

  const handleCityClick = city => {
    dispatch({
      type: 'CITY_HANDLE_CLICK',
      value: city
    })
    navigation.navigate('Main')
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={Styles.body}>
        <View style={Styles.sectionContainer}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={Styles.logoMain}
          />

          {
            region == null && (
              <>
                <View style={Styles.textBtnContainer}>
                  <TouchableOpacity onPress={() => {setRegion('rivne')}}>
                    <Text style={Styles.textBtn}>Рівненська область</Text>
                  </TouchableOpacity>
                </View>
                <View style={Styles.textBtnContainer}>
                  <TouchableOpacity onPress={() => {setRegion('zhutomir')}}>
                    <Text style={Styles.textBtn}>Житомирська область</Text>
                  </TouchableOpacity>
                </View>
                <View style={Styles.textBtnContainer}>
                  <TouchableOpacity onPress={() => {setRegion('ternopil')}}>
                    <Text style={Styles.textBtn}>Тернопільська область</Text>
                  </TouchableOpacity>
                </View>
                <View style={Styles.textBtnContainer}>
                  <TouchableOpacity onPress={() => {setRegion('khmelnitsk')}}>
                    <Text style={Styles.textBtn}>Хмельницька область</Text>
                  </TouchableOpacity>
                </View>
                <View style={Styles.textBtnContainer}>
                  <TouchableOpacity onPress={() => {handleCityClick('Київ', 'Київська')}}>
                    <Text style={Styles.textBtn}>Київ</Text>
                  </TouchableOpacity>
                </View>
              </>
            )
          }
          {
            region != null && (
              <View style={Styles.textBtnContainer}>
                <TouchableOpacity onPress={() => {setRegion(null)}}>
                  <Text style={Styles.textBtn}>Назад</Text>
                </TouchableOpacity>
              </View>
            )
          }         
          {
            region != null && (
              cities[region].arr.map((item, index) => {
                return <Text style={Styles.cityListText} key={index} onPress={() => {handleCityClick(item, cities[region].label)}}>{item}</Text>
              })
            )
          }
        </View>
      </View>
      </ScrollView>
    </>
  );
};

export default StartScreen;
