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

import React from 'react';
import Styles from '../styles/Styles';

const CatalogScreen = ({navigation, route}) => {
    const {region} = route.params;
    const {city} = route.params;
  
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
                  navigation.navigate('Products', {region, city, collection: 'SushiSet'});
                }}>
                <Image
                  source={require('../../assets/images/_Sushiboom.jpg')}
                  style={Styles.categoryImg}
                />
              </TouchableWithoutFeedback>
              <Text
                style={Styles.categoryTitle}
                onPress={() => {
                  navigation.navigate('Products', {region, city, collection: 'SushiSet'});
                }}>
                СУШІ СЕТИ
              </Text>
            </View>
          </View>
        </ScrollView>
      </>
    );
  };
  
  export default CatalogScreen;
  