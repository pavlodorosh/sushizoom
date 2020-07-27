import {Image, SafeAreaView, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useState} from 'react';

import Context from '../context'
import {Picker} from '@react-native-community/picker';
import Styles from '../styles/Styles';
import cities from '../data/cities'

const StartScreen = ({navigation}) => {
  const [region, setRegion] = useState(null);
  const context = useContext(Context)

  const handleCityClick = (city, region) => {
    context.city = city
    phones.forEach(num => {
      if(num.city == city){
        context.phone = num.phone
      }
    })
    navigation.navigate('Main')
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
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
                  <TouchableOpacity onPress={() => {handleCityClick('Київ', 'Київська')}}>
                    <Text style={Styles.textBtn}>Київ</Text>
                  </TouchableOpacity>
                </View>
                <View style={Styles.textBtnContainer}>
                  <TouchableOpacity onPress={() => {setRegion('zhutomir')}}>
                    <Text style={Styles.textBtn}>Житомирська область</Text>
                  </TouchableOpacity>
                </View>
                <View style={Styles.textBtnContainer}>
                  <TouchableOpacity onPress={() => {setRegion('khmelnitsk')}}>
                    <Text style={Styles.textBtn}>Хмельницька область</Text>
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
    </>
  );
};

export default StartScreen;
