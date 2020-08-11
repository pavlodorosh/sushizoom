import {Image, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import Styles from '../styles/Styles';
import firestore from '@react-native-firebase/firestore';
import { useDispatch } from 'react-redux'

const StartScreen = ({navigation}) => {
  const [region, setRegion] = useState(null);
  const [cities, setCities] = useState([]);
  const [cityArr, setCityArr] = useState([]);
  const dispatch = useDispatch()
  
  useEffect(() => {
    setCities([])
    firestore()
    .collection(`City`)
    .get()
    .then(querySnapshot => {     
      querySnapshot.forEach(documentSnapshot => {
        let data = documentSnapshot.data()
        setCities(prevState => [...prevState, data])  
      });
    });
  }, []);

  const handleCityClick = cityObj => {
    dispatch({
      type: 'CITY_HANDLE_CLICK',
      value: cityObj
    })
    navigation.navigate('Main')
  }

  const handleRegionClick = (region) => {
    let cityArr = cities.filter(el => el.region == region)
    setCityArr(cityArr)
    setRegion(1)
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
          <Text style={Styles.categoryCity}>Доставка японської кухні</Text>

          {
            region == null && (
              <>
                <View style={Styles.textBtnContainer}>
                  <TouchableOpacity onPress={() => {handleRegionClick('Рівненська')}}>
                    <Text style={Styles.textBtn}>Рівненська область</Text>
                  </TouchableOpacity>
                </View>
                <View style={Styles.textBtnContainer}>
                  <TouchableOpacity onPress={() => {handleRegionClick('Житомирська')}}>
                    <Text style={Styles.textBtn}>Житомирська область</Text>
                  </TouchableOpacity>
                </View>
                <View style={Styles.textBtnContainer}>
                  <TouchableOpacity onPress={() => {handleRegionClick('Тернопільська')}}>
                    <Text style={Styles.textBtn}>Тернопільська область</Text>
                  </TouchableOpacity>
                </View>
                <View style={Styles.textBtnContainer}>
                  <TouchableOpacity onPress={() => {handleRegionClick('Хмельницька')}}>
                    <Text style={Styles.textBtn}>Хмельницька область</Text>
                  </TouchableOpacity>
                </View>
                <View style={Styles.textBtnContainer}>
                  <TouchableOpacity onPress={() => {handleRegionClick('Київська')}}>
                    <Text style={Styles.textBtn}>Київська область</Text>
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
              cityArr.map((item, index) => {
                return <Text style={Styles.cityListText} key={index} onPress={() => {handleCityClick(item)}}>{item.name}</Text>
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
