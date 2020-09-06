import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import IconCart from '../components/IconCart';
import Styles from '../styles/Styles';
import TopCity from '../components/TopCity';
import database from '@react-native-firebase/database';
import {useSelector} from 'react-redux';

const CatalogScreen = ({navigation, route}) => {
  const [categories, setCategories] = useState(null);
  const state = useSelector(state => state, []);

  useEffect(() => {
    if (categories == null) {
      database()
        .ref('category')
        .once('value')
        .then(snapshot => {
          setCategories(snapshot.val());
        });
    }
  });

  return (
    <View style={Styles.back}>
      <TopCity city={state.data.city[0].name} />
      <TouchableHighlight
        underlayColor="transparent"
        style={Styles.cartIconTouchWrap}
        onPress={() => {
          navigation.navigate('Order');
        }}>
        <IconCart count={state.data.cartCount} />
      </TouchableHighlight>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={Styles.body}>
          <View style={Styles.sectionContainer}>
            <Image
              source={require('../../assets/images/logo.png')}
              style={Styles.logoCategory}
            />
            <View style={Styles.categoryWrapper}>
              {categories != null &&
                Object.keys(categories).map((cat, index) => {
                  if(categories[cat]){
                    return (
                      <View key={index} style={Styles.categoryItem}>
                        <TouchableWithoutFeedback
                          onPress={() => {
                            navigation.navigate('Products', {
                              id: categories[cat].id,
                            });
                          }}>
                          <Image
                            source={{uri: categories[cat].image}}
                            style={Styles.categoryImg}
                            tintColor="#cccccc"
                          />
                        </TouchableWithoutFeedback>
                        <Text
                          style={Styles.categoryTitle}
                          onPress={() => {
                            navigation.navigate('Products', {
                              id: categories[cat].id,
                            });
                          }}>
                          {categories[cat].name}
                        </Text>
                      </View>
                    );
                  }
                })}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CatalogScreen;
