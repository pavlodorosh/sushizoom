import {Image, SafeAreaView, StatusBar, Text, View} from 'react-native';
import React, {useState} from 'react';

import Header from '../components/Header/Header';
import {Picker} from '@react-native-community/picker';
import Styles from '../styles/StartStyles';

const cities = {
  rivne: {
    label: 'Рівненська',
    arr: ['Місто 1', 'Місто 2', 'Місто 3', 'Місто 4'],
  },
  kiev: {
    label: 'Київська',
    arr: ['Місто 1', 'Місто 2', 'Місто 3'],
  },
  zhutomir: {
    label: 'Житомирська',
    arr: ['Місто 1', 'Місто 2'],
  },
  khmelnitsk: {
    label: 'Хмельницька',
    arr: ['Місто 1'],
  },
};

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
                {Object.keys(cities).map((item, index) => {
                  return (
                    <Picker.Item
                      label={cities[item].label}
                      value={item}
                      key={index}
                    />
                  );
                })}
              </Picker>
            </View>
            {region != null &&
              cities[region]['arr'].map((item, index) => {
                return (
                  <Text style={Styles.cityListItem} key={index}>
                    {item}
                  </Text>
                );
              })}
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default StartScreen;
