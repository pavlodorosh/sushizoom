import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import React from 'react';
import Styles from '../styles/Styles';

const CategoryScreen = ({navigation, route}) => {
  const { region } = route.params
  const { city } = route.params

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={Styles.body}>
            <View style={Styles.sectionContainer}>
              <Image
                source={require('../../assets/images/logo.png')}
                style={Styles.logoCategory}
              />
              <Image
                source={require('../../assets/images/_Sushiboom.jpg')}
                style={Styles.categoryImg}
              />
              <Text style={Styles.categoryTitle}>КАТАЛОГ</Text>
              <Image
                source={require('../../assets/images/_Sushiboom.jpg')}
                style={Styles.categoryImg}
              />
              <Text style={Styles.categoryTitleAction}>АКЦІЇ</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};


export default CategoryScreen;
