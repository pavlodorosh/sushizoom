import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';
import {Picker} from '@react-native-community/picker';

import Header from '../components/Header/Header';
import Colors from '../styles/Colors';

const StartScreen = ({navigation}) => {
  const [value, setValue] = useState('rivne');
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Header />
          {/* <TouchableWithoutFeedback onPressIn={() => navigation.navigate('Category')}> */}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Image
                source={require('../../assets/images/logo.png')}
                style={{width: 180, resizeMode: 'contain'}}
              />
              <View
                style={{
                  borderRadius: 50,
                  overflow: 'hidden',
                  backgroundColor: '#ff0000',
                  justifyContent: 'center',
                  alignContent: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                }}>
                <Picker
                  selectedValue={value}
                  onValueChange={v => setValue(v)}
                  style={{
                    width: 260,
                    height: 50,
                    color: Colors.white,
                    justifyContent: 'center',
                    alignContent: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}>
                  <Picker.Item label="Рівненська" value="rivne" />
                  <Picker.Item label="Київська" value="kiev" />
                  <Picker.Item label="Житомирська" value="xhutomir" />
                  <Picker.Item label="Хмельницька" value="khmenitsk" />
                </Picker>
              </View>

              <Text style={styles.sectionTitle}>Доставка Японської Кухні</Text>
            </View>
          </View>
          {/* </TouchableWithoutFeedback> */}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionContainer: {
    margin: 32,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.white,
  },
});

export default StartScreen;
