import React from 'react';
import {
  View, 
  Text, 
  Image, 
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  TouchableWithoutFeedback 
} from 'react-native';

import Header from '../components/Header/Header';
import Colors from '../styles/Colors';

const StartScreen = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Header />
          <TouchableWithoutFeedback onPressIn={() => navigation.navigate('Category')}>
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Image
                  source={require('../../assets/images/logo.png')}
                  style={{width: 180, resizeMode: 'contain'}}
                />
                <Text style={styles.sectionTitle}>Доставка Японської Кухні</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.black,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionContainer: {
    margin: 32,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.white,
  },
});

export default StartScreen;
