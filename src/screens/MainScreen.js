import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useContext} from 'react';

import Context from '../context'
import Styles from '../styles/Styles';

const CategoryScreen = ({navigation, route}) => {
  
  const context = useContext(Context)

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={Styles.body}>
          <View style={Styles.sectionContainer}>
            <Image
              source={require('../../assets/images/logo.png')}
              style={Styles.logoCategory}
            />
              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate('Catalog');
                }}>
                <Image
                  source={require('../../assets/images/_Sushiboom.jpg')}
                  style={Styles.categoryImg}
                />
              </TouchableWithoutFeedback>
              <Text
                style={Styles.categoryTitle}
                onPress={() => {
                  navigation.navigate('Catalog');
                }}>
                МЕНЮ
              </Text>
            
              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate('Action');
                }}>
                <Image
                  source={require('../../assets/images/_Sushiboom.jpg')}
                  style={Styles.categoryImg}
                />
              </TouchableWithoutFeedback>
              <Text
                style={Styles.categoryTitleAction}
                onPress={() => {
                  navigation.navigate('Action');
                }}>
                АКЦІЇ
              </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default CategoryScreen;
