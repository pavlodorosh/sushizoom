import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import {Picker} from '@react-native-community/picker';

import Header from '../components/Header/Header';
import Styles from '../styles/StartStyles';


const cities = {
  rivne: ['Місто 1', 'Місто 2', 'Місто 3', 'Місто 4'],
  kiev: ['Місто 1', 'Місто 2', 'Місто 3'],
  zhutomir: ['Місто 1', 'Місто 2'],
  khmelnitsk: ['Місто 1'],
}

const StartScreen = () => {
  const [region, setRegion] = useState('rivne');

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Header />
        <View style={Styles.body}>
          <View style={Styles.sectionContainer}>
            <Image
              source={require('../../assets/images/logo.png')}
              style={Styles.logoMain}
            />
            <View style={Styles.selectContainer}>
              <Picker
                selectedValue={region}
                onValueChange={v => setRegion(v)}
                style={Styles.select}>
                <Picker.Item label="Рівненська" value="rivne" />
                <Picker.Item label="Київська" value="kiev" />
                <Picker.Item label="Житомирська" value="zhutomir" />
                <Picker.Item label="Хмельницька" value="khmelnitsk" />
              </Picker>
            </View>
            { 
              region != null && (
                cities[region].map((item, index) => {
                  return <Text style={Styles.cityListItem} key={index}>{item}</Text>
                }) 
              )                
            }
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default StartScreen;
